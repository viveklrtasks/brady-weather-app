import React, { useState } from "react";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import WeatherData from "./components/table-component";

function App() {

  const [locationName, setName] = useState("");
  const [data, setData] = useState(null);
  const [stateResult, setStateReult] = useState(false);

  const handleSubmit = (evt) => {
    evt.preventDefault();
    fetchData();
  }

  const fetchData = async () => {
    const myHeaders = {}
    const myInit = {
      method: "GET",
      headers: myHeaders,
      credentials: "include"
    }

    const connString = `${process.env.REACT_APP_BRADY_API_URL}${locationName}`;
    let response = await fetch(connString, myInit);
    let data = await response.text();
    let weatherData = JSON.parse(data);
    setData(weatherData);
    setStateReult(true)
  };

  return (
    <div>
      <Row>
        <div className="App-title">Brady Weather Forcast </div>
      </Row>

      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <Row >
          <Form onSubmit={handleSubmit} >
            <Form.Group controlId="formLocation">
              <Form.Label>Location</Form.Label>
              <Row>
                <Col>
                  <Form.Control type="text" style={{ width: 400 }} required onChange={(e) => setName(e.target.value)} placeholder="Location" />
                  <Form.Text className="text-muted">
                    Please enter a location
                  </Form.Text>
                </Col>
                <Col>
                  <Button variant="primary" type="submit">
                    Submit
                  </Button>
                </Col>
              </Row>
            </Form.Group>
          </Form>
        </Row>
      </div>
      <div>
        <div style={{ display: 'flex', margin: 20, justifyContent: 'center' }}>
          <div> {stateResult ? WeatherData({ data }) : null}</div>
        </div>
      </div>
    </div>

  );
}

export default App;
