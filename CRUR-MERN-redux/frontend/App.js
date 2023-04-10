import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";
import PostList from "../components/PostList";
import PostCreate from "../components/PostCreate";
import PostEdit from "./components/PostEdit";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route exact path="/" component={PostList} />
          <Route exact path="/create" component={PostCreate} />
          <Route exact path="/edit/:id" component={PostEdit} />
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
