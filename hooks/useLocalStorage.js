export default function useLocalStorage(key, initialValue) {
    const [storedValue, setStoreValue] = useState(() => {
        const item = window.localStorage.getItem(key);
        return item ? JSON.parse(item) : initialValue;
    });
    
    function setValue(value) {
        
    }
    return [storedValue];
};