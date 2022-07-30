import { Footer } from "./components/Footer";
import Header from "./components/Header";
import Logo from "./components/Logo";
import "./App.css";

function App() {
  return (
    <div className="logo">
      <Logo />

      <Header />

      <Footer
        title="Chonburi"
        website="www.chonburi.biz"
        postcode={20220}
        developer="Akkadate"
        isOpen={true}
      />
    </div>
  );
}

export default App;
