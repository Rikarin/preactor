---
title: Image Fitter
description: A component that automatically resizes images to fit within a container
---

The Image Fitter component is a utility that automatically resizes an image to fit within a container while maintaining its aspect ratio. This is particularly useful when you want to display images of varying dimensions in a consistent way across your UI.

## Features

- Maintains the original aspect ratio of the image
- Can constrain by either width or height
- Supports various image sources (string URLs, Sprites, or RenderTextures)
- Automatically recalculates dimensions when the container size changes

## How It Works

When constrained by width:
- The component takes the container's width as fixed
- It automatically calculates the appropriate height based on the image's aspect ratio

When constrained by height:
- The component takes the container's height as fixed
- It automatically calculates the appropriate width based on the image's aspect ratio


## Usage Examples

### Basic Usage (Constrain by Width)

```typescript jsx
<Fitter src="path/to/image.png" />
```

### Constrain by Height

```typescript jsx
<Fitter src="path/to/image.png" constrain="height" />
```

### With Custom Styling

```typescript jsx
<Fitter 
  src="path/to/image.png"
  style={{ border: '1px solid red', borderRadius: '8px' }}
  class="my-custom-class"
/>
```

## Implementation


```typescript jsx
import { type ClickEvent, type GeometryChangedEvent, type RenderTexture, StyleLength } from 'AiDS/System';
import { type ComponentChildren, h } from 'preact';
import type { Style } from 'preact/jsx';

type FitterConstrain = 'width' | 'height';

interface FitterProps {
  children?: ComponentChildren;
  class?: string;
  style?: Style;
  onClick?: (e: ClickEvent) => void;
  constrain?: FitterConstrain;
  src: string | Sprite | RenderTexture;
}

const Fitter = ({ children, class: className, style, onClick, constrain, src }: FitterProps) => {
  const geometryChanged = (e: GeometryChangedEvent) => {
    constrain ??= 'width';
    const elm = e.target as VisualElement;

    const bg = elm.resolvedStyle.backgroundImage;
    const width = bg.sprite?.rect.width ?? bg.renderTexture?.width;
    const height = bg.sprite?.rect.height ?? bg.renderTexture?.height;

    if (!width || !height) {
      console.error('Invalid background image!', width, height, src);
      return;
    }

    const aspectRatio = width / height;

    if (constrain === 'width') {
      const newHeight = elm.resolvedStyle.width / aspectRatio;
      elm.style.height = new StyleLength(newHeight);
    } else {
      const newWidth = elm.resolvedStyle.height / aspectRatio;
      elm.style.width = new StyleLength(newWidth);
    }
  };

  return (
    <div
      class={className}
      style={{ ...style, backgroundImage: src }}
      onClick={onClick}
      onGeometryChanged={geometryChanged}
    >
      {children}
    </div>
  );
};

export default Fitter;
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `src` | `string \| Sprite \| RenderTexture` | Required | The image source to display |
| `constrain` | `'width' \| 'height'` | `'width'` | Determines whether to constrain by width or height |
| `class` | `string` | `undefined` | CSS class to apply to the container |
| `style` | `Style` | `undefined` | Inline styles to apply to the container |
| `onClick` | `(e: ClickEvent) => void` | `undefined` | Click event handler |
| `children` | `ComponentChildren` | `undefined` | Child components to render inside the container |
