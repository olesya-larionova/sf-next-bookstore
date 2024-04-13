import css from "./shoppingCart.module.css";
import CartItem from "./cartItem";

export default function ShoppingCart() {

    return (
        <>
            <div className={css.moduleName}>Корзина</div>
            <div className={css.tableHeader}>
                <div className={css.columnItem}>Товар</div>
                <div className={css.columnQuantity}>Количество</div>
                <div className={css.columnPrice}>Цена</div>
                <div className={css.columnDelivery}>Доставка</div>
            </div>
            <CartItem/>
            <CartItem/>
            <CartItem/>
            <CartItem/>
            <CartItem/>
        </>
    )

}
