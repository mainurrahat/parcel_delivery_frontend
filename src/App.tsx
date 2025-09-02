// App.tsx
import { Outlet } from "react-router-dom";
import Footer from "./layouts/Footer";
import Navbar from "./layouts/Navbar";

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Navbar */}
      <Navbar />
      {/* Main Content */}
      <Outlet />
      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
