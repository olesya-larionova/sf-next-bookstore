import css from "./shoppingCart.module.css";
import placeholder from "./images/placeholder.png";
import star from "./images/star.svg";

export default function CartItem() {

    return (
        <div className={css.cartItem}>
            <img className={css.bookCover} src={placeholder.src}/>
            <div className={css.bookInfo}>
                <div className={css.bookTitle}>Название книжки</div>
                <div className={css.bookAuthor}>Автор</div>
                <div className={css.bookScore}>
                    <img src={star.src}/>
                    <img src={star.src}/>
                    <img src={star.src}/>
                    <img src={star.src}/>
                    <img src={star.src}/>
                    400 отзывов</div>
            </div>
            <div className={css.quantity}>Количество</div>
            <div className={css.price}>$12345</div>
            <div className={css.delivery}>Статус: в пути</div>
        </div>
    )
}
