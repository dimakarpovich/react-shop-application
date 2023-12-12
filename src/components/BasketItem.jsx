function BasketItem(props) {
    const {
        mainId,
        finalPrice,
        displayName,
        quantity,
        removeFromBasket = Function.prototype,
        incItem = Function.prototype,
        decItem = Function.prototype,
    } = props;

    return (
        <li className="collection-item ">
            {displayName} x{" "}
            <i
                className="material-icons change-item "
                onClick={() => decItem(mainId)}
            >
                remove
            </i>
            {quantity}{" "}
            <i
                className="material-icons change-item "
                onClick={() => incItem(mainId)}
            >
                add
            </i>{" "}
            = {finalPrice * quantity} руб.
            <span
                className="secondary-content removeItem"
                onClick={() => removeFromBasket(mainId)}
            >
                <i className="material-icons">close</i>
            </span>
        </li>
    );
}
export default BasketItem;
