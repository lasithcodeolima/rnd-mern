
import './App.css';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Content from './Components/Content';

function App() {
  const appName= 'codeolima'
  const version = '1.0.0'
  return (
    <div className="App">
      <Header/>
      <Content/>
      <Footer/>
    </div>
  );
}

export default App;
