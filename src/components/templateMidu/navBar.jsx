

export function NavBar({data}){

    const jumpToSection=(id)=>{
        const section = document.getElementById(id)
        section.scrollIntoView({behavior: "smooth"})
    }

    return(
        <>
            <div>
                {
                    data.map(item => 
                        <p key={item.id} onClick={()=>jumpToSection(item.id)}>{item.title}</p>
                    )
                }
            </div>
        </>
    )
}