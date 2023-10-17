import { Search } from '@mui/icons-material';
import { Box, FilledInput, FormControl, IconButton, InputLabel, TextField } from '@mui/material';
import React from 'react';

const SearchBox = (props) => {
	return (
// 		<Box>
// 			{/* <input
// 				className='form-control'
// 				value={props.value}
// 				onChange={(event) => props.setSearchValue(event.target.value)}
// 				placeholder='Type to search...'
// 			></input> */}


// <TextField className='form-control'  variant="outlined" className='form-control'
// 				value={props.value}
// 				onChange={(event) => props.setSearchValue(event.target.value)}
// 				placeholder='Type to search...' />
// 		</Box>


<Box sx={{ display: 'flex', flexWrap: 'wrap' }}>
          
<FormControl  sx={{ m: 1 }} variant="filled" >
  <InputLabel htmlFor="filled-adornment-amount" placeholder="Search Movie Here"/>
  <FilledInput
    id="filled-adornment-amount"
    startAdornment={<Search position="start"/> }
    value={props.value}
		onChange={(event) => props.setSearchValue(event.target.value)}
 				placeholder='Type to search...' />
  
</FormControl>

</Box>
	);
};

export default SearchBox;