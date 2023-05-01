import './App.css';

const App = () => {

  const Person = (props) => {
    return (
      <>
        <h1>Name: {props.name}</h1>
        <h2>Last Name: {props.lastName}</h2>
        <h2>Age: {props.age}</h2>
      </>
    )
  }

  return (
    <div className="App">
      <Person name={"Jane"} lastName={"Doe"} age={"38"} />
      <Person name={"Sjur"} lastName={"Hassel"} age={"48"} />
      <Person />
      <Person />
    </div>
  );
}

export default App;
