import logo from './logo.svg';
import './App.css';
import About from './components/about/About'
import Blog from './components/blog/Blog'

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <About/>
      <Blog/>
      </header>
    </div>
  );
}

export default App;
