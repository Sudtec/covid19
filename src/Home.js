import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux"
import { getCovidStats } from "./store/action";
import firstaid from "./assets/firstaid.png";
import grave from "./assets/grave.png";
import hospital from "./assets/hospital.png";
import virus from "./assets/virus.png";
import CovidCards from "./components/CovidCards";
import CovidStatTable from "./components/CovidStatTable";

const Home = ()=>{
    const selector = useSelector((state)=>state.covidstats);
    const dispatch = useDispatch()
    
    useEffect(()=>{
        dispatch(getCovidStats())
    },[dispatch])

    return(
        <div className="body">
            <div className="card__grid">
                <CovidCards image={firstaid} stats={selector?.totalConfirmedCases} title={'Total Confirmed Cases'} />
                <CovidCards image={firstaid} stats={selector?.totalActiveCases} title={'Total Active Cases'} />
                <CovidCards image={virus} stats={selector?.totalSamplesTested} title={'Total Sample Tested'} />
                <CovidCards image={hospital} stats={selector?.discharged} title={'Total Discharged'} />
                <CovidCards image={grave} stats={selector?.death} title={'Total Death'} />
            </div>
            <CovidStatTable data={selector?.states} />
        </div>
    )
}

export default Home