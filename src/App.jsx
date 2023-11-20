import { Routes, Route, HashRouter } from "react-router-dom";
import RegistrationForm from "./components/registrForm/RegistrationForm";
import TodoApp from "./components/todo/TodoApp";

const App = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<RegistrationForm />} />
        <Route path="/todoForm" element={<TodoApp />} />
      </Routes>
    </HashRouter>
  );
};

export default App;
