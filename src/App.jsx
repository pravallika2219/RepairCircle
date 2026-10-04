import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import "./App.css";

import HowItWorks from "./pages/HowItWorks";
import Services from "./pages/Services";

function Header() {
  return (
    <header className="header">
      <Link to="/" className="logo">
        <span>R</span>
        RepairCircle
      </Link>

      <nav>
        <Link to="/">Home</Link>
        <Link to="/how-it-works">How it works</Link>
        <Link to="/services">Services</Link>
        <Link to="/providers">For providers</Link>

        <button>Login</button>
      </nav>
    </header>
  );
}


function Home() {
  return (
    <div className="app">

      <Header />

      <main className="hero">
        <div className="hero-content">

          <p className="eyebrow">
            LOCAL REPAIR NETWORK
          </p>

          <h1>
            Repair anything.
            <br />
            <span>Find someone nearby.</span>
          </h1>

          <p className="hero-text">
            Tell us what's broken and RepairCircle helps you
            find the right local person to fix it.
          </p>

          <button className="primary-button">
            Post a repair <span>→</span>
          </button>

        </div>
      </main>

    </div>
  );
}


function Providers() {
  return (
    <div className="app">

      <Header />

      <main className="page">

        <div className="page-header">

          <p className="eyebrow">
            FOR PROVIDERS
          </p>

          <h1>
            Grow your local
            <span> repair business.</span>
          </h1>

          <p>
            Join RepairCircle and connect with people
            looking for local repair services.
          </p>

        </div>

      </main>

    </div>
  );
}


function App() {
  return (
    <BrowserRouter>

      <Routes>

        <Route
          path="/"
          element={<Home />}
        />

        <Route
          path="/how-it-works"
          element={
            <div className="app">
              <Header />
              <HowItWorks />
            </div>
          }
        />

        <Route
          path="/services"
          element={
            <div className="app">
              <Header />
              <Services />
            </div>
          }
        />

        <Route
          path="/providers"
          element={<Providers />}
        />

      </Routes>

    </BrowserRouter>
  );
}

export default App;