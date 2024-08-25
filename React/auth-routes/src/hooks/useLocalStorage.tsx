import { useState } from "react";

export const useLocalStorage = (keyName: string, defaultValue: any) => {

    const [storedValue, setStoredValue] = useState(() => {
        try {
            const value = window.localStorage.getItem(keyName);
            if (!value) {
                window.localStorage.setItem(keyName, JSON.stringify(defaultValue));
                return defaultValue;
            }

            return JSON.parse(value);
        
        } catch (err) {
            return defaultValue;
        }
    });

    const setValue = (newValue: any) => {
        try {
            window.localStorage.setItem(keyName, JSON.stringify(newValue));
        } catch (err) {
            console.log(err);
        }
        setStoredValue(newValue);
    };

    return [storedValue, setValue];
};