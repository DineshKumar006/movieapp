import React, { useState, useEffect } from 'react';
import Card from '../../uiElements/card/card'
import Style from './SeriesList.module.css'
import {useSelector,useDispatch} from 'react-redux'
import ErrorCard from '../../uiElements/errorcard/errorCard'

const SeriesList =(props) => {
    const [reqdata,setreqData]=useState(props.data.Search[0])
    const [Search,setSearch]=useState(props.data.Search.slice(1))
    const [favData,setFavdata]=useState(null)
    const [id,setId]=useState(false)
    const [fav,setFav]=useState(false)
    const [favAdded,setFavAdded]=useState(false)

    const dispatch=useDispatch()
    const state=useSelector(state=>state.SeriesfavData)

    useEffect(()=>{

        if(state.favData.length>=0){
            localStorage.setItem("seriesFav",JSON.stringify(state.favData))
        }
        },[state.favData])



if(props.myError){
    return <ErrorCard>No data found</ErrorCard>
}
console.log(state)


const favHandler=(data,id)=>{
    console.log(data)
    setFav(!fav)
    setId(data.Title)
    setFavdata(data)
    setFavAdded(true)
dispatch({type:"ADD_SFAV",payload:data})

    setTimeout(() => {
        setFavAdded(false)
    }, 1000);
}

        return (
            <div className={Style.seriesHeader}>

          {(favAdded)&&<p className={Style.msg}>Fav Added</p>}

            
                <div className={Style.seriesHead}>
                        <div>
                        <img src={reqdata.Poster} width="320px" height="400px" alt="not found!"/>                        </div>

                        <div>
                        <p>Title:{reqdata.Title}</p>
                        <p>Type:{reqdata.Type}</p> 
                         <p>Language:{reqdata.Language?reqdata.Language:'NA'}</p>
                        <p>Year:{reqdata.Year}</p>


                        <span className={Style.FavBtn} onClick={()=>favHandler(reqdata)}>Fav</span>
                        </div>

                    
                </div>  



<hr/>
            <div className={Style.seriescontentHead}>

            {Search.map(ele=>{
                return <Card key={ele.imdbID} >
                            <div className={Style.seriescontent}>
                                    <div className={Style.imgele}>
                                    <img src={ele.Poster} width="200px" height="250px" alt="not found!"/>
                                    
                                    <span className={Style.FavBtn} onClick={()=>favHandler(ele)}>Fav</span>
                                    
                                    </div>

                                    <hr/>

                                    <div>
                                    <p>Title:{ele.Title}</p>
                                    <p>Type:{ele.Type}</p> 
                                    <p>Language:{ele.Language?ele.Language:'NA'}</p>
                                    <p>Year:{ele.Year}</p>
                                    </div>
                            </div>
                        </Card>
            })}


</div>
            </div>
        );
    
}

export default SeriesList;