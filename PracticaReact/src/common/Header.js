
import { Link, NavLink } from 'react-router-dom';

const Header =({Link1, Link2})=>{

    return (
        <header>
            <nav>
                <div>
                    <Link to="newAdverts">New Adverts</Link>
                </div>
                <div>
                    <NavLink to="/adverts">Adverts</NavLink>
                </div>
            </nav>
        </header>
    )
}

export default Header