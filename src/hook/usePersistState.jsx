import { useState, useEffect } from 'react';
import browserStorage from 'store';

export default (storageKey, initialState) => {

  // inicializo internalState.
  const [state, setInternalState] = useState(initialState);

  // En la carga tomo el dato de store y fijo el estado para esa dato
  useEffect(() => {
    // todo el dato
    const storageInBrowser = browserStorage.get(storageKey);

    // Si el store exite sobreescribo internalState con el dato del store, si no existe queda el valor inicial
    if (storageInBrowser) {
      setInternalState(storageInBrowser);
    }
  }, []);

  // Create a replacement method that will set the state like normal, but that also saves the new state into the store.
  const setState = (newState) => {
    browserStorage.set(storageKey, newState);
    setInternalState(newState);
  };

  return [state, setState];
};