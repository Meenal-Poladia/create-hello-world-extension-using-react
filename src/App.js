import './App.css';

function App() {
    const handleSubmit = (e) => {
        console.log(e.target.checked)
    }

  return (
    <div className="App">
        <h3>Hello World</h3>
        <form onSubmit={(e) => handleSubmit(e)}>
            <input
                type="checkbox"
                name="changeText"
                id="changeText"
                onClick={(e) => handleSubmit(e)}
            />
            <label htmlFor="changeText">Check box</label>
        </form>

    </div>
  );
}

export default App;
