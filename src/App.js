
import Navbar from "./components/Navbar";

function App() {
  return (
     
      <header className="App-header">
      <div className="nav-area">
        <a href="/#" className="logo">
          Nested Components
          <Navbar />
        </a>
      </div>
      
    </header>
   
  );
}

export default App;
