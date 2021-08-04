import './App.css';
import BiscoitoDaSorte from './componetes/BiscoitoDaSorte';
import data from './data/data';

function App() {
  return (
    <div className="App">
      <BiscoitoDaSorte frases={data} />
    </div>
  );
}

export default App;
