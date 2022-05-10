
import  {user as userActions} from '../constants/actiontypes'
const INITIAL_STATE={
    loading:false,
    authUser:null,
    error:null,
}

// eslint-disable-next-line import/no-anonymous-default-export
export default(state=INITIAL_STATE,action)=>{
    switch (action.type) {
        // eslint-disable-next-line no-lone-blocks
        case userActions.LOADING:{
            return {...state,loading:action.payload}
        }
        case userActions.SET_USER:{
            return {...state,authUser:action.payload}
        }
        case userActions.ERROR:{
            return {...state,error:action.payload}
        }
        default:
            return state;
    }
}