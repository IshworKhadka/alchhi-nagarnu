import logo from './logo.svg';
import './App.css';

function App() {

  const handleNameChange = () =>  {
    const names = ['Ram', 'Sita', 'Laxman', 'Ravan'];
    const num = Math.floor(Math.random() * 4);
    return names[num];
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h3>Namaste {handleNameChange()}</h3>
        <h4>हैट, कडा रहेछ!</h4>
        <p>
          Edit <code>src/App.js</code> and save to see changes.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          सिक्ने हैन त रियाक्ट?
        </a>
      </header>
    </div>
  );
}

export default App;
