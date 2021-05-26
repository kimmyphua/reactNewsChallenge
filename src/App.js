import logo from './logo.svg';
import './App.css';
import { Route, Link, Switch, BrowserRouter} from "react-router-dom";
import Navigation from "./Navigation";
import HeadLinesItems from "./HeadLinesItems";
import HeadLines from "./HeadLines";
import {useEffect, useState} from "react";
import All from "./All";

//afd3734b5eae4d7cb74c72ea2678977a

function App() {
    const [articles, setArticles] = useState([])
    // const [articles1, setArticles1] = useState([])
    // const [articles2, setArticles2] = useState([])

  return (
<div className="App">
      <BrowserRouter>
          <div>
              <Navigation/>
          </div>
          <Switch>
              <Route path="/" exact>
                  <All />
              </Route>
              <Route path="/:term">
                  <HeadLines  />
              </Route>
              <Route path="*">
                  Page is not found 404
              </Route>
          </Switch>
      </BrowserRouter>
</div>
  );
}

export default App;
