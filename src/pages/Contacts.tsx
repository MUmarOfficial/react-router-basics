import { Link, useLoaderData } from "react-router";
// import { contactsLoader } from "./Loaders";
import { getContacts } from "../api/contactsApi";

// eslint-disable-next-line react-refresh/only-export-components
export const contactsLoader = async () => {
    const contacts = await getContacts();
    return { contacts };
}

const Contacts = () => {
    const { contacts } = useLoaderData() as Awaited<ReturnType<typeof contactsLoader>>;
    return <>
        <h1>This is Contacts page.</h1>
        <ul>
            {
                contacts.map((contactItem) => {
                    return <li key={contactItem.login.uuid}>
                        <Link to={`/contacts/${contactItem.login.uuid}`}>{contactItem.name.first} {contactItem.name.last}</Link>
                    </li>
                })
            }
        </ul>
    </>;
};

export default Contacts;