import React, { useEffect, useState } from 'react';

function useLocalStorage(key, defaultValue) {//Передаём ключ, значение

  const[state, setState] = useState(() => {
    let value;
    try {
      value = JSON.parse(
        window.localStorage.getItem(key) || String(defaultValue)
      );
    } catch (e) {
     value = defaultValue;
    }
    return(value);
  });

  useEffect(() => {
    window.localStorage.setItem(key, state);//Записываем состояние в localStorage
  }, [state]);

  return (
    [state, setState]
  );
}

export default useLocalStorage;


  