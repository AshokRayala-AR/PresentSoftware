import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./components/home/HomePage";
function App() {
  return (
    <BrowserRouter>
      
        {/* <Header /> */}
        <Routes>
          <Route path={"/"} element={<HomePage />} />
          {/* <Route path={"/about"} element={<AboutUsPage />} />
          <Route path={"/contactus"} element={<ContactUsPage />} />
          <Route path={"/shop"} element={<Specials />} />
          <Route path={"/contactus"} element={<Specials />} />
          <Route path={"/gifts"} element={<RenewPromise />} />
          <Route path="/cart" element={<Cart />} /> */}
        </Routes>
        {/* <Footer /> */}
      
    </BrowserRouter>
  );
}

export default App;
