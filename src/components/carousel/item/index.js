import React from "react";
import {get} from 'lodash'
import './style.css'

export default function slider({ movie, width }){
    return (
    <div className="slider" style={{ width: `${width}%` }}>
      <img
        className="slider-image"
        src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
        alt={movie.title}
      />
      <div className="title">{get(movie, 'original_title','')}</div>
    </div>
    )
}