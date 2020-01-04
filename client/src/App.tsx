import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

const Home = () => <div>Home</div>
const CreateList = () => <div>Create</div>

const App: React.FC = () => {
    return (
        <Router>
            <div className="app">

            </div>
            <Switch>
                <Route path="/">
                    <Home/>
                </Route>
                <Route path="/create">
                    <CreateList/>
                </Route>
            </Switch>
        </Router>
    );
}

export default App;
