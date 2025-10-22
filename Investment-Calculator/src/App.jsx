import Header from "./components/Header";
import UserInput from "./components/UserInput";
import ResultsTable from "./components/ResultsTable";
import { useState } from "react";
function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment: "",
    annualInvestment: "",
    expectedReturn: "",
    duration: "",
  });

  function typeIn(event) {
    const { name, value } = event.target;
    setUserInput((prevInput) => ({
      ...prevInput,
      [name]: +value,
    }));
  }

  return (
    <>
      <Header />
      <UserInput onChangeInput={typeIn}/>
      <ResultsTable resultsProp={userInput}/>
    </>
  );
}

export default App;
