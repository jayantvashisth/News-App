import React, { useContext } from 'react'
import { NewsContext } from '../NewsContext'
import Newsarticle from './Newsarticle';


function News() {

    const {data} = useContext(NewsContext);

  return (
    <div>{data ? data.articles.map((news)=>
        <Newsarticle data = {news} key = {news.url}/>
    ) : "Loading"}</div>
  )
}

export default News