import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Recomendations from "./components/Recomendations/Recomendations";
import ReadyToSell from "./components/ReadyToSell/ReadyToSell";
import Reviews from "./components/Reviews/Reviews";
import Subscribe from "./components/Subscribe/Subscribe";
import Footer from "./components/Footer/Footer";


function App() {
  return (
    <>
      <Header/>
      <main>
        <Hero/>
        <Recomendations/>
        <ReadyToSell/>
        <Reviews/>
        <Subscribe/>
      </main>
      <Footer/>
      
    </>
  );
}

export default App;
