import './App.css';
import { MainMidu } from './components/templateMidu/mainMidu';

function App() {

  const jumpToSection =(id)=>{
    const section = document.getElementById(id);
    console.log(id)
    section.scrollIntoView({behavior: "smooth"});
  }

  return (
    <MainMidu />
  );
}

export default App;
