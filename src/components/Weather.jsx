import React, { useState, useEffect } from 'react';

function WeatherComponent() {
    const [weatherData, setWeatherData] = useState(null);

    useEffect(() => {
        const fetchWeatherData = async () => {
            try {
                const response = await fetch('https://api.tomorrow.io/v4/timelines?location=40.7128,-74.0060&fields=temperature,weatherCode&apikey=OAUMwf91TOBEOT6lQE8Z08YXtfQuzIaT');
                const data = await response.json();
                setWeatherData(data);
            } catch (error) {
                console.error('Error fetching weather data:', error);
            }
        };

        fetchWeatherData();
    }, []);

    return (
        <>
            {weatherData && weatherData.data && (
                <>
                    <div className="border-2-border-red-500">      
                        <p>Temperature: {weatherData.data.timelines[0].intervals[0].values.temperature}°C</p>
                        <p>Weather Code: {weatherData.data.timelines[0].intervals[0].values.weatherCode}</p>
                    </div>
                </>
            )}
        </>
    );
}

export default WeatherComponent;
