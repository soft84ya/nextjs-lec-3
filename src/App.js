
// Import Area
import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Aside from './components/Aside';
import Section from './components/Section';


//2 Function
function App() {
  return (
    <>
    <Header/>
    <main>
      <Aside/>
      <Section/>
    </main>
   <Footer/>

    </>
  );
}

export default App;
