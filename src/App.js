import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import {Provider} from "react-redux";
import store from './store';
import Home from "./component/Home";

function App() {

  return (
   <Provider store={store}>
     <Home />
   </Provider>
  );
}

export default App;
