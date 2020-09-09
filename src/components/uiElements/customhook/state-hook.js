import {useCallback,useReducer} from 'react';


const formReducer=(initialState,actions)=>{
    switch(actions.type){

        case 'ADD_FAV':{
            return{
                ...initialState,
                favData:[actions.favData]
            }
        }
       
        default:return initialState
    }
}

export const useCustomState=(initialStateData)=>{

const [formState,dispatch]=useReducer(formReducer,{
    favData:initialStateData?initialStateData:[],
})


const AddFav=useCallback((favData)=>{
        dispatch({
            type:'ADD_FAV',
            favData:favData,
        });
},[dispatch]);

return  [formState,AddFav]

}