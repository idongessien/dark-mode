import React, {useEffect} from 'react'
import useLocalStorage from './useLocalStorage'

export default function useDarkMode(){
 const [darkMode, setDarkMode] = useLocalStorage(key, initialValue);

 function switchDarkMode(e) {
    e.preventDefault();

    return darkMode ? setDarkMode(true) : setDarkMode(false)
 };

 useEffect(() => {
     if( useLocalStore == true) {
         document.querySelector(body).classList.add("dark-mode");
     }else{
        document.querySelector(body).classList.remove("dark-mode");
     }
 }, [darkMode]);

 return [ darkmode, setDarkMode, switchDarkMode];
}