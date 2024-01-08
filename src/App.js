import React from 'react';
import './App.css';
import Navigation from './Components/Navigation/Navigation';
import SignIn from './Components/SignIn/SignIn';
import Logo from './Components/Logo/Logo';
import ImageLinkForm from './Components/ImageLinkForm/ImageLinkForm';
import Rank from './Components/Rank/Rank';

class App extends React.Component {
  constructor () {
    super ()
    this.state = {
      input: '',
      route: 'signin'
    }
  }

  onRouteChange = (route) => {
    this.setState({route: route})
  }

  onInputChange = (event) => {
    console.log(event.target.value)
  }

  onButtonSubmit = () => {
    console.log("Click")
  }

  render () {
    return (
      <div>
        <Navigation onRouteChange={this.onRouteChange}/>
        { this.state.route === 'signin' ? 
          <SignIn onRouteChange={this.onRouteChange}/>
            :
          <div>
            <Logo />
            <Rank />
            <ImageLinkForm 
              onInputChange={this.onInputChange} 
              onButtonSubmit={this.onButtonSubmit}
            />
          </div>
        }
    </div>
    );
  }
};



export default App;
