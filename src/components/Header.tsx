import { Link } from "react-router";

const Header = () => {
    return <header>
        <nav className="navbar bg-base-100 shadow-sm">
            <div className="flex-1">
                <Link className="btn btn-ghost text-xl" to="/">Contacts App</Link>
            </div>
            <div className="flex-none">
                <ul className="menu menu-horizontal px-1">
                    <li><Link to="/contacts">Contacts</Link></li>
                </ul>
            </div>
        </nav>
    </header>;
}

export default Header;