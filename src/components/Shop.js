import '../styles/Shop.css';
import StickyBar from "./StickyBar";
import Item from './Item';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';


const Shop = () => {
    const items = [
        {name: 'Chair', imgName: 'chair', price: 50, quantity: 1, id: 'b4f18811-4070-4d53-8693-cd4e1091adcc'},
        {name: 'Red Chair', imgName: 'redChair', price: 70, quantity: 1, id: '36118ab5-8c78-4b3d-8c43-b715f96ca511'},
        {name: 'Wood Chair', imgName: 'woodChair', price: 30, quantity: 1, id: '0c86c933-658d-4328-908b-1ea159270740'},
        {name: 'Old Chair', imgName: 'oldChair', price: 100, quantity: 1, id: '350ff3b1-9d13-412c-afdd-bfdbb6fd5b61'},
        {name: 'Black Chair', imgName: 'blackChair', price: 50, quantity: 1, id: 'f10d9483-b244-4132-af29-0c2b95bc7740'},
        {name: 'Low Res Chair', imgName: 'lowResChair', price: 20, quantity: 1, id: '063b380d-c233-46d3-a8f8-11843fd521aa'},
        {name: 'Royal Chair', imgName: 'royalChair', price: 150, quantity: 1, id: '2e8b01a5-5085-4780-bc10-92223b50634b'},
        {name: 'Sun Chair', imgName: 'sunChair', price: 60, quantity: 1, id: '4dc3e505-8458-422c-afcb-49e015933dff'},
        {name: 'Relax Chair', imgName: 'relaxChair', price: 40, quantity: 1, id: '8fc142c4-8bce-40d7-9834-6b892de428ba'},
    ];

    const [cartItems, setCartItems] = useState(() => {
        const savedCartItems = localStorage.getItem("cartItems");
        const items = JSON.parse(savedCartItems);
        return items || [];
    });

    useEffect(() => {
        localStorage.setItem("cartItems", JSON.stringify(cartItems));
    }, [cartItems])

    const buy = (item) => {
        if(!cartItems.some(product => product.id === item.id)) {
            setCartItems([...cartItems].concat(item));
            return;
        }
        
        const items = cartItems;
        const itemIndex = items.findIndex(ind => ind.id === item.id);
        items[itemIndex].quantity += 1;
        setCartItems([...items]);
    }

    return(
        <div id="shop">
            <Link to="/checkout">
                <StickyBar quantity={ cartItems.reduce((total, current) => total + current.quantity, 0) }/>
            </Link>
            
            <div id="items-container">
                {
                    items.map(item => {
                        return(
                            <div key={item.id} className="item-container"> 
                            <Link to={{
                                pathname: `/shop/${item.id}`,
                                state: item,
                            }} style={{ textDecoration: "none" }}>
                                <Item name={item.name} imgName={item.imgName} />
                            </Link>
                            <p>{`$${item.price}`}</p>
                            <button onClick={() => buy(item)}>Buy</button>
                            </div>
                        );
                    })
                }
            </div>
        </div>
    )
}

export default Shop;