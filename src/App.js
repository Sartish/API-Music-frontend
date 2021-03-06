import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

// import { FrontPage } from "./pages/FrontPage";
import { SongsList } from "./pages/SongsList";
import { OneSong } from "./pages/OneSong";
import { TopRated } from "./pages/TopRated";
import { Nav } from "./components/Nav"
import SearchTitle from "./pages/SearchTitle";
import About from "./pages/About"

//path  Its most basic responsibility is to render some UI when its path matches the current URL.
export const App = () => {
  return (
    <BrowserRouter>
        <Nav />
      <Switch>
        <Route path="/" exact>
          <SongsList />
        </Route>

        <Route path="/songs/search"exact>
        <SearchTitle />
        </Route>

        <Route path="/songs/song/:id" exact>
          <OneSong />
        </Route>

        <Route path="/songs/top-rated" exact>
          <TopRated />
        </Route>

        <Route path="/songs/about" exact>
          <About />
        </Route>

      </Switch>
    </BrowserRouter>
  );
};
