import NotificationHeader from "./components/NotificationHeader";
import Hero from "./components/Hero/Hero";
import NewArrivals from "./components/New Arrivals/NewArrivals";
import Sales from "./components/Sales/Sales";
import Features from "./components/Features/Features";
import NewLetter from './components/News Letter/NewsLetter';
import Footer from "./components/Footer/Footer";


function App() {
  return (
    <div className="App">
      <NotificationHeader />
      <Hero />
      <NewArrivals />
      <Sales />
      <Features />
      <NewLetter />
      <Footer />
    </div>
  );
}

export default App;
