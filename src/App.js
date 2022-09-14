
import './App.css';
function App() {

  return (
    <div className="app">
      <h1 className='title' >SPLITTER</h1>
      <div className="card">
        <div className='left-cont' >
          <p>
            Bill
          </p>
          <div className='inp' >
            <p >$ </p>
            <input type="text" value={142.55} />

          </div>
          <p>Select Tip %</p>
          <div className="tips">
            <button>5%</button>
            <button>10%</button>
            <button className='selected' >15%</button>
            <button>25%</button>
            <button>50%</button>
            <button className='custom' >Custom</button>
          </div>
          <p>Number of people</p>
          <div className="inp">
            <p style={{fontSize:"15px"  }} >👤</p>
            <input type="text" value={5} />
          </div>
        </div>
        <div className='right-cont' >
          <div className='row'>
            <div className='label' >
              <p>Tip Amount</p>
              <p>/person</p>
            </div>
            <h1 className='price' >$4.27</h1>
          </div>
          <div className='row'>
            <div className='label' >
              <p>Total</p>
              <p>/person</p>
            </div>
            <h1 className='price' >$32.79</h1>
          </div>
          <button className='res' >
            <h2>
              Reset

            </h2>
          </button>
        </div>

      </div>
    </div>
  );
}

export default App;
