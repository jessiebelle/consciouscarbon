import React, { Component } from 'react';

class House extends Component {
  state = {
    house: []
  };

  async componentDidMount() {
    try {
      const res = await fetch('http://127.0.0.1:8000/house/'); // fetching the data from api, before the page loaded
      const house = await res.json();
      this.setState({
        house
      });
    } catch (e) {
      console.log(e);
    }
  }

  render() {
    return (
      <div>
        {this.state.house.map(item => (
          <div key={item.id}>
            <h1>{item.name}</h1>
            <span>{item.address}</span>
            <p>Current energy rating:</p>

            <span>{item.current_energy_rating}</span>
            <p>potential energy rating:</p>
            <span>{item.potential_energy_rating}</span>
          </div>
        ))}
      </div>
    );
  }
}

export default House;