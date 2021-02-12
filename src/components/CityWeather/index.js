import React from 'react';
import {Table } from 'react-bootstrap';
const CityWeather = ({ cityWeather,country,visibility}) => {
    console.log(cityWeather.visibility);
    let { humidity, temp, temp_max, temp_min } = cityWeather;
        if(temp != null){
            temp = (temp-273).toFixed(2)+"°C";
            temp_max = (temp_max -273).toFixed(2)+"°C";
            temp_min = (temp_min-273).toFixed(2)+"°C";
        }
    if(temp!=null)
        return (
            <>
            <form className="form1">
            
            <Table className="tbl" striped bordered hover variant="dark" size="small" font="20px">
                <thead>
                    <tr>
                    <th>Humidty</th><td>{(humidity)}</td>
                    </tr>
                    <tr>
                    <th>Temperature</th><td>{(temp)}</td>
                    </tr>
                    <tr>
                    <th>Max Temperature</th><td>{(temp_max)}</td>
                    </tr>
                    <tr>
                    <th>Min Temperature</th><td>{(temp_min)}</td>
                    </tr>
                    <tr>
                    <th>Country</th><td>{country}</td>
                    </tr>
                    <tr>
                    <th>Visibility</th><td>{visibility}</td>
                    </tr>
                </thead>
                </Table>
            </form>
            </>
        );
    else{
        return (
            <div></div>
        )
    }
};

export default CityWeather;