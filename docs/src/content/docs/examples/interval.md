---
title: Interval Hooks
description: Custom hooks for managing intervals in Preactor components
---

Preactor provides custom hooks for working with intervals in your components. These hooks simplify the process of setting up and cleaning up intervals, helping you avoid memory leaks and ensuring proper lifecycle management.

## Features

- Automatic cleanup of intervals when components unmount
- Dependency array support for controlling when intervals are reset
- State management integration with `useIntervalState`
- Type-safe implementation with TypeScript

## How It Works

The interval hooks leverage Preact's `useEffect` hook to properly manage the lifecycle of `setInterval` calls:

- When a component mounts, the interval is created
- When the component unmounts, the interval is automatically cleared
- When dependencies change, the interval is reset

## Available Hooks

### useInterval

The `useInterval` hook sets up an interval that automatically cleans up when the component unmounts.

```typescript
function useInterval(
  delay: number,
  callback: () => void,
  inputs: ReadonlyArray<unknown>
): void
```

#### Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `delay` | `number` | The interval delay in milliseconds |
| `callback` | `() => void` | The function to call on each interval |
| `inputs` | `ReadonlyArray<unknown>` | Dependencies that will reset the interval when changed |

### useIntervalState

The `useIntervalState` hook combines interval functionality with state management. It periodically updates a state value based on the callback function.

```typescript
function useIntervalState<T>(
  delay: number,
  callback: () => T,
  inputs?: ReadonlyArray<unknown>
): T
```

#### Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `delay` | `number` | The interval delay in milliseconds |
| `callback` | `() => T` | Function that returns the new state value |
| `inputs` | `ReadonlyArray<unknown>` (optional) | Dependencies that will reset the interval when changed |

#### Return Value

Returns the current state value of type `T`.

## Usage Examples

### Basic Interval

```typescript
import { useInterval } from 'preactor';

function TickingClock() {
  const [seconds, setSeconds] = useState(0);

  useInterval(1000, () => {
    setSeconds(prev => prev + 1);
  }, []);

  return <div>Seconds elapsed: {seconds}</div>;
}
```

### Interval with Dependencies

```typescript
import { useInterval } from 'preactor';

function CountdownTimer({ startFrom, onComplete }) {
  const [count, setCount] = useState(startFrom);

  useInterval(1000, () => {
    if (count > 0) {
      setCount(prev => prev - 1);
    } else {
      onComplete();
    }
  }, [count, onComplete]);

  return <div>Time remaining: {count} seconds</div>;
}
```

### Using useIntervalState

```typescript
import { useIntervalState } from 'preactor';

function ServerStatusMonitor({ serverId }) {
  const status = useIntervalState(
    5000,
    () => fetchServerStatus(serverId),
    [serverId]
  );

  return (
    <div>
      <h2>Server Status</h2>
      <div>Status: {status.isOnline ? 'Online' : 'Offline'}</div>
      <div>Last updated: {new Date().toLocaleTimeString()}</div>
    </div>
  );
}
```

## Implementation

```typescript
import { useEffect, useState } from 'preact/hooks';

type Inputs = ReadonlyArray<unknown>;

export function useInterval(delay: number, callback: () => void, inputs: Inputs) {
  useEffect(() => {
    const interval = setInterval(callback, delay);
    return () => clearInterval(interval);
  }, [...inputs, delay]);
}

export function useIntervalState<T>(delay: number, callback: () => T, inputs?: Inputs) {
  const [state, setState] = useState(callback());
  useInterval(delay, () => setState(callback()), inputs ? inputs : []);

  useEffect(() => setState(callback()), inputs ? inputs : []);
  return state;
}
```

## Best Practices

1. **Choose appropriate intervals**: Be mindful of performance implications when setting interval durations. Very short intervals (< 100ms) can cause performance issues.

2. **Use the dependency array properly**: Include all variables referenced in your callback function in the dependency array to avoid stale closures.

3. **Handle cleanup for long-running components**: The hooks automatically clean up intervals when components unmount, but for long-running components, consider adding manual cleanup logic if the interval is no longer needed.

4. **Avoid expensive operations in interval callbacks**: Keep interval callbacks lightweight. For expensive operations, consider using web workers or throttling techniques.

5. **Set reasonable polling intervals for calls**: When using `useIntervalState` for data polling, use reasonable intervals (0.5-2 seconds) to avoid overwhelming the Unity.

6. **Handle error cases**: When using `useIntervalState` with API calls, ensure your callback function handles errors gracefully:

```typescript
const data = useIntervalState(
  5000,
  async () => {
    try {
      return await fetchData();
    } catch (error) {
      console.error('Failed to fetch data:', error);
      return { error: true, message: error.message };
    }
  },
  []
);
```

7. **Consider using a dynamic delay**: For advanced use cases, you might want to adjust the delay based on certain conditions:

```typescript
// Exponential backoff for failed requests
const [delay, setDelay] = useState(1000);
const [retries, setRetries] = useState(0);

useInterval(delay, async () => {
  try {
    const result = await fetchData();
    // Reset on success
    setDelay(1000);
    setRetries(0);
  } catch (error) {
    // Increase delay with each retry (up to 30 seconds)
    setRetries(prev => prev + 1);
    setDelay(Math.min(30000, 1000 * Math.pow(2, retries)));
  }
}, [delay, retries]);
```

## Next Steps

Now that you understand how to use interval hooks, you might want to explore:

1. [Button Component](/examples/button) - Learn how to create interactive UI elements
2. [Localization](/examples/localization) - Add multi-language support to your UI
3. [Extensions](/examples/extensions) - Discover how to extend Preactor's functionality

For more examples, check out the [Examples](/examples) section.
