import { Link } from "react-router-dom";

const Navbar = () => {

    return (
        <header>
            <div className="container">
                <Link to="/"><p>home</p></Link>
                <nav>
                    <div>
                        <Link to="/login">login</Link>
                    </div>
                </nav>
            </div>
        </header>
    )
}

export default Navbar;