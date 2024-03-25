
import './App.css';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Content from './Components/Content';
import Home from './Components/Home';

function App() {
  const appName = "Codeolima Web App";
  const version = process.env.REACT_APP_VERSION;

  return (
    <div>
      <Header appName={appName}/>

      {/*Parent props and mutiple props*/}
      <Home projName="rnd-mern" org="Codeolima">
      {/*children props*/}
      <p>this is the web application.</p><br/>
      <p>Welocome to Codeolima.</p>
      </Home>


      <Content/>
      <Footer version={version}/>
    </div>
  );
}

export default App;
