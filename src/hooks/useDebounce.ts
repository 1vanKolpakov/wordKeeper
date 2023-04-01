import { useEffect, useRef, useState } from "react"

export const useDebounce = <T>(value: T, delay: number): T =>{
  const [debouncedValue, setDebouncedValue] = useState(value)
  const debounceRef = useRef<NodeJS.Timeout>();

  useEffect(() => {
    if(debounceRef.current) {
      clearTimeout(debounceRef.current);
    }
    debounceRef.current = setTimeout(() => {
      setDebouncedValue(value)
    }, delay)
  }, [value, delay])
  
    return debouncedValue
  } 