


const initialState={
    favData:[]
}


const Reducer=(oldstate=initialState,actions)=>{

    switch (actions.type) {

        case 'ADD_SFAV':
            return{
                ...oldstate,
                favData:[...oldstate.favData,actions.payload]
            }
        case 'REMOVE_SFAV':
            return{
                ...oldstate,
                favData:oldstate.favData.filter(ele=>{
                    return ele.imdbID!==actions.id
                })
            }    
         case "ADD_SAVE_SFAV":
             return{
                 favData:actions.payload
             }         
    
        default:
           return oldstate
    }

}

export default Reducer