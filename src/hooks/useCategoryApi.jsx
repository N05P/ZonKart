import React from 'react'
import { useEffect,useState } from 'react'

export const useCategoryApi = () => {
    
    const [data,setData] = useState([]);

    useEffect(()=>{
        getApiData();
    },[])

    const getApiData=async()=>{
        try{
        const api = await fetch('https://dummyjson.com/products/categories')
        const data = await api.json();
        setData(data);
        }
        catch(error){
            console.log(error);
        }
        
    }
    return data;
}