import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import axios from 'axios';
import '.././App.css';
import MultiActionAreaCard from './Card';

function Sports() {
    const baseURL = "https://newsapi.org/v2/top-headlines?country=in&category=sports&apiKey=64c84a3969e1463a9faa859ad5fd021c";
    const [data, setData] = useState([]);

    useEffect(() => {
      axios.get(baseURL).then((response) => {
        setData(response.data.articles);
      });
    },[]);
    return (
      <div className='style'>
          {data.map((val,key)=>{
              return(
              < MultiActionAreaCard val={val}/>
              )
          })}
      </div>
  )
}

export default Sports