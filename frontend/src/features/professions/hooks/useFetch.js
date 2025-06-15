//powerful feature in React for reusing stateful logic across mutliple components
//instead of copying and pasting useState and useEffect for data fetching in every profession component, I have abstracted it in a custom hook called useFetch
//any component that needs to fetch data can simply import {useFetch} from '../hooks/useFetch', const {data, loading, error } = useFetch('api/v1/SomeProfession)
//doing the above makes the code cleaner, accessible and less prone to errors

import { useState, useEffect } from 'react'; //React hooks

export const useFetch = (url) => { //defines a custom hook that takes a URL as argument
  const [data, setData] = useState(null); //state to store fetched data
  const [loading, setLoading] = useState(true); //state for loading status
  const [error, setError] = useState(null); //state for error messages

  useEffect(() => { //Effect to perform data fetching
    const fetchData = async () => { //asynchronous function for fetching
      try {
        const response = await fetch(url); //makes the network request 
        if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`); //checks for HTTP errors
        const json = await response.json(); //parses JSON response
        setData(json); //updates data state 
      } catch (err) {
        setError(err); //updates error state
      } finally {
        setLoading(false); //always set loading to false after fetch attempt
      }
    };

    fetchData(); //calls the async fetch function
  }, [url]); //re-runs effect if URL changes 

  return { data, loading, error }; //returns an object with data, loading and error states
};
