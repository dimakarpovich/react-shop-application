function GoodsItem(props) {
    const {
        displayName,
        mainId,
        displayAssets,
        price,
        granted,
        addToBasket = Function.prototype,
    } = props;

    const { description } = granted[0];
    const { full_background } = displayAssets[0];
    const { finalPrice } = price;
    return (
        <div className="card">
            <div className="card-image">
                <img src={full_background} alt={displayName} />
            </div>
            <div className="card-content">
                <span className="card-title">{displayName}</span>
                <p>{description}</p>
            </div>
            <div className="card-action">
                <button
                    className="btn"
                    onClick={() =>
                        addToBasket({
                            mainId,
                            displayName,
                            finalPrice,
                        })
                    }
                >
                    Купить
                </button>
                <span className="right" style={{ fontSize: "1.8rem" }}>
                    {finalPrice} руб.
                </span>
            </div>
        </div>
    );
}
export default GoodsItem;
