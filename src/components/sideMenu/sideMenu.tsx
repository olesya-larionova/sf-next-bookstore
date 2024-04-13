import css from "./sideMenu.module.css"

export default function SideMenu() {

    const categories = [
        {name: "Архитектура", filter: "architecture"},
        {name: "Беллетристика", filter: "fiction"},
        {name: "Бизнесс", filter: "business"},
        {name: "Биографии", filter: "biography"},
        {name: "Драмы", filter: "drama"},
        {name: "Здоровье", filter: "health"},
        {name: "Искусство", filter: "art"},
        {name: "История", filter: "history"},
        {name: "Кулинария", filter: "food"},
        {name: "Мода", filter: "fashion"},
        {name: "Наука", filter: "sciense"},
        {name: "Политика", filter: "politics"},
        {name: "Поэзия", filter: "poetry"},
        {name: "Психология", filter: "psihology"},
        {name: "Путешествия", filter: "travel"},
        {name: "Технологии", filter: "technology"},
        {name: "Хобби", filter: "hobbies"},
        {name: "Юмор", filter: "humor"},
    ]
    

    return (
        <div className={css.sideMenu}>
            <ul className={css.list}>
                {categories.map(function(category, index) {
                    return (<li key={category.filter}><a>{category.name}</a></li>)
                })}
            </ul>
        </div>
    )
}