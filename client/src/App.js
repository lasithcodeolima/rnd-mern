import "./App.css";
import React, { Component } from 'react';
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Content from "./Components/Content";
import Home from "./Components/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AboutUs from "./Components/AboutUs";
import UseStateHook from "./Components/UseStateHook";
import LifeCycleHook from "./LifeCycle/LifeCycleHook";

class App extends Component {
  state = { value: 1 };

  render() {
    console.log('render');
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
                  <br/>
                  <p>Welocome to Codeolima.</p>
                </Home>
              }
            ></Route>

            <Route path="/AboutUs" element={<AboutUs/>}></Route>
            <Route path="/UseStateHook" element={<UseStateHook/>}></Route>
            <Route path="/LifeCycleHook" element={<LifeCycleHook/>}></Route>
          </Routes>
        </BrowserRouter>
      </div>
    );
  }

  componentDidMount() {
    console.log('componentDidMount');
    this.setState({ value: 2 });
  }

  componentDidUpdate() {
    console.log('componentDidUpdate');
  }
}

export default App;
