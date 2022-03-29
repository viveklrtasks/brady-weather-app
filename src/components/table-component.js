
import Table from 'react-bootstrap/Table';

  function WeatherData(props) {
    return (
      <div  style={{width: 600}}>
        <Table striped bordered>
          <tbody>
            <tr>
              <td colSpan={2}><img width={100} src={props.data.icon} alt='Weather'></img></td>
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

  export default WeatherData;