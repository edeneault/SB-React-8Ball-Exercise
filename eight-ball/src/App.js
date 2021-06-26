import './App.css';
import EightBall from './components/EightBall';
import answers from './data/answers';

 

function App() {
  return (
    <div className="App">
        <h1>Magic 8-Ball</h1>
        <EightBall answers={answers} />
        

    </div>
  );
}

export default App;
