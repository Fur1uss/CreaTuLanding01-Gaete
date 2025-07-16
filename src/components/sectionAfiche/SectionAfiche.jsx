const leftModel = "./src/assets/images/left-model.webp"
const rightModel = "./src/assets/images/right-model.webp"
const mainModel = "./src/assets/images/main-model.webp"
const divider = "./src/assets/images/divisor-papel.png"

import MarqueeBanner from "../MarqueeBanner/MarqueeBanner"

const SectionAfiche = () => {
    return(
        <section className="afiche-container">
        <div className='models-banner-container'>
          <h2>Webeo</h2>
          <img src={leftModel} alt="left model" className='side-model' />
          <img src={mainModel} alt="" className='main-model' />
          <img src={rightModel} alt="right model" className='side-model' />
        </div>
        
        <div className='text-banner-container'>
          <MarqueeBanner />
        </div>
        <img src={divider} alt="divider" className="divider-img" />
      </section>
    )
}

export default SectionAfiche