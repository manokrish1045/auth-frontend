import { Route, Routes } from "react-router-dom";
import Form from "./components/Form";

function App() {
  return (
    <Routes>
      <Route path='/reset-password' Component={Form} />
    </Routes>
  )
}

export default App;
