import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App App-header">

      <div className='div-flex'>

        <div className='div-nav'>

          <div className='div-img'>
            <img className='img-profile' src='/Assets/racheBartmoss.jpg' />
          </div>

          <div className='div-list'>

            <div>
              <a className='nav-li'>Antonio</a>
            </div>
            <div>
              <a className='nav-li' href='sobre-mi'>Sobre Mi</a>
            </div>
            <div>
              <a className='nav-li' >Porfolio</a>
            </div>
            <div>
              <a className='nav-li' >Educacion</a>
            </div>
            <div>
              <a className='nav-li' >Skills</a>
            </div>
            <div>
              <a className='nav-li' >Contacto</a>
            </div>

          </div>

        </div>

        <div className='div-page'>

          <div>
            <div>
              <h1>Antonio Rivas</h1>
              <p>Bienvenido a mi portafolio como Desarrollador Trainee</p>
              <p>Puedes contactar conmigo en mi correo</p>
              <button>Generar CV</button>
              <a>Ver CV</a>
              <h1>lateral</h1>
            </div>
          </div>

          <div id='sobre-mi'>
            <h1>Sobre Mi</h1>
            <p>
              Joven con pasión por su profesión que busca mejorar en el desarrollo
              web, usuario de sistemas de linux y aplicaciones open source y que busca
              busca convertirse en un desarrolador full stack a la vez que aprende nuevas
              habilidades y tecnologias.
            </p>
            <h1>Actualmente trabajo como codficador externo para Bansi SA</h1>
          </div>

          <div>
            <h1>Porfolio</h1>
            <p>Poner cards de mis proyectos en steveapp</p>
          </div>

          <div>
            <h1>Educacion</h1>
            <p>Poner la informacion academica</p>
          </div>

          <div>
            <h1>Skills</h1>
          </div>

          <div>
            <h1>Contacto</h1>
          </div>

        </div>

      </div>
    </div>
  );
}

export default App;
