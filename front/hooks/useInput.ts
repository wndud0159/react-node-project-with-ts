import { useState, useCallback, Dispatch, SetStateAction } from 'react';

// type ReturnTypes<T = any> = [T, (e: any) => void, Dispatch<SetStateAction<T>>];

const useInput = (initialData: any) => {
  const [value, setValue] = useState(initialData);

  const handler = useCallback((e: any) => {
    setValue(e.target.value);
  }, []);

  return [value, setValue, handler];
};

export default useInput;
