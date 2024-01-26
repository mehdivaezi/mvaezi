import { useCallback, useState } from 'react';

export function useToggle(initialState = false) {
  // Initialize the state
  const [state, setState] = useState(initialState);

  // Define and memorize toggle function in case we pass down the component,
  // This function change the boolean value to it's opposite value
  const toggle = useCallback(() => setState((state) => !state), []);

  return [state, toggle];
}
