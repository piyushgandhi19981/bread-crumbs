import { Route, Routes } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import Home from "./pages/home";
import ItemList from "./pages/itemsList";
import Item from "./pages/item";
import "./styles.css";
import BreadCrumbs from "./components/breadCrumbs";

export default function App() {
  return (
    <BrowserRouter>
      <h2 className="example">BreadCrumbs Example</h2>
      <BreadCrumbs />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/items-list" element={<ItemList />} />
        <Route path="/items-list/:id" element={<Item />} />
      </Routes>
    </BrowserRouter>
  );
}
