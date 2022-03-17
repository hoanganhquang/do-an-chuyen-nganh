import "./styles/index.scss";
import { Header, HomePage } from "./components";

function App() {
  return (
    <div className="App">
      <div className="wrapper">
        <Header />
        <HomePage />
      </div>
    </div>
  );
}

export default App;
