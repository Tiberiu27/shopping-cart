import { useEffect, useState } from 'react';
import '../styles/Checkout.css'
import Item from './Item';

const Checkout = () => {
    const [emptyMessage, setEmptyMessage] = useState("You better do some shopping!");
    const [total, setTotal] = useState(0);
    const [cartItems, setCartItems] = useState(() => {
        const items = localStorage.getItem("cartItems");
        return JSON.parse(items) || [];
    });

    useEffect(()=> {
        localStorage.setItem("cartItems", JSON.stringify(cartItems));

    }, [cartItems]);

    useEffect(()=> {
        getTotal();
    })

    const getTotal = () => {
        const sums = Array.from(document.querySelectorAll('.prices'));
        setTotal(sums.reduce((total, current) => total + Number(current.innerText), 0)); 
    }



    const changeQuantity = (e) => {
        const items = cartItems;
        const itemIndex = items.findIndex(item => item.id === e.target.id);
        items[itemIndex].quantity = Number(e.target.value);
        setCartItems([...items]);
        console.log(items);
        getTotal();
    }

    const placeOrder = () => {
        localStorage.removeItem("cartItems");
        setCartItems([]);
        setEmptyMessage(`Thank you for your order of $${total}! Our chairman will contact you soon!`)
    }

    return(
        <div id="checkout">
           {cartItems.length > 0 ? null :  <h1>{emptyMessage}</h1> }
           <div id="checkout-items-container">
                {
                    cartItems.map(item => {
                        return (
                            <div key={item.id} className="checkout-item">
                                <Item name={item.name} imgName={item.imgName} />
                                <div className="quantity">
                                    <input id={item.id} type="number" min="1" max="99" 
                                        defaultValue={item.quantity} onChange={changeQuantity} />
                                </div>
                                <h2>$</h2>
                                <h2 className="prices">{item.price * item.quantity}</h2>
                            </div>
                        );
                    })
                }
           </div>
           <div id="checkout-button-container">
               <h3>Total: ${total}</h3>
                <button onClick={placeOrder} disabled={cartItems.length > 0 ? false : true}>Place order</button>
           </div>
        </div>
    )
}

export default Checkout;