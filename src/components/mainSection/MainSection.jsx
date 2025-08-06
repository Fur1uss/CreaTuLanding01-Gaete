const cobwebs = "/images/Cobwebs.png"
const cloth = "/images/Cloth.png"


const MainSection = () =>{
    return(
        <main>
            <h1> ESTO ES ROPA, NO WEBEAMOS </h1>
            <div className="clothes">
                <img src={cloth} alt="clothes" className="cloth" />
                <img src={cobwebs} alt="cobwebs" className="cobwebs" />
            </div>
      </main>

    )
}

export default MainSection