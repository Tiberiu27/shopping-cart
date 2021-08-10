import { Link } from 'react-router-dom';
import '../styles/Navigation.css';

const Navigation = () => {
    return(
        <nav>
            <Link to="/">Homepage</Link>
            <Link to="/shop">Shop</Link>
        </nav>
    )
}

export default Navigation;