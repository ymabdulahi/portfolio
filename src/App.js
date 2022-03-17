import './App.css';
import SwitchColor from './Components/SwitchColor';
import Background from './Pages/Background';
import Home from './Pages/Home';
import Projects from './Pages/Projects';
import { ThemeProvider } from './context/ThemeContext';

function App() {
  return (
    <div className="App">
      <ThemeProvider>
        <SwitchColor />
        <Home />
        <Background />
        <Projects />
      </ThemeProvider>
    </div>
  );
}

export default App;
