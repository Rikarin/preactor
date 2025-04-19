---
title: Button
description: A customizable button component with various styles and behaviors
---

Preactor provides a flexible Button component that can be styled in various ways and supports advanced interactions like repeat clicks. The Button component leverages utility libraries like `class-variance-authority` (cva) and `clsx` for efficient styling management.

## Features

- Multiple visual variants (default, small, icon)
- Color options (green, red, yellow, sky, gray)
- Customizable corner radius
- Disabled state styling
- Support for repeat clicks (auto-repeat when held down)
- Pointer capture for better touch/mouse interaction
- Fully customizable with additional classes and styles

## How It Works

The Button component uses a combination of:

1. **class-variance-authority (cva)** for managing variant-based styling
2. **clsx** for combining class names
3. **Preact hooks** for managing state and effects
4. **PointerCaptureHelper** for handling pointer events

## Button Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `variant` | `'none' \| 'default' \| 'small' \| 'icon'` | `'default'` | Controls the button's size and padding |
| `color` | `'green' \| 'red' \| 'yellow' \| 'sky' \| 'gray'` | `'sky'` | Sets the button's color scheme |
| `children` | `ComponentChildren` | - | Content to display inside the button |
| `onClick` | `() => void` | - | Function called when the button is clicked |
| `class` | `string` | - | Additional CSS classes to apply |
| `style` | `Style` | - | Inline styles to apply |
| `repeat` | `boolean` | `false` | When true, triggers repeated clicks when held down |
| `enabled` | `boolean` | `true` | When false, disables the button |
| `roundedSize` | `'md' \| 'lg' \| 'xl'` | `'xl'` | Controls the button's corner radius |

## Usage Examples

### Basic Button

```tsx
import Button from './Button';

function SaveButton() {
  return (
    <Button onClick={() => saveData()}>
      Save
    </Button>
  );
}
```

### Button Variants

```tsx
import Button from './Button';

function ButtonVariants() {
  return (
    <div className="flex gap-4">
      <Button variant="default">Default</Button>
      <Button variant="small">Small</Button>
      <Button variant="icon">🔍</Button>
    </div>
  );
}
```

### Button Colors

```tsx
import Button from './Button';

function ColorButtons() {
  return (
    <div className="flex gap-4">
      <Button color="green">Success</Button>
      <Button color="red">Delete</Button>
      <Button color="yellow">Warning</Button>
      <Button color="sky">Info</Button>
      <Button color="gray">Cancel</Button>
    </div>
  );
}
```

### Disabled Button

```tsx
import Button from './Button';

function DisabledButton({ isFormValid }) {
  return (
    <Button 
      enabled={isFormValid} 
      onClick={() => submitForm()}
    >
      Submit
    </Button>
  );
}
```

### Repeat Button

```tsx
import Button from './Button';

function CounterButton() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <Button 
        repeat={true} 
        onClick={() => setCount(prev => prev + 1)}
      >
        Increment
      </Button>
      <div>Count: {count}</div>
    </div>
  );
}
```

### Custom Styling

```tsx
import Button from './Button';

function CustomButton() {
  return (
    <Button 
      class="shadow-lg hover:shadow-xl transition-shadow"
      style={{ minWidth: '150px' }}
    >
      Custom Styled
    </Button>
  );
}
```

## Using cva and clsx

The Button component uses two utility libraries for styling:

### class-variance-authority (cva)

`cva` is a utility for creating variant-based component styling. It allows you to:

1. Define base styles that apply to all variants
2. Create variant groups (like color, size, etc.)
3. Define compound variants for specific combinations
4. Set default variants

```tsx
// Example of cva usage in Button component
const buttonVariants = cva(
  [
    // Base styles that apply to all buttons
    'shrink-0 pb-[3px] text-3xl text-outline text-center',
    'border-slate-600 border-b-[3px] border-l-[1px] border-r-[1px]'
  ],
  {
    // Variant groups
    variants: {
      variant: {
        default: '[&_.btn-inner]:px-4 [&_.btn-inner]:py-4',
        small: '[&_.btn-inner]:px-2 [&_.btn-inner]:py-4 text-lg',
        // ...
      },
      // ...
    },
    // Default variants
    defaultVariants: {
      variant: 'default',
      color: 'sky',
      // ...
    }
  }
);
```

### clsx

`clsx` is a tiny utility for constructing `className` strings conditionally. It:

1. Merges multiple class strings
2. Filters out falsy values
3. Handles various input types (strings, objects, arrays)

```tsx
// Example of clsx usage in Button component
<div class={clsx(
  buttonVariants(variant), // Classes from cva
  props.class              // Additional custom classes
)}>
  {/* Button content */}
</div>
```

## Repeat Click Functionality

The Button component includes a special "repeat" feature that triggers the `onClick` callback repeatedly when the button is held down:

1. When `repeat={true}` and the button is pressed, it sets `isDown` state to true
2. After 500ms of being held down, it activates the repeat mode
3. In repeat mode, it uses `useInterval` to call the `onClick` callback every 200ms
4. When the button is released, both `isDown` and `repeat` states are reset

This is useful for increment/decrement buttons or any action that might need to be repeated quickly.

## Implementation

