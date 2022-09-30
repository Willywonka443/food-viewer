import React from 'react'
import { Typography, Grid, Button, Card, CardContent} from '@mui/material'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import {Link} from 'react-router-dom'
import SearchResults from '../components/searchResults';


 const Search = ({searchResults}) => {
    const people = ["Julie","Jeff","Dean","Willy","Ty","Frank"]
    const cheapfood = searchResults.filter(( value ) => value.price === "$")
    const moderatefood = searchResults.filter(( value ) => value.price === "$$")
    const expensivefood = searchResults.filter(( value ) => value.price === "$$$")
     
    return (
        <>
            <SearchResults food={cheapfood} title={"Cheap Food"}/>        
            <SearchResults food={moderatefood} title={"Moderate Food"}/>
            <SearchResults food={expensivefood} title={"Expensive Food"}/>
        </>
    )
}

export default Search