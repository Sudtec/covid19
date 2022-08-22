import * as actionsType from './actiontypes';

const initialState = {}
export default (state = {covidstats:initialState}, action)=> {
    switch (action.type){

        case actionsType.STORE_COVID_DATA:{
            return {...action.payload}
        }
     
        default:
            return state
    }
}