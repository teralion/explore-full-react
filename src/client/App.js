import React, {PureComponent} from 'react';
import './app.css';

export default class App extends PureComponent {
  state = {
    username: null
  }

  componentDidMount() {
    fetch('/api/username')
      .then(res => (
        res.json()
      ))
      .then(data => (
        this.setState({
          username: data.username
        })
      ))
      .catch(console.error)
  }

  render() {
    const {username} = this.state;

    return (
      <div>
        <p>{ 
          username 
            ? <h1>{'Hello, ' + username}</h1>
            : <h1>Loading... please wait!</h1>
        }</p>
      </div>
    )
  }
}
