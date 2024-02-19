import './Search.css'

const Search = ({query, onChangeQuery}) => {

    return (
        <>
            <div className="search">
                <input className='search__input' type="text" placeholder="Поиск..." 
                value={query}
                name='search'
                onChange={(e)=>onChangeQuery(e)}
                />
            </div>
        </>
    )
}

export default Search