/* eslint-disable import/no-anonymous-default-export */
import { user as UserTypes } from "../constants/actiontypes";
import {login as loginUser} from '../../mockRequests/usuarios'


export const setLoading=(loading)=>async(dispatch)=>{
    dispatch({
        type: UserTypes.LOADING,
        payload:loading
    });
}
export const login=(username,password)=>async(dispatch)=>{
    await dispatch(setLoading(true));

    const user=await loginUser(username,password);

    if(user.error){
        dispatch({
            type: UserTypes.ERROR,
            payload:user.error
        })
    }else{
        dispatch({
            type: UserTypes.SET_USER,
            payload:user
        })
}
    await dispatch(setLoading(false));

}

export default{
    setLoading,
    login
}