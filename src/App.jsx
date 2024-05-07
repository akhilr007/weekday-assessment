import { Provider } from "react-redux";
import "./App.css";
import JobList from "./components/JobList/JobList";
import store from "./store/store";

function App() {
  return (
    <Provider store={store}>
      <JobList />
    </Provider>
  );
}

export default App;
