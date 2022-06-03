import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import axios from 'axios';
import '.././App.css';
import MultiActionAreaCard from './Card';

function Health() {
    const baseURL = "https://newsapi.org/v2/top-headlines?country=in&category=health&apiKey=7e1033e81fa541d3a41583e5ef18425e";

    const [data, setData] = useState([]);

    useEffect(() => {
      axios.get(baseURL).then((response) => {
        setData(response.data.articles);
      });
    },[]);
    return (
      <div className='style'>
          {data.map((val,index)=>{
              return(
              <MultiActionAreaCard val={val}/>
              )
          })}
      </div>
  )
}

export default Health