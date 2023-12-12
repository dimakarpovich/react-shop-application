import BasketItem from "./BasketItem";

function BasketList(props) {
    const {
        order = [],
        basketShow = Function.prototype,
        removeFromBasket = Function.prototype,
        incItem = Function.prototype,
        decItem = Function.prototype,
    } = props;

    const totalPrice = order.reduce((sum, element) => {
        return sum + element.finalPrice * element.quantity;
    }, 0);
    return (
        <div className="collection basket-block">
            <ul className="collection-item active">
                Корзина
                <span className="secondary-content">
                    <i className="material-icons" onClick={basketShow}>
                        close
                    </i>
                </span>
            </ul>
            {order.length ? (
                order.map((item) => (
                    <BasketItem
                        key={item.mainId}
                        removeFromBasket={removeFromBasket}
                        incItem={incItem}
                        decItem={decItem}
                        {...item}
                    />
                ))
            ) : (
                <li className="collection-item ">Корзина пуста</li>
            )}
            <li className="collection-item active">
                Общая сумма: {totalPrice} руб.
            </li>
        </div>
    );
}
export default BasketList;
