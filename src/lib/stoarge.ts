

export const Storage = {
    save: (key: string, data: any) => localStorage.setItem(key, JSON.stringify(data)),
    get: (key: string) => localStorage.getItem(key),
    delete: (key: string) => localStorage.removeItem(key),
    clear:()=> localStorage.clear()

}