import "./App.css";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Content from "./Components/Content";
import Home from "./Components/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AboutUs from "./Components/AboutUs";

function App() {
  const appName = "Codeolima Web App";
  const version = process.env.REACT_APP_VERSION;
  <>
    <Header appName={appName} />
    <Content />
    <Footer version={version} />
  </>;
  return (
    <div>
      <BrowserRouter>
        <Routes>

          {/*Parent props and mutiple props*/}
          <Route
            path="/"
            element={
              <Home projName="rnd-mern" org="Codeolima">
                {/*children props*/} <p>this is the web application.</p>
                <br />
                <p>Welocome to Codeolima.</p>
              </Home>
            }
          ></Route>

          <Route path="/AboutUs" element={<AboutUs/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
