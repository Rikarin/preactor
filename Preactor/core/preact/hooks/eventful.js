import { useCallback, useEffect, useState } from './index';

/**
 * A convenience hook that, like useState(), returns a stateful value and a function to update it.
 * This one ties the value to a property on a C# object.
 * It takes care of setting up and cleaning up the C# value changed event automatically.
 *
 * @param obj The C# object containing the property to be observed
 * @param propertyName The name of the property to be observed
 * @param eventName The name of the event to be observed. If not specified, it defaults to "On{propertyName}Changed"
 * @returns
 */
export function useEventfulState(obj, propertyName, eventName) {
  // Guarantee the component is re-rendered on changed event,
  //  by ensuring that the state is always updated with a different identity
  //  to handle the case where the object property is an array
  //  and the changed event is raised with the same array instance.
  const [state, setState] = useState({ value: obj?.[propertyName] });
  const setValue = useCallback(value => setState({ value }), []);

  useEffect(() => {
    if (obj == null) return;

    eventName ??= `On${propertyName}Changed`;
    setValue(obj[propertyName]);
    return interop.Subscribe(obj, eventName, setValue);
  }, [obj]);

  const setValWrapper = useCallback(
    v => {
      if (obj == null) return;

      obj[propertyName] = v;
      // setVal(v) // No need to set the state here in JS. The event handling stuff above will do.
    },
    [obj]
  );

  return [state.value, setValWrapper];
}
