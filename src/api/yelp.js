
import axios from 'axios'

const Axios = async (location, term) => {
    try{

    
   const response = await axios({
        method : 'get',
        url : `https://yelp-backend.netlify.app/.netlify/functions/search?location=${location}&term=${term}`
    })
    return response
} catch(error){
    console.log(error)
}
    
}

export default Axios