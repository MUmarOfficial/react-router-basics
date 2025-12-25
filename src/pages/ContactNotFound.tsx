import { Link } from "react-router";

const ContactNotFound = () => { 
    return <>
    <h1>Contact Not Found!</h1>
    <Link to={`/contacts`}>Go to contacts</Link>
    </>;
}

export default ContactNotFound;