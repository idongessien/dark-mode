import React, {useState, useEffect} from 'react'
import useLocalStorage from './useLocalStorage'

export default function useDarkMode(){
 const [darkMode, setDarkMode] = useLocalStorage(key, initialValue);

 
}