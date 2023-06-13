import "bootstrap/dist/css/bootstrap.min.css";

import './App.css';
import ExpenseForm from "./components/ExpenseForm";
import ExpenseList from "./components/ExpenseList";
import Header from "./components/Header";

function App() {
  return (
      <>
          <Header />
          <div className="budget-container">
              <ExpenseList />
          </div>
      </>
  );
}

export default App;
