import axios from 'axios';

export const fetchData=async(type,name,episodeNo,seasonNO)=>{
console.log(type,name,episodeNo.toString(),seasonNO.toString())
     if(type=="Episode"){
         try {
            const response= await axios.get(`https://www.omdbapi.com/?t=${name}&Season=${seasonNO.toString()}&Episode=${episodeNo.toString()}&apikey=a735d977`)
            return response.data

         } catch (error) {

            console.log(error)

         }

    }else if(type==="Series"){

      try {
        const response=await axios.get(`https://www.omdbapi.com/?s=${name}&apikey=a735d977`)
        return response.data

      } catch (error) {
        console.log(error)

      }


    }else if(type==="Seasion"){

        try {
            console.log(seasonNO.toString())

            // const response=await axios.get(`http://www.omdbapi.com/?t=${name}&Season=${seasonNO.toString()}&apikey=a735d977`)
            const response=await axios.get(`https://www.omdbapi.com/?t=${name}&Season=${seasonNO.toString()}&apikey=a735d977`)

            console.log(response.data)
            return response.data

        } catch (error) {
            console.log(error)

        }

    }else{
      
            try {
                const response= await axios.get(`https://www.omdbapi.com/?t=${name}&apikey=a735d977`)
                return response.data

            } catch (error) {
                console.log(error)
            }   
    }

  






}