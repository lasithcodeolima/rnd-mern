
import './App.css';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Content from './Components/Content';

function App() {
  const appName = "Codeolima Web App";
  const version = process.env.REACT_APP_VERSION;

  return (
    <div>
      <Header appName={appName}/>
      <Content/>
      <Footer version={version}/>
    </div>
  );
}

export default App;
