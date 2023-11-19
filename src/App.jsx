import { Routes, Route, BrowserRouter } from "react-router-dom";
import RegistrationForm from "./components/registrForm/RegistrationForm";
import TodoApp from "./components/todo/TodoApp";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<RegistrationForm />} />
        <Route path="/todoForm" element={<TodoApp />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
