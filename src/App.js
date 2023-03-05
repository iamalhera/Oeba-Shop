import './App.css';
import {Header} from "./components";
import {Cart, ProductListing, Wishlist, Homepage, NotFound } from "./pages";
import useLocalStorage from 'use-local-storage';
import { Route, Routes } from 'react-router-dom';

function App() {
  const defaultDark = window.matchMedia("(prefers-color-scheme : dark)").matches;
  const [theme, setTheme] = useLocalStorage(
    "theme",
    defaultDark ? "dark" : "light"
  );
  const switchTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
  }
  return (
    <div className="App" data-theme={theme}>
      <Header />
      <button className="btn btn-primary-outline" onClick={switchTheme}>
        Change Theme
      </button>
      <br />
      <label className="toggle-switch">
        <input type="checkbox" id="chk-toggle" /> 
        <div className="slider-container">
          <span className="slider"></span>
        </div>
      </label>

      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/product-page" element={<ProductListing />} />
        <Route path="/cart-page" element={<Cart />} />
        <Route path="/wishlist" element={<Wishlist />} />
      </Routes>

    </div>
  );
}

export default App;
