
export const setItem = <T>(key: string, value: T): void  => {
    localStorage.setItem(key, JSON.stringify(value));
}

export const getItem = <T>(key: string): T | null => {
    const shoecart: string | null = localStorage.getItem(key)
    
    return shoecart ? JSON.parse(shoecart) as T : null;
}