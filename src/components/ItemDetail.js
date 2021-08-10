import { useHistory } from 'react-router-dom';
import '../styles/ItemDetail.css';

const ItemDetail = ({location}) => {
    const item = location.state;
    const history = useHistory();
    const addToCart = () => {
        //TODO: add to cart
        const savedItems = localStorage.getItem("cartItems");
        const items = JSON.parse(savedItems);
        if(!items.some(product => product.id === item.id)) {
            const addedItems = [...items].concat(item);
            localStorage.setItem("cartItems", JSON.stringify(addedItems));
            history.push("/shop");
            return;
        }
        const itemIndex = items.findIndex(ind => ind.id === item.id);
        items[itemIndex].quantity += 1;
        localStorage.setItem("cartItems", JSON.stringify(items));
        history.push("/shop");
    };

    return(
        <div className="item-detail">
            <h3>{item.name}</h3>
            <img src={require(`../assets/${item.imgName}.png`).default} alt=""/>
            <button onClick={addToCart}>Add</button>
        </div>
    )
}

export default ItemDetail;