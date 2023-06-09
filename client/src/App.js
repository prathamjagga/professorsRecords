import { HashRouter as Router, Routes, Route } from "react-router-dom";

function Home() {
  return (
    <div style={{ padding: 20 }}>
      <h2>Home View</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adip.</p>
    </div>
  );
}

function App() {
  return (
    <Router>
      <Route exact path="/" Component={<Home />} />
    </Router>
  );
}

export default App;
