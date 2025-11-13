import { Routes, Route, Link } from "react-router-dom";

function Home() {
  return <h1>Home 🏠</h1>;
}

function About() {
  return <h1>Sobre mí 👨‍🍳</h1>;
}

export default function App() {
  return (
    <div>
      <nav style={{ display: "flex", gap: "1rem" }}>
        <Link to="/">Home</Link>
        <Link to="/about">Sobre mí</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
}

