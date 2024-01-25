import './App.css';
import Navbar from './components/Navbar';
import Add from './page/Add';
import Explore from './page/Explore';
import Footer from './page/Footer';
import Lists from './page/Lists';
import Music from './page/Music';
import Poster from './page/Poster';

function App() {
  return (
    <div>
      <Navbar/>
      <Explore/>
      <Lists/>
      <Add/>
      <Music/>
      <Poster/>
      <Footer/>
    </div>
  );
}

export default App;