```typescript jsx
import { PointerCaptureHelper } from 'AiDS/System';
import { cva } from 'class-variance-authority';
import { clsx } from 'clsx';
import { type ComponentChildren, h } from 'preact';
import { useEffect, useState } from 'preact/hooks';
import type { Style } from 'preact/jsx';

import { useInterval } from '../../Hooks';

export type ButtonColor = 'green' | 'red' | 'yellow' | 'sky' | 'gray';
export type ButtonVariant = 'none' | 'default' | 'small' | 'icon';

const buttonVariants = cva(
  [
    'shrink-0 pb-[3px] text-3xl text-outline text-center',
    'border-slate-600 border-b-[3px] border-l-[1px] border-r-[1px]'
  ],
  {
    variants: {
      variant: {
        none: null,
        default: '[&_.btn-inner]:px-4 [&_.btn-inner]:py-4',
        small: '[&_.btn-inner]:px-2 [&_.btn-inner]:py-4 text-lg',
        icon: '[&_.btn-inner]:p-2'
      },
      color: {
        green: null,
        red: null,
        yellow: null,
        sky: null,
        gray: null
      },
      roundedSize: {
        md: 'rounded-lg [&_.btn-inner]:rounded-lg',
        lg: 'rounded-xl [&_.btn-inner]:rounded-xl',
        xl: 'rounded-2xl [&_.btn-inner]:rounded-2xl'
      },
      disabled: {
        false: null,
        true: 'bg-gray-700 [&_.btn-inner]:bg-gray-500'
      }
    },
    compoundVariants: [
      {
        color: 'green',
        disabled: false,
        class: 'bg-green-700 [&_.btn-inner]:bg-green-500'
      },
      {
        color: 'red',
        disabled: false,
        class: 'bg-red-700 [&_.btn-inner]:bg-red-500'
      },
      {
        color: 'yellow',
        disabled: false,
        class: 'bg-yellow-700 [&_.btn-inner]:bg-yellow-500'
      },
      {
        color: 'sky',
        disabled: false,
        class: 'bg-sky-700 [&_.btn-inner]:bg-sky-500'
      },
      {
        color: 'gray',
        disabled: false,
        class: 'bg-gray-700 [&_.btn-inner]:bg-gray-500'
      }
    ],
    defaultVariants: {
      variant: 'default',
      color: 'sky',
      roundedSize: 'xl',
      disabled: false
    }
  }
);

export interface ButtonProps {
  variant?: ButtonVariant;
  color?: ButtonColor;
  children?: ComponentChildren;
  onClick?: () => void;
  class?: string;
  style?: Style;
  repeat?: boolean;
  enabled?: boolean;
  roundedSize?: 'md' | 'lg' | 'xl';
}

const Button = (props: ButtonProps) => {
  const [isDown, setIsDown] = useState(false);
  const [repeat, setRepeat] = useState(false);
  props.enabled ??= true;

  useEffect(() => {
    if (isDown) {
      const timeout = setTimeout(() => {
        if (!isDown) {
          return;
        }

        setRepeat(true);
      }, 500);
      return () => clearTimeout(timeout);
    }
  }, [isDown]);

  if (repeat) {
    useInterval(200, () => props.onClick?.(), [props.onClick]);
  }

  const variant = {
    roundedSize: props.roundedSize,
    color: props.color,
    disabled: !props.enabled,
    variant: props.variant
  };
  return (
    <div class={clsx(buttonVariants(variant), props.class)} style={props.style}>
      <div class="btn-inner h-full w-full items-center justify-center">
        {props.children}
        <div
          class="absolute inset-0"
          onClick={() => props.enabled && props.onClick?.()}
          onPointerCaptureOut={() => {
            setIsDown(false);
            setRepeat(false);
          }}
          onPointerDown={e => {
            setIsDown(!!props.repeat);
            PointerCaptureHelper.CapturePointer(e.target, e.pointerId);
          }}
          onPointerUp={e => {
            setIsDown(false);
            setRepeat(false);
            PointerCaptureHelper.ReleasePointer(e.target, e.pointerId);
          }}
        />
      </div>
    </div>
  );
};

export default Button;
```

## Best Practices

1. **Use semantic colors**: Choose button colors based on their semantic meaning - green for success/confirm, red for delete/danger, yellow for warnings, etc.

2. **Provide feedback for disabled state**: Always ensure disabled buttons have a visually distinct appearance to indicate they cannot be interacted with.

3. **Use the repeat feature sparingly**: The repeat feature is useful for increment/decrement operations but can lead to unintended consequences if used for destructive actions.

4. **Maintain consistent sizing**: Try to use the same variant across similar actions in your interface for visual consistency.

5. **Add descriptive text or icons**: Buttons should clearly communicate their action through text or recognizable icons.

6. **Leverage cva for component variants**: When creating new components with multiple variants, follow the pattern used in the Button component with cva:
   ```tsx
   const myComponentVariants = cva(
     ['base-classes-here'],
     {
       variants: {
         // Define your variants here
       },
       defaultVariants: {
         // Set sensible defaults
       }
     }
   );
   ```

7. **Use clsx for conditional classes**: When you need to combine multiple class sources or apply classes conditionally:
   ```tsx
   <div class={clsx(
     'base-class',
     isActive && 'active-class',
     variant === 'large' ? 'large-class' : 'small-class',
     customClasses
   )}>
   ```

8. **Handle touch interactions properly**: For touch devices, use the pointer capture pattern demonstrated in the Button component to ensure proper event handling.

## Next Steps

Now that you understand how to use the Button component, you might want to explore:

1. [Interval Hooks](/examples/interval) - Learn how to create components with timed functionality
2. [Localization](/examples/localization) - Add multi-language support to your UI
3. [Image Fitter](/examples/image-fitter) - Understand how to work with images in your UI

For more advanced usage, check out the [Extensions](/examples/extensions) documentation.
