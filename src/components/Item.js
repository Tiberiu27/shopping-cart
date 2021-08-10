import '../styles/Item.css';

const Item  = (props) => {
    const name = props.name;
    const imgName = props.imgName;
    return(
        <div className="item">
            <h3>{name}</h3>
            <img src={require(`../assets/${imgName}.png`).default} alt=""/>
        </div>
    )
}

export default Item;