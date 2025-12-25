import { useLoaderData } from "react-router";
import { getContactsById } from "../api/contactsApi";
import type { LoaderArgs } from "../types";

// eslint-disable-next-line react-refresh/only-export-components
export const contactDetailLoader = async ({ params }: LoaderArgs) => {
    const { contactId } = params;
    if (!contactId) {
        throw new Error("ContactId not found!");
    }
    const contact = await getContactsById(contactId);
    if (!contact) {
        throw new Error("Contact Not Found!");
    }
    return { contact };
};

const ContactDetail = () => {
    const { contact } = useLoaderData() as Awaited<ReturnType<typeof contactDetailLoader>>;

    return <>
        <h1>{contact?.name.first} {contact?.name.last}</h1>
        <p>{contact?.email}</p>
    </>;
}

export default ContactDetail;