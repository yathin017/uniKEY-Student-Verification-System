import { Navbar } from "./mycomps/Navbar";
import { Homepage } from "./mycomps/Homepage";
import { AppLink } from "./mycomps/AppLink";
import { AboutUs } from "./mycomps/AboutUs";
import { Footer } from "./mycomps/Footer";
import { CA } from "./mycomps/CA";
import { MA } from "./mycomps/MA";
import { Public } from "./mycomps/Public";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<><Homepage />
            <AppLink />
            <AboutUs /></>} />
          <Route path="public" element={<><Public /></>} />
          <Route path="admin" element={<><MA /></>} />
          <Route path="college" element={<><CA /></>} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
