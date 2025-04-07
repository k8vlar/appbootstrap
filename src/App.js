import "./App.css";
import Form from "./components/Form";
const sayHello = () => {
  alert("hello Worldy");
};
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Form head={true} />
      </header>
      <button onClick={() => sayHello()}>
        Cliques moi dessus pour dire bonjour au monde qui t'entoure
      </button>
    </div>
  );
}

export default App;
