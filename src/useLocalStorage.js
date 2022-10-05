import { useEffect, useState } from 'react';

function getSavedValue(key, initialValue) {
  const savedValue = JSON.parse(localStorage.getItem(key));

  if (savedValue) return savedValue;

  if (initialValue instanceof Function) return initialValue();

  return initialValue;
}

export default function useLocalstorage(key, inititalValue) {
  const [value, setValue] = useState(() => {
    return getSavedValue(key, inititalValue)
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value))
  }, [value, key])

  return [value, setValue]
}