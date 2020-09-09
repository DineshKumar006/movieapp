import React, { useState, useEffect } from 'react';
import Card from '../../uiElements/card/card'
import Style from './SeasionsAndAllepisodes.module.css'
import ErrorCard from '../../uiElements/errorcard/errorCard'

const SeasionsAndAllepisodes =(props) => {
   

if(props.myError){
    return <ErrorCard>No data found</ErrorCard>
}
console.log(props.data)
        return (
            <div>
            
            <div className={Style.text}>
                <p>Title:{props.data.Title}</p>
               <p>Season:{props.data.Season}</p> 
               <p>TotalSeasons{props.data.totalSeasons}</p>
            </div>


<h2>Episodes</h2>

            <div className={Style.EpisodeEle}>

            {props.data.Episodes.map(ele=>{
                return <Card key={ele.Released}>

                        <div className={Style.episodecontent}>
                        <p>Title:{ele.Title}</p>
                        <p>Episode:{ele.Episode}</p> 
                        <p>Released:{ele.Released}</p>
                        <p>imdbRating:{ele.imdbRating}</p>
                        </div>


                        </Card>
            })}

            </div>



            </div>
        );
    
}

export default SeasionsAndAllepisodes;