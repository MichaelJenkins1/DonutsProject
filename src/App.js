
import './App.css';
import Main from "./Main"
import {
  BrowserRouter as Router,
  Route,
} from "react-router-dom"

export default function App() {
  return (
    <Router>
      <Route>
        <Main />
      </Route>
    </Router>
  );
}