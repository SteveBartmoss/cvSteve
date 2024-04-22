import logo from './logo.svg';
import './App.css';

function App() {

  const jumpToSection =(id)=>{
    const section = document.getElementById(id);
    console.log(id)
    section.scrollIntoView({behavior: "smooth"});
  }

  return (
    <div className="App App-header">

      <div className='div-flex'>

        <div className='div-nav'>

          <div className='div-img'>
            <img className='img-profile' src='/Assets/racheBartmoss.jpg' />
          </div>

          <div className='div-list'>

            <div>
              <p className='nav-li' onClick={()=>jumpToSection('antonio')}>Antonio</p>
            </div>
            <div>
              <p className='nav-li' onClick={()=>jumpToSection('sobre-mi')}>Sobre Mi</p>
            </div>
            <div>
              <p className='nav-li' onClick={()=>jumpToSection('porfolio')}>Porfolio</p>
            </div>
            <div>
              <p className='nav-li' onClick={()=>jumpToSection('educacion')}>Educacion</p>
            </div>
            <div>
              <p className='nav-li' onClick={()=>jumpToSection('skills')}>Skills</p>
            </div>
            <div>
              <p className='nav-li' onClick={()=>jumpToSection('contacto')}>Contacto</p>
            </div>

          </div>

        </div>

        <div className='div-page'>

          <div className='div-section' id='antonio'>

            <div className='div-tittle'>
              <h1 className='tittle-section'>Antonio Rivas</h1>
            </div>

            <div className='div-content'>
              <p className='text-content'>Bienvenido a mi portafolio como Desarrollador Trainee</p>
              <p className='text-content'>Puedes contactar conmigo en mi correo</p>
              <div className='div-buttons'>
                <button className='btn'>Generar CV</button>
                <a className='link'>Ver CV</a>
              </div>
            </div>

          </div>

          <div className='div-section' id='sobre-mi'>

            <div className='div-tittle'>
              <h1 className='tittle-section'>Sobre Mi</h1>
            </div>

            <div className='div-content'>
              <p className='text-content'>
                Joven con pasión por su profesión que busca mejorar en el desarrollo
                web, usuario de sistemas de linux y aplicaciones open source y que busca
                busca convertirse en un desarrolador full stack a la vez que aprende nuevas
                habilidades y tecnologias.
              </p>
              <h1 className='sub-tittle'>Actualmente trabajo como programador Junior en Grupo Carsol</h1>
            </div>

          </div>

          <div className='div-section' id='porfolio'>

            <div className='div-tittle'>
              <h1 className='tittle-section'>Porfolio</h1>
            </div>

            <div className='div-cards'>

              <div className='card'>
                <div className='div-img-card'>
                  <img className='img-card' src='https://media0.giphy.com/media/lkceXNDw4Agryfrwz8/giphy.gif?cid=53b38410mpbuqxqk9rqx0lizb5vj0i6122m0ss07w0ptb3e3&ep=v1_gifs_search&rid=giphy.gif&ct=g' />
                </div>
                <div className='div-content-card'>
                  <h1 className='tittle-card'>GifExpert App</h1>
                  <p className='text-content'>Una divertida aplicacion para buscar gifs</p>
                  <a className='link' href='https://stevechambitas.netlify.app/havefun/gifapp' rel="noopener noreferrer" target="_blank" >Ver app</a>
                </div>

              </div>

              <div className='card'>
                <div className='div-img-card'>
                  <img className='img-card' src='https://media0.giphy.com/media/3ohhweiVB36rAlqVCE/giphy.gif?cid=53b38410859r2noo4mtwsxsutzjbksi2voz4kt2vm5p19qac&ep=v1_gifs_search&rid=giphy.gif&ct=g' />
                </div>
                <div className='div-content-card'>
                  <h1 className='tittle-card'>Oraculo App</h1>
                  <p className='text-content'>Una aplicacion para responder tus preguntas</p>
                  <a className='link' href='https://stevechambitas.netlify.app/havefun/yesornotapp' rel="noopener noreferrer" target="_blank">Ver app</a>
                </div>
              </div>

            </div>

          </div>

          <div className='div-section' id='educacion'>

            <div className='div-tittle'>
              <h1 className='tittle-section'>Educacion</h1>
            </div>

            <div className='div-content'>
              <h1 className='sub-tittle'>Tec MM Unidad Academica Zapopan, Guadalajara, Jalisco</h1>
              <p className='text-content'>
                2019 - 2024 Actualmente soy egresado de la carrera de Ingenieria en Sistemas
              </p>
            </div>

          </div>

          <div className='div-section' id='skills'>

            <div className='div-tittle'>
              <h1 className='tittle-section'>Skills</h1>
            </div>

            <div className='div-content'>
              <h1 className='sub-tittle'>Lenguajes de Programacion</h1>
              <p className='text-content'>C Java Python Javascript</p>
              <h1 className='sub-tittle'>Frameworks y Librerias</h1>
              <p className='text-content'>React Express</p>
              <h1 className='sub-tittle'>Estoy Aprendiendo</h1>
              <p className='text-content'>Vue js Nest js</p>
            </div>

          </div>

          <div className='div-section' id='contacto'>

            <div className='div-tittle'>
              <h1 className='tittle-section'>Contacto</h1>
            </div>

            <div className='div-content'>
              <p className='text-content'>Enviame un <a className='link2' href='mailto:za19012397@zapopan.tecmm.edu.mx'>Correo</a></p>
              <p className='text-content'>Visita mi perfil de <a className='link2' href='https://github.com/MarcoAntonioGuadalupeRivasGuzman' rel="noopener noreferrer" target="_blank">GitHub</a></p>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
}

export default App;
