import React,{useEffect,useState} from 'react'
import './App.css'
import SearchIcon from '../node_modules/bootstrap-icons/icons/search-heart.svg'
import Moviescard from './Moviescard';


const API_URL='http://www.omdbapi.com?apikey=fa763695';

const App = () => {
   const [searchButton,setSearchButton]=useState('')
  const [movies,setMovies]=useState([])


  const moviesSearch= async(title)=>{
    const response = await fetch(`${API_URL}&s=${title}`)
    const data= await response.json();

    console.log(data.Search)
    setMovies(data.Search)
  }

  useEffect(()=>
  {
       moviesSearch('BATMAN')
  },[])

  const changeHandler=(e)=>
  {
     setSearchButton(e.target.value)
  }

  const clickSearch=()=>
  {
    moviesSearch(searchButton)
  }

  
  return (
    <div className='App'>
      <h1>Movie Fire</h1>
      <div className='search' >
        <input type='text' placeholder='Search for Movies' onChange={changeHandler}/>
        <img src={SearchIcon} alt="search" onClick={clickSearch} />
      </div>
        
        {
          movies?.length > 0
          ?(
            <div className='container'> 
            {movies.map((movies)=>(
              <Moviescard movie={movies}  />
            ))}
          </div>
          ):(
            <div className='empty'>
              <h2>No Movies Found</h2>
            </div>
          )
        }    
     
      </div>
  )
}

export default App