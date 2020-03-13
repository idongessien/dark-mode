import React, {useEffect} from 'react';
import useLocalStorage from './useLocalStorage';

export default function useDarkMode(key, initialValue){
 const [onDarkMode, setOnDarkMode] = useLocalStorage(key, initialValue);

 function toggleDarkMode(e) {
    e.preventDefault();

    return onDarkMode ? setOnDarkMode(true) : setOnDarkMode(false)
 };

 useEffect(() => {
     if( onDarkMode === true) {
         document.body.classList.add("dark-mode");
     }else{
        document.body.classList.remove("dark-mode");
     }
 }, [onDarkMode]);

 return [ onDarkMode, setOnDarkMode, toggleDarkMode];
};