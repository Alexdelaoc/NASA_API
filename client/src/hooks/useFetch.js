import { useState, useEffect } from "react";
import axios from "axios";

const useFetch = (url) => {
    const [loading, setLoading] = useState(true);
    const [result, setResult] = useState([]);

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await axios.get(url)
                    if (response.data.msg) {
                        setLoading(false) // If the API request gives error, it doesn't set the result state, just the loading one.
                    } else {
                        setResult(response.data);
                        setLoading(false)
                    }
            } catch (error) {
                console.log(error);
            }
        }
        fetchData();
    }, [url]);

    return { loading, result }
}

export default useFetch;