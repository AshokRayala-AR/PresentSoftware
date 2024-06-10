// import { BrowserRouter, Route, Routes } from "react-router-dom";

// // import AboutComp from "./components/about/aboutcompany/AboutComp";
// // import HomePage from './components/home/HomePage';

// import CeoComp from "./components/about/ceo/CeoComp";

// function App() {
//   return (
//     <BrowserRouter>
//       <CeoComp/>
//         {/* <Header /> */}
//         <Routes>
//           {/* <Route path={"/"} element={<HomePage />} />
//           <Route path={"/about"} element={<AboutComp />} /> */}
//           {/* <Route path={"/contactus"} element={<ContactUsPage />} />
//           <Route path={"/shop"} element={<Specials />} />
//           <Route path={"/contactus"} element={<Specials />} />
//           <Route path={"/gifts"} element={<RenewPromise />} />
//           <Route path="/cart" element={<Cart />} /> */}
//         </Routes>
//         {/* <Footer /> */}

//     </BrowserRouter>
//   );
// }

// export default App;

import AboutCompanyPage from "./components/about/AboutCompanyPage";
import FooterComp from "./components/footer/footerfold/FooterComp";
// import AboutComp from "./components/about/AboutCompanyPage";

function App() {
  return (
    <div>
      <AboutCompanyPage />
      <FooterComp />
    </div>
  );
}

export default App;
