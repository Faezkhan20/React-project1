
import { Route, Routes } from 'react-router-dom';
import Signup from "./Component/Signup"

function App() {
  return (
    <div className="App">
       <Routes>
       <Route path='/signup' element={<Signup/>} />
       </Routes>
    </div>
  );
}

export default App;
