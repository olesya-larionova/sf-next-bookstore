import Link from 'next/link';
import css from "./navigation.module.css";
import { useRouter } from 'next/router';

export default function Navigation() {

  return (
    <div className={css.navigationPaneContainer}>
      <div className={css.navigationPane}>
        <div className={css.logo}>
          Книжная лавка
        </div>
        <div className={css.mobile_menu}>
          <button className={css.mobile_menu_btn}>Навигация по страницам сайта</button>
          <div className={css.menu}>
          <Link href="/">
            Книги
          </Link>
          <Link href="/audio">
            Аудиокниги
          </Link>
          <Link href="/gifts">
            Аксессуары и Подарки
          </Link>
          <Link href="/blog">
            Блог
          </Link>
          </div>
        </div>
        <div className={css.icons}>
          <Link href="/profile" className={css.userProfile}></Link>
          <Link href="" className={css.search}></Link>
          <Link href="/cart" className={css.shopcart}></Link>
        </div>
      </div>
    </div>
  );
}