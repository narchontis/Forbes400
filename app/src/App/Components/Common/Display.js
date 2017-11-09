import React, {Component} from 'react';
import '../../../Styles/style.css';

class Display extends Component {
  constructor(props) {
    super();
    this.state = {
      data: props.data[0]
    }
  }

  setSquareImage(data) {
    let result = null;
    if (!data.squareImage && data.gender === 'F') {
      result = '/woman.svg';
    } else if (!data.squareImage && data.gender === 'M') {
      result = '/man.svg';
    } else {
      result = data.squareImage
    }
    return result;
  }

  render() {
    return (<table className="table table-striped">
      <thead className="thead-light">
        <tr>
          <th scope="col"></th>
          <th scope="col">Rank</th>
          <th scope="col">Name</th>
          <th scope="col">NetWorth</th>
          <th scope="col">Age</th>
          <th scope="col">Gender</th>
          <th scope="col">Residence</th>
          <th scope="col">Source</th>
        </tr>
      </thead>
      <tbody>
        {
          this.state.data.map((value, index) => {
            return (<tr key={index}>
              <th scope="row">
                <img src={this.setSquareImage(value)} className="rounded float-left" alt="profile" width="100" height="100"/>
              </th>
              <td>
                <span className="shift badge badge-pill badge-info" style={{
                    fontSize: '18px'
                  }}>
                  {index + 1}
                </span>
              </td>
              <td className="bold">{value.name}</td>
              <td className="bold">{value.worth}</td>
              <td className="bold">{value.age}</td>
              <td className="bold">{value.gender}</td>
              <td className="bold">{value.headquarters}</td>
              <td className="bold">{value.source}</td>
            </tr>);
          })
        }
      </tbody>
    </table>);
  }
}

export {
  Display
}
