import { useEffect, useState } from "react";

const api_key = "esWE4oUFSN1L15Zap1uR3e3LyyFRzIF2snzP5W5Bp08IuKLng20iTS33"

function useFetch(text) {
    const [data, setData] = useState([])

    useEffect(() => {
        async function fetching(text) {
            try {
                const response = await fetch(`https://api.pexels.com/v1/search?query=${text}`, {
                    headers: {
                        Authorization: api_key
                    }
                });
                const json = await response.json();
                setData(json.photos)
            } catch (error) {
                return console.error("Error:", error);
            }
        }
        if (text) {
            fetching(text)
        }
    }, [text])
    return data
}

export default useFetch