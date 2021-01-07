import React from "react";
import {HashRouter, Route} from "react-router-dom";
import About from "./routes`/About";
import Home from "./routes`/Home";
import "./App.css";
import Navigation from "./components/Navigation";

function App(){
  return <HashRouter>
     <Navigation>
       <Route path="/"  exact={true} component={Home}></Route>  {/* "/" 가 라우트로 여겨짐*/}
       <Route path="/about" component={About}></Route>{/*렌더링할 스크린이 들어감 */}
     </Navigation>
     
  </HashRouter>
}

export default App;