import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/WhatsAppButton";
import Home from "./pages/Home";
import Tours from "./pages/Tours";
import PackageDetails from "./pages/PackageDetails";
import TravelServices from "./pages/TravelServices";
import EventManagement from "./pages/EventManagement";
import CorporateBookings from "./pages/CorporateBookings";
import Gallery from "./pages/Gallery";
import Contact from "./pages/Contact";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/tours" element={<Tours />} />
            <Route
              path="/tours/:tourSlug/packages/:packageId"
              element={<PackageDetails />}
            />
            <Route path="/travel-services" element={<TravelServices />} />
            <Route path="/event-management" element={<EventManagement />} />
            <Route path="/corporate-bookings" element={<CorporateBookings />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
        <WhatsAppButton />
      </div>
    </Router>
  );
}

export default App;
