import Board from "./Board";
import NavigationBar from "./routes/NavigationBar";
import { Routes, Route } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<NavigationBar />}>
          <Route index element={<Board />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
