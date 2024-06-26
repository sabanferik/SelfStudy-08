import { Provider } from "react-redux";
import "./App.css";
// import Counter from "./components/counter/Counter";
import ErrorBoundary from "./components/ErrorBoundary";
import { store } from "./store/store";
import Todo from "./components/todo/Todo";

function App() {
  return (
    <div className="app">
      <Provider store={store}>
        <ErrorBoundary>
          {/* <Counter /> */}
          <Todo />
        </ErrorBoundary>
      </Provider>
    </div>
  );
}

export default App;
