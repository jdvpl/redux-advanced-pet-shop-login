/* eslint-disable import/no-anonymous-default-export */
import { perrito as PerritoTypes } from "../constants/actiontypes";

export const setLoading=(loading)=>async(dispatch)=>{
    dispatch({
        type: PerritoTypes.LOADING,
        payload:loading
    });
}
export const setList=(list)=>async(dispatch)=>{
    dispatch({
        type: PerritoTypes.SET_LIST,
        payload:list
    });
}
export const setSelectedDog=(dog)=>async(dispatch)=>{
    dispatch({
        type: PerritoTypes.SET_SELECTED_PERRITO,
        payload:dog
    });
}
    

export default{
    setLoading,
    setList,
    setSelectedDog
}