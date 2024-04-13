import BookCard from "@/components/bookCard/bookCard";
import css from "./booksCatalog.module.css"

export default function booksCatalog() {

/*    const test = fetch('/api/books?q="subject:Tomatoes"&key=AIzaSyC9el_d7qRJuiERwDsJe9_7X1ZHal2Dkh4', {
        method: 'GET', 
      }).then((response) => response.json())
      console.log(test);*/
    
    return (
        <div className={css.grid}>
            <BookCard/>
            <BookCard/>
            <BookCard/>
            <BookCard/>
            <BookCard/>
            <BookCard/>
        </div>
    )
}

