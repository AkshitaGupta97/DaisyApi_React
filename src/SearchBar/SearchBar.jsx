import { useEffect, useState } from "react"
import { FaSearch } from 'react-icons/fa';

function SearchBar({ setSearchTerm }) {
    const [input, setInput] = useState('');

    useEffect(() => {
        const delay = setTimeout(() => {
            setSearchTerm(input)
        }, 500)  // debouncing

        return () => clearTimeout(delay);
    }, [input, setInput])

    const handleKeyDown = (e) => {
        if(e.key==='Enter') setSearchTerm(input)
    }
    const handleSearchClick = () => {
        setSearchTerm(input);
    };

    return (
        <div className="w-full flex justify-center my-4">
            <input
                onKeyDown={handleKeyDown}
                type="text"
                placeholder="Search coins by name..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
                className="w-[70%] max-w-md px-4 py-2 border border-yellow-400 rounded-md"
            />

            <button onClick={handleSearchClick}
                className="bg-yellow-400 p-3 rounded-b-md hover:bg-yellow-500 text-black focus:outline"
            >
                <FaSearch className="text-black-500 text-xl"   />
            </button>
        </div>
    );
}

export default SearchBar