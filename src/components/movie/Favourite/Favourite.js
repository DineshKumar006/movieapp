import React, { useState, useEffect } from 'react';
import Style from './fav.module.css'
import {useSelector} from 'react-redux'

const Favourite =()=>  {

    const state=useSelector(state=>state.favData)
    const seriesState=useSelector(state=>state.SeriesfavData);
    const [localState,setloaclState]=useState(null)
    const [FavData,setFavData]=useState(null)

    const [seriesFavdata,setSeriesfavData]=useState(null)

    useEffect(()=>{
        setloaclState(state.favData)
        setSeriesfavData(seriesState.favData)

    },[state,seriesState])

    useEffect(()=>{

        let data= localStorage.getItem('fav') 
        data=JSON.parse(data)
        if(data){
            setFavData(data)

        }

    },[])

    console.log(seriesFavdata)

        return (
            <div id="favourite" className={Style.fav}>
                    <h2>Your Favourite </h2>

    


           <div className={Style.favouterele}>
                    {localState!==null?
                            state.favData.map(ele=>{
                                return <div key={ele.imdbID} className={Style.favinnerele}>
                                        <div>
                                        <img src={ele.Poster} alt="not found!" width="100" height="100"/>
                                        <p>Title:{ele.Title}</p>
                                        <p>Actors:{ele.Actors}</p>
                                        </div>
                                      </div>  
                                      })
                        :"No Favourite added yet!"}


                      {seriesFavdata!==null&&seriesFavdata.map(ele=>{
                          return <div key={ele.imdbID} className={Style.favinnerele}>
                          <div>
                          <img src={ele.Poster} alt="not found!" width="100" height="100"/>
                          <p>Title:{ele.Title}</p>
                          <p>Year:{ele.Year}</p>
                          </div>
                        </div>  
                       
                      })}  
             </div>



            </div>
        );     
}

export default Favourite;