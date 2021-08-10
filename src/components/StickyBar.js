import '../styles/StickyBar.css';

const StickyBar = (props) => {
    return(
        <div id="sticky-bar">
            <h5>Items in cart: {props.quantity}</h5>
        </div>
    )
}

export default StickyBar;