import { useCallback, useEffect, useState } from "react";
import {
	addContact as dbAddContact,
	deleteContact as dbDeleteContact,
	getAllContacts,
} from "../lib/db";
import type { Contact } from "../types/contact";

export function useContacts() {
	const [contacts, setContacts] = useState<Contact[]>([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState<Error | null>(null);

	const refresh = useCallback(async () => {
		try {
			setLoading(true);
			const data = await getAllContacts();
			setContacts(data);
			setError(null);
		} catch (e) {
			setError(e instanceof Error ? e : new Error("Failed to load contacts"));
		} finally {
			setLoading(false);
		}
	}, []);

	useEffect(() => {
		refresh();
	}, [refresh]);

	const addContact = useCallback(
		async (contact: Contact) => {
			await dbAddContact(contact);
			await refresh();
		},
		[refresh],
	);

	const deleteContact = useCallback(
		async (name: string) => {
			await dbDeleteContact(name);
			await refresh();
		},
		[refresh],
	);

	return { contacts, loading, error, addContact, deleteContact, refresh };
}
