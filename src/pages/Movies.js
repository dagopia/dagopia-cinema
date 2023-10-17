import React from 'react'
import SearchBox from '../Componenet/Search'
import MovieList from './MovieList';
import { Box } from '@mui/material';
import { useEffect, useState } from 'react';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [searchValue, setSearchValue] = useState('');

	const getMovieRequest = async () => {
		const url = `http://www.omdbapi.com/?s=star wars&apikey=263d22d8`;

		const response = await fetch(url);
		const responseJson = await response.json();

		if (responseJson.Search) {
			setMovies(responseJson.Search);
		}
	};

	useEffect(() => {
		getMovieRequest();
	}, []);

  return (

    <>
<Box>
<SearchBox searchValue={searchValue} setSearchValue={setSearchValue}/>

</Box>
<Box>
<MovieList movies={movies}/>
</Box>
    </>
  
  )
}

export default Movies
