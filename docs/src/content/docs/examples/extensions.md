---
title: Extensions
description: Various extensions for working with Preactor
---

Preactor provides a set of useful extensions to JavaScript's native types and utility functions for working with C# collections. These extensions enhance the development experience by adding commonly needed functionality and bridging the gap between JavaScript and C# data structures.

## Features

- Extensions to JavaScript native types (Number, BigInt, Array)
- Formatting utilities for numbers (toKMB, toN0)
- Math utilities (clamp)
- Conversion utilities between JavaScript and C# collections
- Iterator helpers for C# collections

## Native Type Extensions

Preactor extends JavaScript's native types with additional methods to simplify common operations:

### Number Extensions

- **toKMB()**: Formats a number using K (thousands), M (millions), B (billions) notation
- **toN0()**: Formats a number with comma separators for thousands
- **clamp(min, max)**: Constrains a number between minimum and maximum values

### BigInt Extensions

- **toKMB()**: Formats a BigInt using K (thousands), M (millions), B (billions) notation
- **toN0()**: Formats a BigInt with comma separators for thousands
- **clamp(min, max)**: Constrains a BigInt between minimum and maximum values

### Array Extensions

- **toSharpIntArray()**: Converts a JavaScript array to a C# int array

## Utility Functions

Preactor provides several utility functions for working with C# collections in JavaScript:

### toJsArray

```typescript
export function toJsArray<T>(csArr: IReadOnlyList$1<T>): T[]
```

Converts a C# `IReadOnlyList<T>` to a JavaScript array. This function:
- Handles null input gracefully (returns an empty array)
- Preserves the order of elements
- Maintains type safety through generics

### map

```typescript
export function map<TKey, TValue, TOutput>(
  dictionary: CS.System.Collections.Generic.Dictionary$2<TKey, TValue>,
  callback: (value: TValue, key: TKey) => TOutput
): TOutput[]
```

Maps over a C# `Dictionary<TKey, TValue>` and transforms its entries using a callback function. This function:
- Handles null input gracefully (returns an empty array)
- Provides both key and value to the callback function
- Returns a new array with the transformed values
- Supports type safety through generics

### sharpArray

```typescript
export function sharpArray<T>(array: CS.System.Collections.Generic.IEnumerable$1<T>): T[]
```

Converts any C# `IEnumerable<T>` to a JavaScript array. This function:
- Handles null input gracefully (returns an empty array)
- Works with any C# collection that implements IEnumerable
- Uses JavaScript iterators to efficiently process the collection
- Maintains type safety through generics

## Usage Examples

### Formatting Numbers

```typescript
// Using toKMB for compact number representation
const largeNumber = 1500000;
console.log(largeNumber.toKMB()); // Outputs: "1.5M"

// Using toN0 for adding thousand separators
const price = 1234567;
console.log(price.toN0()); // Outputs: "1,234,567"
```

### Constraining Values

```typescript
// Using clamp to keep a value within bounds
const userInput = 150;
const validValue = userInput.clamp(0, 100); // Returns 100

const health = -20;
const actualHealth = health.clamp(0, 100); // Returns 0
```

### Working with C# Collections

```typescript
// Converting a C# collection to a JavaScript array
const csList = GetSomeSharpList(); // Returns a C# IReadOnlyList<T>
const jsArray = toJsArray(csList);

// Working with C# dictionaries
const dictionary = GetSomeDictionary(); // Returns a C# Dictionary<TKey, TValue>
const mappedValues = map(dictionary, (value, key) => {
  return { key, value: value * 2 };
});

// Converting any C# enumerable to a JavaScript array
const enumerable = GetSomeEnumerable(); // Returns a C# IEnumerable<T>
const array = sharpArray(enumerable);
```

## Implementation



```typescript
Number.prototype.toKMB = function () {
  return TextExtensions.ToKMB(BigInt(this));
};

Number.prototype.toN0 = function () {
  return this.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
};

Number.prototype.clamp = function (min, max) {
  return Math.min(Math.max(this as number, min), max);
};

BigInt.prototype.toKMB = function () {
  return TextExtensions.ToKMB(BigInt(this));
};

BigInt.prototype.toN0 = function () {
  return this.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
};

BigInt.prototype.clamp = function (min, max) {
  return Math.min(Math.max(this as number, min), max);
};

Array.prototype.toSharpIntArray = function () {
  const arr = CS.System.Array.CreateInstance(puer.$typeof(CS.System.Int32), this.length);
  for (let i = 0; i < this.length; i++) {
    arr.set_Item(i, this[i]);
  }

  return arr;
};

export function toJsArray<T>(csArr: IReadOnlyList$1<T>): T[] {
  if (!csArr) {
    return [];
  }

  const arr = new Array(csArr.Count);
  let i = csArr.Count;

  while (i--) {
    arr[i] = csArr.get_Item(i);
  }

  return arr;
}

export function map<TKey, TValue, TOutput>(
  dictionary: CS.System.Collections.Generic.Dictionary$2<TKey, TValue>,
  callback: (value: TValue, key: TKey) => TOutput
): TOutput[] {
  if (dictionary == null) {
    return [];
  }

  const iterator = {
    [Symbol.iterator]() {
      const enumerator = dictionary.GetEnumerator();

      return {
        next() {
          const done = !enumerator.MoveNext();
          return { value: done ? undefined : enumerator.Current, done };
        }
      };
    }
  };

  const ret: TOutput[] = [];
  for (const item of iterator) {
    ret.push(callback(item.Value, item.Key));
  }

  return ret;
}

export function sharpArray<T>(array: CS.System.Collections.Generic.IEnumerable$1<T>): T[] {
  if (array == null) {
    return [];
  }

  const iterator = {
    [Symbol.iterator]() {
      const enumerator = array.GetEnumerator();

      return {
        next() {
          const done = !enumerator.MoveNext();
          return { value: done ? undefined : enumerator.Current, done };
        }
      };
    }
  };

  return Array.from(iterator) as T[];
}
```

## Best Practices

1. **Use toKMB for large numbers in UI**: When displaying large numbers in UI elements where space is limited, use the `toKMB()` method for a more readable format.

2. **Use toN0 for financial values**: When displaying currency or other financial values, use the `toN0()` method to add thousand separators for better readability.

3. **Always validate user input with clamp**: When accepting numerical input from users, use the `clamp()` method to ensure values stay within acceptable ranges.

4. **Convert C# collections early**: Convert C# collections to JavaScript arrays as early as possible in your code flow to take advantage of JavaScript's array methods.

5. **Be mindful of performance**: Converting between JavaScript and C# collections involves overhead. For large collections that you iterate over multiple times, convert once and store the result.

6. **Type safety with generics**: When using the utility functions, leverage TypeScript's type system by explicitly specifying generic types for better code completion and error checking:

```typescript
// Explicitly specify types for better type safety
const items = toJsArray<ItemType>(csList);
const mappedItems = map<KeyType, ValueType, OutputType>(dictionary, (value, key) => {
  // Your mapping logic
});
```
