function Cart(props) {
    const { quantity = 0, basketShow = Function.prototype } = props;

    return (
        <div className="cart teal darken-2 white-text" onClick={basketShow}>
            <i className="material-icons">add_shopping_cart</i>
            {quantity ? (
                <span className="cart-quantity">{quantity}</span>
            ) : null}
        </div>
    );
}
export default Cart;
