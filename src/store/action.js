import axios from "axios";
import * as actionstype from "./actiontypes";


export const getCovidStats = ()=>{
    return (dispatch)=>{
        axios.get("https://covidnigeria.herokuapp.com/api").then((response)=>{
            dispatch(storeCovidStats(response.data?.data))
        }).catch((err)=>{
            console.log(err.response)
        })
    }
}


export const storeCovidStats = (data)=>{
    return {
        type: actionstype.STORE_COVID_DATA,
        payload: data
    }
}