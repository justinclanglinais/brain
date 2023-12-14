import './App.css';
import Navigation from './Components/Navigation/Navigation';
import Logo from './Components/Logo/Logo';
import ImageLinkForm from './Components/ImageLinkForm/ImageLinkForm';
import Rank from './Components/Rank/Rank';
import Particles from './Particles';


function App() {
  return (
      <div>
        <Particles />
        <Navigation />
        <Logo />
        <Rank />
        <ImageLinkForm />
    </div>
  );
}

export default App;
