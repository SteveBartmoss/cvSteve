import './CvTemplate1.css'

export function CvTemplate1() {
    return (
        <>
            <div className="App App-header">
                <div className="div-flex">

                    <div className='div-nav'>
                        <div className='div-img'>
                            <img className='img-profile' src='/Assets/racheBartmoss.jpg' alt='profileImg' />
                        </div>

                        <div className='div-list'>

                            <div>
                                <div>
                                    <p className='nav-li' onClick={() => jumpToSection('antonio')}>Antonio</p>
                                </div>
                                <div>
                                    <p className='nav-li' onClick={() => jumpToSection('sobre-mi')}>Sobre Mi</p>
                                </div>
                                <div>
                                    <p className='nav-li' onClick={() => jumpToSection('porfolio')}>Porfolio</p>
                                </div>
                                <div>
                                    <p className='nav-li' onClick={() => jumpToSection('educacion')}>Educacion</p>
                                </div>
                                <div>
                                    <p className='nav-li' onClick={() => jumpToSection('skills')}>Skills</p>
                                </div>
                                <div>
                                    <p className='nav-li' onClick={() => jumpToSection('contacto')}>Contacto</p>
                                </div>
                            </div>

                        </div>

                        <div className='div-page'>

                            <div className='div-section' id='antonio'>

                                <div className='div-title'>
                                    <h1 className='tittle-section'>Antonio Rivas</h1>
                                </div>

                                <div className='div-content'>
                                    <p className='text-content'>Bienvenido a mi portafolio como Desarrollador Trainee</p>
                                    <p className='text-content'>Puedes contactar conmigo en mi correo</p>
                                    <div className='div-buttons'>
                                        <button className='btn' href='#'>Ver CV</button>
                                        <a className='link' href='#'>Ver CV</a>
                                    </div>

                                </div>

                                <div className='div-section' id='sobre-mi'>

                                    <div className='div-tittle'>
                                        <h1 className='tittle-section'>Sobre mi</h1>
                                    </div>
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}