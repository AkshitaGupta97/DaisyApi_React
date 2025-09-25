import { useEffect, useState } from "react"
function SearchBar({coin, setFiltered}) {
    const [search, setSearch] = useState('');

    useEffect(() => {
        if(search===''){
            setFiltered(coin);
        }
        else {
            const filtered = coin.filter((item) => {
                item.name?.toLowerCase().includes(search.toLowerCase())
            })
            setFiltered(filtered);
        }
    }, [search, coin, setFiltered])

    return(
        <div className="w-40 flex justify-center my-4">
            <input  className="w-[70%] max-w-md px-4 py-2 border-b-pink-500"
            type="text" placeholder="Search Coins..." 
                value={search} onChange={(e) => setSearch(e.target.value)}
            />
        </div>
    )

}

export default SearchBar