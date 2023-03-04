import React, { useEffect, useRef, useState } from 'react'
import Card from './Card';

const SeachBar = () => {
    const [query, setQuery] = useState("");
    const [data, setData] = useState("");

    const focusQuery = useRef(null);
    useEffect(() => focusQuery.current.focus(),[])
    async function handleQuery(e){
        e.preventDefault()
        const url = `https://api.themoviedb.org/3/search/movie?api_key=5dcf7f28a88be0edc01bbbde06f024ab&language=en-US&query=${query}&page=1&include_adult=true`;
        // const query = "jurassic park";
        try{
            const res = await fetch(url);
            const data = await res.json()
            console.log(data)
            setData(data.results)
        }catch(err){
            console.error(err)
        }
    }

    return (
        <div className='search-bar-container'>
            <header className='header'>
                <form className='form' onSubmit={handleQuery}>
                    <label htmlFor='input' className='label' >movie name:</label>
                    <input
                        id='input'
                        className='input'
                        placeholder="i'e. Jurassic World"
                        value={query}
                        ref={focusQuery}
                        onChange={(e) => setQuery(e.target.value)}
                    />
                    <input type='submit' className='button input' value='Search' />
                </form>
            </header>
            <main className='cards-displayer'>
                {data && 
                data.map(movie => <Card key={movie.id} data={movie} />)}
                
            </main>
        </div>
    )
}

export default SeachBar