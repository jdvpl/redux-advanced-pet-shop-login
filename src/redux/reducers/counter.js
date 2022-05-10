
import  {counter as counterActions} from '../constants/actiontypes'
const INITIAL_STATE={
    count:0
}

// eslint-disable-next-line import/no-anonymous-default-export
export default(state=INITIAL_STATE,action)=>{
    switch (action.type) {
        // eslint-disable-next-line no-lone-blocks
        case counterActions.INCREMENTAR:{
            return {...state,count:state.count+1}
        }
        case counterActions.DECREMENTAR:{
            return {...state,count:state.count-1}
        }
        default:
            return state;
    }
}