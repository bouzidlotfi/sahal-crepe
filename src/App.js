import './App.css';
import About from './Components/Contents/About/About';
import Buy from './Components/Contents/Buy/Buy';
import Contact from './Components/Contents/Contact/Contact';
import NavBar from './Components/PremierePage/NavBar/NavBar';
import PageAccueil from './Components/PremierePage/PageAccueil/PageAccueil';
 

function App() {
  return (
    <div className="App">
      <NavBar/>
      <PageAccueil/>
      <About/>
      <Buy/>
      <Contact/>
    </div>
  );
}

export default App;
