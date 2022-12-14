import React, {useEffect, useState} from 'react'
import { Typography, Box, AppBar,Toolbar, IconButton, Button, TextField, InputAdornment, Paper  } from '@mui/material'

import MenuIcon from '@mui/icons-material/Menu';
import Search from './Search'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import SearchIcon from '@mui/icons-material/Search';
// import yelp from '../api/yelp';
import Detail from './Detail';




 const Layout = () => {
    const [searchText, setSearchText ]   = useState("Mexican")
    const [searchZip, setSearchZip] = useState("32244")
    const [results, setResults] = useState([])
    const [restId, setRestId] = useState('Nothing to see here')
    

    const searchApi = async (term, location) => {
        // const response = await yelp('32244',term )
        // console.log(response.data.businesses)
        // setResults(response.data.businesses)
        

        const response2 = await fetch(`/api/yelp?term=${term}&location=${location}`)
        const data = await response2.json()
        console.log(data.businesses)
        setResults(data.businesses)
    } 

    const doSearch = (e) => {
        setSearchText(e.target.value)
        searchApi(e.target.value, searchZip)
    }
    const doZip = (zip) => {
        setSearchZip(zip.target.value)
        searchApi(searchText, zip.target.value)
    }

    useEffect(() => {
        searchApi('mexican','32244')
    } , [])

     return (
         <>
         <Paper sx={{backgroundColor : "#eeeeee", pb: 2}}>
            <BrowserRouter>
             <Box sx={{ flexGrow: 1 }}>
                 <AppBar position="static">
                     <Toolbar>
                         <IconButton
                             size="large"
                             edge="start"
                             color="inherit"
                             aria-label="menu"
                             sx={{ mr: 2 }}
                         >
                             <MenuIcon />
                         </IconButton>
                         <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>  
                            <TextField 
                            
                            onKeyPress={
                                (e) => {
                                    if (e.key === "Enter"){
                                        doSearch(e)
                                    }
                                }
                            }
                            label="Search" 
                            variant='outlined'
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start" >
                                        <SearchIcon/>
                                    </InputAdornment>
                                )
                            }}
                            
                            
                            />

                            <TextField 
                            
                            onKeyPress={
                                (zip) => {
                                    if (zip.key === "Enter"){
                                        doZip( zip)
                                    }
                                }
                            }
                            label="Zip Code" 
                            variant='outlined'
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start" >
                                        <SearchIcon/>
                                    </InputAdornment>
                                )
                            }}
                            
                            
                            />
                           

                            
                         </Typography>
                         <Button color="inherit">Login</Button>
                     </Toolbar>
                 </AppBar>
             </Box>
            

             <Typography variant="h6">Your search results: {searchText}</Typography>
             <Typography variant="h6">Your search results: {searchZip}</Typography>
            
             <Routes>

				
                <Route exact path="/" element={<Search searchResults={results} setRestId={setRestId}/>} />
                <Route exact path="/search" element={<Search searchResults={results} setRestId={setRestId}/>}/>
                <Route exact path="/detail" element={<Detail restId={restId}/>} />
                
             </Routes>
             
         </BrowserRouter>
         </Paper>
         </>
     )
 }
 export default Layout