import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Productivity from "./components/Productivity";
import SyncGithub from "./components/SyncGithub";
import WorkTogether from "./components/WorkTogether";

function App() {
  return (
    <div className="relative">
      <Header />
      <Hero />
      <Productivity />
      <WorkTogether />
      <SyncGithub />
      <Footer />
    </div>
  );
}

export default App;
