
const initialvalue = []
const api_key = "esWE4oUFSN1L15Zap1uR3e3LyyFRzIF2snzP5W5Bp08IuKLng20iTS33"


const photos = function (state = initialvalue,action) {
    async function fetching() {
        try {
            const response = await fetch(`https://api.pexels.com/v1/search?query=${action.payload}&page=1`, {method: "GET",
                headers: {
                    Accept: "application/json",
                    Authorization: api_key}});
            const json = await response.json();
          return json.photos

          
        } catch (error) {
            return console.error("Error:", error);
        }
    }
    if (action.type="SEARCH") {
     fetching().then(json=> state = json
     )
     return state
    }
   
}

export default photos