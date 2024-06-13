import { useState } from "react";

const useLocalStorage = <T>(key: string, defaultValue: T) => {
  const [savedData, setSavedData] = useState<T>(() => {
    const value = window.localStorage.getItem(key);
    return value !== null ? JSON.parse(value) : defaultValue;
  });

  const setData = (value: T) => {
    setSavedData(value);
    window.localStorage.setItem(key, JSON.stringify(value));
  };

  return [savedData, setData] as const;
};

export default useLocalStorage;
