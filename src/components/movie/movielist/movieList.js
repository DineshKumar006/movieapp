import React, { useState, useEffect } from 'react';
import Card from '../../uiElements/card/card'
import Style from './movieList.module.css'
import ErrorCard from '../../uiElements/errorcard/errorCard'
import {useDispatch,useSelector} from 'react-redux'
const MoviesList =(props) => {
    const [id,setId]=useState(false)
    const [reqdata,setreqData]=useState(null)
    const [fav,setFav]=useState(false)
 const state=useSelector(state=>state.favData)
const dispatch=useDispatch();

useEffect(()=>{
    if(fav===false && reqdata!==null){
        dispatch({type:"REMOVE_FAV",id})


    }
    if(fav===true && reqdata!==null ){
    dispatch({type:"ADD_FAV",payload:reqdata})

    }
    
},[fav])


useEffect(()=>{
    let payload= localStorage.getItem('fav') 
        payload=JSON.parse(payload)
        if(payload){
          let res= payload.find(ele=>{
               return ele.imdbID===props.data.imdbID
           })
           if(!!res){
               setFav(true)
           }

        }
},[])



if(props.myError){
    return <ErrorCard>No data found</ErrorCard>
}

if(state.favData.length>=0){
    localStorage.setItem('fav',JSON.stringify(state.favData)) 
    
    }
const favHandler=(data,id)=>{
        setFav(!fav)
        setId(id)
        setreqData(data)
}

        return (
            <div  >
            
         <Card  >
                    <div className={Style.innerEle}>

                            <div className={Style.imgele}>
                            <img src={props.data.Poster} alt="not found!" />
                            <span className={fav?Style.Favbtn:Style.unFavbtn} onClick={()=>favHandler(props.data,props.data.imdbID)} >Fav</span>
                            </div>
                            <hr/>
                            <div>
                                <p>Titel:{props.data.Title}</p>
                               <p>Actors:{props.data.Actors}</p> 
                               <p>Language:{props.data.Language}</p>
                               <p>Year:{props.data.Year}</p>
                               <p>imdbRating:{props.data.imdbRating}</p>
                               <p>Genre:{props.data.Genre}</p>
                               <p>Released:{props.data.Released}</p>
                               <p>Type:{props.data.Type}</p>
                               <p>Writer:{props.data.Writer}</p>
                               <h4>Plot:{props.data.Plot}</h4>

                            </div>

                           
                            
                            </div>
                        </Card>
           

            </div>
        );
    
}

export default MoviesList;