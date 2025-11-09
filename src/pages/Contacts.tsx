import { Link } from "react-router";
import { CONTACTS } from "../data/contacts";

const Contacts = () => {
    return <>
        <h1>This is Contacts page.</h1>
        <ul>
            {
                CONTACTS.map((contactItem) => {
                    return <li key={contactItem.id}>
                        <Link to={`/contacts/${contactItem.id}`}>{contactItem.name}</Link>
                    </li>
                })
            }
        </ul>
    </>;
};

export default Contacts;