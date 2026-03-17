import { useState, useEffect } from 'react'

interface CartData {
  items: any[]
  total: number
}

const CART_STORAGE_KEY = 'gemstone-cart'

export function useLocalStorage(key: string, initialValue: any) {
  const [storedValue, setStoredValue] = useState(initialValue)
  const [isMounted, setIsMounted] = useState(false)

  // Inicializa no cliente
  useEffect(() => {
    try {
      const item = window.localStorage.getItem(key)
      if (item) {
        setStoredValue(JSON.parse(item))
      }
    } catch (error) {
      console.warn(`Error reading from localStorage:`, error)
    }
    setIsMounted(true)
  }, [key])

  // Salva quando o valor mudar
  const setValue = (value: any) => {
    try {
      const valueToStore = value instanceof Function ? value(storedValue) : value
      setStoredValue(valueToStore)
      if (typeof window !== 'undefined') {
        window.localStorage.setItem(key, JSON.stringify(valueToStore))
      }
    } catch (error) {
      console.warn(`Error writing to localStorage:`, error)
    }
  }

  return [storedValue, setValue, isMounted]
}

export function getCartFromStorage(): CartData | null {
  if (typeof window === 'undefined') return null
  
  try {
    const item = window.localStorage.getItem(CART_STORAGE_KEY)
    return item ? JSON.parse(item) : null
  } catch (error) {
    console.warn('Error reading cart from storage:', error)
    return null
  }
}

export function saveCartToStorage(cartData: CartData): void {
  if (typeof window !== 'undefined') {
    try {
      window.localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cartData))
    } catch (error) {
      console.warn('Error saving cart to storage:', error)
    }
  }
}

export function clearCartStorage(): void {
  if (typeof window !== 'undefined') {
    try {
      window.localStorage.removeItem(CART_STORAGE_KEY)
    } catch (error) {
      console.warn('Error clearing cart storage:', error)
    }
  }
}
