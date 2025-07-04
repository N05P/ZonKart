import React from 'react'
import {useEffect,useState} from 'react'

export const useCategroriesApi = (url) => {
    const [data,setData] = useState([])

    useEffect(()=>{
        if(!url)return;
        const getCategoriesApi=async()=>{
       try{
        const data = await fetch(url);
    const json = await data.json();
    setData(json.products[0].images[0]);
}
    catch(error){
    console.log(error)
}
}
        getCategoriesApi();
    },[url])
    return data;
}