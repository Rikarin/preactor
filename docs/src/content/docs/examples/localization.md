---
title: Localization
description: Strong types for localization keys
---

The Preactor localization system provides a type-safe way to manage and use translated text in your application. It leverages Unity's built-in localization system while adding TypeScript type safety to prevent errors when using localization keys.

## Features

- Type-safe localization keys through TypeScript enums
- Automatic generation of localization key definitions
- Support for string interpolation in translations
- Indexed localization keys for related strings
- Seamless integration between C# and TypeScript

## How It Works

The localization system consists of three main components:

1. **TranslationFileGenerator**: A C# utility that extracts localization keys from Unity's localization system and generates TypeScript enum definitions
2. **L Class (C#)**: A wrapper around Unity's localization system that provides a simplified API for translations
3. **L and LI Functions (TypeScript)**: TypeScript functions that call into the C# translation system

## Setting Up Localization

### 1. Define your localization strings in Unity

Use Unity's built-in localization system to define your strings in the "Default" table.

### 2. Generate TypeScript definitions

Run the "Generate Locales" tool from the Unity menu (Tools > Generate Locales). This will create a TypeScript enum with all your localization keys.

```csharp
public static class TranslationFileGenerator {
    [MenuItem("Tools/Generate Locales")]
    public static void Generate() {
        var table = LocalizationSettings.StringDatabase.GetTable("Default");
        GenerateTSFile(table.Values.Select(x => x.Key).OrderBy(x => x).ToArray());
    }

    static void GenerateTSFile(string[] keys) {
        var str = new StringBuilder();
        str.AppendLine("// Auto-generated localization");

        str.AppendLine("const enum LK {");
        foreach (var key in keys) {
            str.AppendFormat("\t{0} = \"{1}\",\n", key, key);
        }

        str.AppendLine("}");
        File.WriteAllText("Preactor/@types/localization.d.ts", str.ToString());
    }
}
```

This generates a TypeScript enum file at `Preactor/@types/localization.d.ts` that looks like:

```typescript
// Auto-generated localization
const enum LK {
    welcome_message = "welcome_message",
    error_not_found = "error_not_found",
    // ... other keys
}
```

## Usage Examples

### Basic Translation

```typescript
import { L } from 'path/to/localization';

// In your component:
const welcomeText = L(LK.welcome_message);
```

### Translation with Parameters

If your localization string contains placeholders (e.g., "Hello, {0}!"), you can pass parameters:

```typescript
const greeting = L(LK.greeting_with_name, userName);
// If the string is "Hello, {0}!", this will return "Hello, John!" when userName is "John"
```

### Indexed Translations

For related strings that follow a pattern (like "day_1", "day_2", etc.), use the LI function:

```typescript
// Instead of:
const day1 = L(LK.day_1);
const day2 = L(LK.day_2);

// You can use:
const day1 = LI(LK.day_, 1);
const day2 = LI(LK.day_, 2);
```

## Implementation

### C# Translation Wrapper

```csharp
namespace Modules.Translations {
    public static class L {
        public static string Translate(string key, params object[] args) =>
            LocalizationSettings.StringDatabase.GetLocalizedString("Default", key, arguments: args);
    }
}
```

### TypeScript Functions

```typescript
export function L(key: string, ...args: any[]) {
  return CS.Modules.Translations.L.Translate(key, ...args);
}

export function LI(key: string, index: number | string, ...args: any[]) {
  return CS.Modules.Translations.L.Translate(key + index, ...args);
}
```

## Best Practices

1. **Always use the LK enum**: Avoid using string literals for localization keys to prevent typos and enable refactoring.

2. **Run the generator after adding new strings**: Whenever you add new localization strings in Unity, run the generator to update the TypeScript definitions.

3. **Use parameters for dynamic content**: Instead of concatenating strings, use parameters with placeholders in your localization strings.

4. **Group related strings with indexed keys**: For sequences or related items, use a common prefix with indices (e.g., `item_1`, `item_2`).

5. **Add context in the localization key**: Use descriptive keys that provide context for translators (e.g., `button_save` instead of just `save`).

## Next Steps

Now that you understand how to implement localization in your Preactor project, you might want to explore:

1. [Button Component](/examples/button) - Learn how to create interactive UI elements
2. [Interval Hooks](/examples/interval) - Add timed functionality to your components
3. [Image Fitter](/examples/image-fitter) - Understand how to work with images in your UI

For more advanced usage, check out the [Extensions](/examples/extensions) documentation.
