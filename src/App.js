import './App.css';
import { MainBrittany } from './components/templateBrittany/templateBrittany';
import { MainMidu } from './components/templateMidu/mainMidu';

function App() {

  const jumpToSection =(id)=>{
    const section = document.getElementById(id);
    console.log(id)
    section.scrollIntoView({behavior: "smooth"});
  }

  return (
    <MainBrittany />
  );
}

export default App;
