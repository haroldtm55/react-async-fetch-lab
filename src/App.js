// create your App component here
import React, {Component} from 'react'

export default class App extends Component {
  constructor() {
    super()
    this.state = {
      peopleInSpace: []
    }
  }

  componentDidMount() {
    fetch('http://api.open-notify.org/astros.json')
      .then(resp => resp.json())
      .then(astros => {
        this.setState({
          peopleInSpace: astros.people
        })
    })
  }

  render() {
    return (
      <ul>
        {this.state.peopleInSpace.map((astro,idx)=><li key={idx}>{astro.name}</li>)}
      </ul>
    )
  }
}