import { Footer } from "./components/Footer";
import Header from "./components/Header";
import Logo from "./components/Logo";
import "./App.css";
import Sidebar from "./components/Sidebar";
import Menu from "./components/Menu";

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
      <hr />
      <Sidebar />
      <hr />
      <Menu />
    </div>
  );
}

export default App;
