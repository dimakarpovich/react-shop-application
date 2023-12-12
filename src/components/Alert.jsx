import { useEffect } from "react";

function Alert(props) {
    const { displayName = "", closeAlert = Function.prototype } = props;
    useEffect(() => {
        const timerId = setInterval(closeAlert, 3000);
        return () => {
            clearInterval(timerId);
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [displayName]);
    return (
        <div id="toast-container">
            <div className="toast">{displayName} добавлена в корзину</div>
        </div>
    );
}
export default Alert;
