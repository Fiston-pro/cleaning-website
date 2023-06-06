import AboutSection from "./components/about";
import ContactSection from "./components/contact";
import Footer from "./components/footer";
import Main from "./components/main";
import NavBar from "./components/navbar";
import ServicesSection from "./components/services";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <div>
      <Toaster toastOptions={{ duration: 4000 }} />
      <NavBar />
      <Main />
      <AboutSection />
      <ServicesSection />
      <ContactSection />
      <Footer />
    </div>
  );
}

export default App;
