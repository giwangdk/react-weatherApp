import React,  { useState } from "react";
import axios from 'axios'

import getCurrentDayForecast from "../helpers/getCurrentDayForecast";
import getCurrentDayDetailedForecast from "../helpers/getCurrentDayDetailedForecast";
import getUpcomingDaysForecast from "../helpers/getUpcomingDaysForecast";


const BASE_URL = 'https://www.metaweather.com/api/location';
const CROSS_ORIGIN = 'https://the-ultimate-api-challenge.herokuapp.com';
const REQUEST_URL = `${CROSS_ORIGIN}/${BASE_URL}`


const useForecast = () =>{
    const [isError, setError] = useState(false);
    const [isLoading, setLoading] = useState(false);
    const [forecast, setForecast] = useState(null);


    const getWoeid = async(location)=>{
        const {data} = await axios(`${REQUEST_URL}/search`, {params:{query:location}})
        //2. get weather

        if(!data || data.length === 0){
            //set an error
            setError('There is not such location');
            setLoading(false);
            return;
        }
        return data[0]
    }

    const getForecastData = async(woeid)=>{
        const {data} = await axios(`${REQUEST_URL}/${woeid}`);

        if(!data || data.length === 0){
            setError('Something went wrong');
            setLoading(false);
            return;
        }
        return data
    }

    const gatherForecastData = (data) =>{
        const currentDay = getCurrentDayForecast(data.consolidated_weather[0], data.title);
        const currentDayDetails = getCurrentDayDetailedForecast(data.consolidated_weather[0]);
        const upcomingDays = getUpcomingDaysForecast(data.consolidated_weather);
    
        setForecast({currentDay, currentDayDetails, upcomingDays});
        setLoading(false);
    }


    const submitRequest = async location =>{
        setLoading(true);
        setError(false);
        const response = await getWoeid(location);
        if(!response?.woeid) return;
        const data = await getForecastData(response.woeid)
        if(!data) return;

        
        gatherForecastData(data)
    }

    return{
        isError,
        isLoading,
        forecast,
        submitRequest
    }
}

export default useForecast;