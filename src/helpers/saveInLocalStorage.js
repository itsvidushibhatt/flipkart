import localforage from 'localforage';

export async function saveInLocalStorage(key, data) {
    if (typeof key !== 'string') {
        throw new Error('Key must be a string');
    }
    if (data === null || data === undefined) {
        throw new Error('Data must not be null or undefined');
    }
    await localforage.setItem(key, data);
}
