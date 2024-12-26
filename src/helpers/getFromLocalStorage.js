import localforage from 'localforage';

export async function getFromLocalStorage(key) {
    if (typeof key !== 'string') {
        throw new Error('Key must be a string');
    }
    
    return await localforage.getItem(key);
}