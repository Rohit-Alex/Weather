import React from 'react';
import { Form , Button } from 'react-bootstrap';
import './style.css';
const CityInput = ({city, setCity, fetchCityWeather}) => {
   
    
    const handleInputChange =(e)=>{
        setCity(e.target.value);
    };
    const [error, setError] = React.useState("");
    const handleSubmit = () =>{
        if(!city){
            setError("City Field is empty!!");
        }
        else{
            fetchCityWeather();
        }
    }
    return (
    <Form className="form1">
    <Form.Group controlId="formBasicEmail">
        <Form.Label className="cityname">City</Form.Label>
        <Form.Control type="text" placeholder="Enter City" value = {city} onChange = {handleInputChange} />
        
    </Form.Group>
    <p className="text-danger">{error}</p>
    <Button className="button1" variant="info"  onClick = {handleSubmit}>
        Check
    </Button>
    </Form>
    );
};

export default CityInput;