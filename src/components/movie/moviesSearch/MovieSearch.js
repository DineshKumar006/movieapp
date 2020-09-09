import React, { useState, useEffect,useRef } from 'react';
import {fetchData} from '../../Api/movieData'
import Spinner from '../../uiElements/spinner'
import Style from './movie.module.css'
import MoviesList from '../movielist/movieList'
import SeasionsAndAllEpisodes from '../seasions_and_Allepisodes/SeasionsAndAllepisodes'
import SeasionAndEpisodes from '../seasion_and_episode/SeasionAndEpisode'
import SeriesList from '../seriesList/SeriesList'
import {useDispatch} from 'react-redux'

const MovieSearch =() => {
const dispatch=useDispatch()
    const inputRef=useRef()
    const [data,setData]=useState(null)
    const [loading,setLoading]=useState(false)
    const [filter,setFilter]=useState("All")
    const [seasionCount,setSeasionCount]=useState(1)
    const [episodeCount,setEpisodeCount]=useState(1)
    const [myError,setMyError]=useState(false)

    const [contentType,setcontentType]=useState("All")



    // console.log(data)


    useEffect(()=>{
        let payload= localStorage.getItem('fav') 
        payload=JSON.parse(payload)

        if(payload){
            console.log(...payload)

                dispatch({type:"ADD_SAVE_FAV",payload})
        }


        let seriesFav= localStorage.getItem('seriesFav') 
        seriesFav=JSON.parse(seriesFav)
        if(seriesFav){
                dispatch({type:"ADD_SAVE_SFAV",payload:seriesFav})
        }

    },[])
const searchHandler=async(e)=>{
    // console.log(inputRef.current.focus())
    setData(null)
    inputRef.current.click()
    setLoading(true)
    try {
        const contentname=inputRef.current.value

         const data=await fetchData(filter,contentname,episodeCount,seasionCount)
         console.log(data)
         if(data.Error){
            setMyError(true)
            setData(data)
         }else{
            setcontentType(filter)  
            setMyError(false)
            setData(data)
         }

         setLoading(false)
    
    } catch (error) {
       console.log('error') 
    }
   

}

const changeSeasionHandler=(e)=>{
if(e.target.value>=1){
    setSeasionCount(e.target.value)
}

}


const changeEpisodeHandler=(e)=>{
if(e.target.value>=1){
    setEpisodeCount(e.target.value)
}

}

    const filterChangeHandler=(e)=>{
        setFilter(e.target.value)
    }



  
let ui;

if(contentType==="Series" ){
    ui=data!==null&& <SeriesList data={data} myError={myError}/>

  }else if(contentType==="Seasion"){

     ui= data!==null&& <SeasionsAndAllEpisodes data={data} myError={myError}/>
  }else if(contentType==="Episode"){
      ui= data!==null&& <SeasionAndEpisodes data={data} myError={myError}/>

  }else{
      ui= data!==null&& <MoviesList data={data} myError={myError}/>
  }
    

        return (
            <div id="main"  className={Style.searchHeader}>


              <div  className={Style.searchhead}>

                <div className={Style.inputele}>
                <input type="text" placeholder="search movie, series" ref={inputRef} id="searchbar" name="searchbar"/>

                </div>
        

                <div className={Style.selectele}>
                <select value={filter} onChange={filterChangeHandler}>
                    <option>All </option>
                    <option>Movie </option>
                
                    <option>Series </option>
                    <option>Seasion </option>
                    <option>Episode </option>
                </select>

                <div>
                 {filter==="Episode" && <span>Episode:<input type="number" name="searchbar" value={episodeCount}  autoFocus={filter==="Episode"?true:false}  onChange={changeEpisodeHandler}/></span>   }

                 {(filter==="Seasion" || filter==="Episode") &&  <span>Seasion:<input type="number" name="searchbar"value={seasionCount} autoFocus={filter==="Seasion"?true:false}  onChange={changeSeasionHandler} /> </span> }
                </div>


                </div>
              

                <div>
                    <button  type="submit" onClick={searchHandler}  >search </button>
                </div>
           
            <div >

            </div>
            </div>

      
            <div style={{margin:"20px"}}>
            <Spinner loading={loading }/>

            </div>


            {ui}


            </div>
        );
    
}

export default MovieSearch;