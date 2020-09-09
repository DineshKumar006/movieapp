


const initialState={
    favData:[]
}


const Reducer=(oldstate=initialState,actions)=>{

    switch (actions.type) {

        case 'ADD_FAV':
            return{
                ...oldstate,
                favData:[...oldstate.favData,actions.payload]
            }
        case 'REMOVE_FAV':
            return{
                ...oldstate,
                favData:oldstate.favData.filter(ele=>{
                    return ele.imdbID!==actions.id
                })
            }    
         case "ADD_SAVE_FAV":
             return{
                 favData:actions.payload
             }         
    
        default:
           return oldstate
    }

}

export default Reducer