
import  {perrito as perritoActions} from '../constants/actiontypes'
const INITIAL_STATE={
    loading:false,
    list:null,
    selectedPerrito:null,
}

// eslint-disable-next-line import/no-anonymous-default-export
export default(state=INITIAL_STATE,action)=>{
    switch (action.type) {
        // eslint-disable-next-line no-lone-blocks
        case perritoActions.LOADING:{
            return {...state,loading:action.payload}
        }
        case perritoActions.SET_SELECTED_PERRITO:{
            return {...state,selectedPerrito:action.payload}
        }
        case perritoActions.SET_LIST:{
            return {...state,list:action.payload}
        }
        default:
            return state;
    }
}