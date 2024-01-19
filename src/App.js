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

          <div>

            <div>
              <a>Antonio</a>
            </div>
            <div>
              <a>Sobre Mi</a>
            </div>
            <div>
              <a>Porfolio</a>
            </div>
            <div>
              <a>Educacion</a>
            </div>
            <div>
              <a>Skills</a>
            </div>
            <div>
              <a>Contacto</a>
            </div>
          </div>

        </div>

        <div>

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

          <div>
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
