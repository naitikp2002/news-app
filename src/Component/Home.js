import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import axios from 'axios';
import '.././App.css';
import MultiActionAreaCard from './Card';

function Home({baseURL}) {
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

export default Home