import { StorageKeys } from "../../constants";

interface StorageInterface {
	getItem: (key: StorageKeys) => string | null;
	setItem: (key: StorageKeys, value: string) => void;
	removeItem: (key: StorageKeys) => void;
}

export const LocalStorage: StorageInterface = {
	getItem: (key) => {
		try {
			return localStorage.getItem(key);
		} catch (e) {
			return null;
		}
	},
	setItem: (key, value) => {
		try {
			localStorage.setItem(key, value);
		} catch (e) {
			// TODO: add error handler
		}
	},
	removeItem: (key) => {
		try {
			localStorage.removeItem(key);
		} catch (e) {
			// TODO: add error handler
		}
	},
};
