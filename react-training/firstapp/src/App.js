import logo from "./logo.svg";
import "./App.css";
import Header from "./MyComponent/Header";
import { Todos } from "./MyComponent/Todos";
import { Footer } from "./MyComponent/Footer";
function App() {
  return (
    <>
      <Header title={22} searchBar={false} />
      <Todos />
      <Footer />
    </>
  );
}

export default App;
