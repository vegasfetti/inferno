const Filter = ({ sorting, onSortingChange }) => {

    return (
        <>
            <div className="catalog__content--sort">
                <p>Сортировка:</p>
                <select  id="filter" value={sorting} onChange={onSortingChange}>
                    <option value="default">По популярности</option>
                    <option value="priceAscending">Цена по возростанию</option>
                    <option value="priceDescending">Цена по убыванию</option>
                    <option value="nameA">По наименованию (А-Я)</option>
                    <option value="nameZ">По наименованию (Я-А)</option>
                </select>
            </div>
        </>
    )
}

export default Filter