import './App.css';
import Timer from './Component/Timer';


function App() {
  return (
    <> 
      <div className='title'>
        <h1>Stopwatch App</h1>
      </div>

      <div className='timer-div'>
        <div>
          <Timer />
        </div>
      </div>
        
    </>
    
  );
}

export default App;
