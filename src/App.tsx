import { Route, Routes } from "react-router-dom";

import { Goods } from "./pages/Goods";
import { CreateGoods } from "./pages/CreateGoods";

import { Header } from "./components/header/Header";
import { Layout } from "./components/layout/Layout";
import { Footer } from "./components/footer/Footer";
import { NotFound } from "./pages/NotFound";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Goods />} />
          <Route path="/creategoods" element={<CreateGoods />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
