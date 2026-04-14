import type { Contact } from "../types/contact";

const DB_NAME = "youlai-db";
const DB_VERSION = 1;
const STORE_NAME = "contacts";

let db: IDBDatabase | null = null;

function openDB(): Promise<IDBDatabase> {
	if (db) {
		return Promise.resolve(db);
	}
	return new Promise((resolve, reject) => {
		const request = indexedDB.open(DB_NAME, DB_VERSION);

		request.onerror = () => reject(request.error);
		request.onsuccess = () => {
			db = request.result;
			resolve(db);
		};

		request.onupgradeneeded = (event) => {
			const database = (event.target as IDBOpenDBRequest).result;
			if (!database.objectStoreNames.contains(STORE_NAME)) {
				database.createObjectStore(STORE_NAME, { keyPath: "name" });
			}
		};
	});
}

export async function getAllContacts(): Promise<Contact[]> {
	const database = await openDB();
	return new Promise((resolve, reject) => {
		const transaction = database.transaction(STORE_NAME, "readonly");
		const store = transaction.objectStore(STORE_NAME);
		const request = store.getAll();

		request.onerror = () => reject(request.error);
		request.onsuccess = () => resolve(request.result as Contact[]);
	});
}

export async function addContact(contact: Contact): Promise<void> {
	const database = await openDB();
	return new Promise((resolve, reject) => {
		const transaction = database.transaction(STORE_NAME, "readwrite");
		const store = transaction.objectStore(STORE_NAME);
		const request = store.put(contact);

		request.onerror = () => reject(request.error);
		request.onsuccess = () => resolve();
	});
}

export async function deleteContact(name: string): Promise<void> {
	const database = await openDB();
	return new Promise((resolve, reject) => {
		const transaction = database.transaction(STORE_NAME, "readwrite");
		const store = transaction.objectStore(STORE_NAME);
		const request = store.delete(name);

		request.onerror = () => reject(request.error);
		request.onsuccess = () => resolve();
	});
}
