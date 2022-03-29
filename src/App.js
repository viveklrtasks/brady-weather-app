import React, { useState } from "react";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Table from 'react-bootstrap/Table';
import Row from 'react-bootstrap/Row';

function App() {

  const [locationName, setName] = useState("");
  const [data, setData] = useState(null);
  const [stateResult, setStateReult] = useState(false);

  const handleSubmit = (evt) => {
    evt.preventDefault();
    fetchData();
  }

  function showResult(props) {
    return (
      <div className="w-50 p-3">
        <Table striped bordered>
          <tbody>
            <tr>
              <td colSpan={2}><img width={100} src={props.data.icon}></img></td>
            </tr>
            <tr>
              <td>Region</td>
              <td>{props.data.region}</td>
            </tr>
            <tr>
              <td>Country</td>
              <td>{props.data.country}</td>
            </tr>
            <tr>
              <td>Tempreature</td>
              <td>{props.data.tempreature}</td>
            </tr>
            <tr>
              <td>Condition</td>
              <td>{props.data.condition}</td>
            </tr>
            <tr>
              <td>Wind</td>
              <td>{props.data.wind}</td>
            </tr>
            <tr>
              <td>Humidity</td>
              <td>{props.data.humidity}</td>
            </tr>
            <tr>
              <td>Feels like</td>
              <td>{props.data.feelsLike}</td>
            </tr>
          </tbody>
        </Table>
      </div>
    );

  }
  const fetchData = async () => {
    const myHeaders = {}
    const myInit = {
      method: "GET",
      headers: myHeaders,
      credentials: "include"
    }

    const connString = `${process.env.REACT_APP_BRADY_API_URL}${locationName}`;
    console.log(connString);
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


      <Row class='d-flex align-items-center'>
        <Form onSubmit={handleSubmit} className="w-50 p-3">
          <Form.Group className="mb-3" controlId="formLocation">
            <Form.Label>Location</Form.Label>
            <Form.Control type="text" required onChange={(e) => setName(e.target.value)} placeholder="Location" />
            <Form.Text className="text-muted">
              Please enter a vaild location
            </Form.Text>
          </Form.Group>

          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </Row>
      <div> {stateResult ? showResult({ data }) : null}</div>
    </div>

  );
}

export default App;
