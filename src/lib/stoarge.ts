

export const Storage = {
    save: (key: string, data: any) => localStorage.setItem(key, JSON.stringify(data)),
    get: (key: string) => JSON.parse(localStorage.getItem(key) as string),
    delete: (key: string) => localStorage.removeItem(key),
    clear: () => localStorage.clear()

}