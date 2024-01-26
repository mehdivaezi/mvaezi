import { useState } from 'react';

export function useMergedState(initialState) {
  const [value, setValue] = useState(initialState);

  const mergeState = (newState) => {
    if (typeof newState === 'function') newState = newState(value);
    setValue({ ...value, ...newState });
  };

  return [value, mergeState];
}
