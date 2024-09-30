import './css/fonts-and-vars.css'
import './css/header-desktop-style.css'
import './css/main-desktop-styles.css'

import Talent from './talents-component/talents.jsx'

function App() {
  const Peg = {
    src: "src/talents-component/imgsForTalents/peg_img.svg",
    name: 'Peg Legge',
    job: "CEO"
  }

  const Richard = {
    src: "src/talents-component/imgsForTalents/richard_img.svg",
    name: "Richard Guerra",
    job: "CTO",
  }

  const Alexandra = {
    src: "src/talents-component/imgsForTalents/alexandra_img.svg",
    name: "Alexandra Stolz",
    job: "DESIGNER",
  }

  const Janet = {
    src: "src/talents-component/imgsForTalents/janet_img.svg",
    name: "Janet Bray",
    job: "DEVELOPER",
  }

  return (
    <>
      <header className = "header">
        <div className = "header__upper-part">
          <div className = "header__upper-part__left">
            <img src = 'src/imgs/logo.svg'/>
            Start
          </div>
          <div className = "header__upper-part__right">
            <span className="header__upper-part__right__element">Home</span>
            <span className="header__upper-part__right__element">Portfolio</span>
            <span className="header__upper-part__right__element">Services</span>
            <span className="header__upper-part__right__element">Contact</span>
          </div>
        </div>
        <div className="header__middle-part">
          <div className="header__middle-part__info">
              <h4>WELCOME</h4>
              <h1>Lorem ipsum dolor sit amet, consectetur </h1>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit nemo hic quos, ab, dolor aperiam nobis cum est eos error ipsum, voluptate culpa nesciunt delectus iste?</p>
              <button className = "header__middle-part__button">Explore</button>
          </div>
          <picture className = "header__middle-part__image">
              <img src = "src/imgs/humans.svg"/>
            </picture>
        </div>
      </header>
      <main className = "main">
        <div className = "main__learn-more">
          <div className = "main__learn-more__header part-header">
            <h4>PARTNERS</h4>
            <h1>Lorem Ipsum Dolor</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit</p>
          </div>
          <div className="main__learn-more__logo-bar">
            <img src="src/imgs/google-logo.svg" alt="google" />
            <img src="src/imgs/microsoft-logo.svg" alt="microsoft" />
            <img src="src/imgs/airbnb-logo.svg" alt="airbnb" />
            <img src="src/imgs/facebook-logo.svg" alt="facebook" />
            <img src="src/imgs/spotify-logo.svg" alt="spotify" />
          </div>
          <button className = "main__learn-more__button black-button">Learn More</button>
        </div>
        <div className="main__learn-more-part">
          <picture>
            <img src = "src/imgs/group.svg"/>
          </picture>
          <div className = "main__learn-more__info">
              <h1>
                Lorem ipsum dolor sit amet consectetur 
              </h1>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit nemo hic quos, ab, dolor aperiam nobis cum est eos error ipsum, voluptate culpa nesciunt delectus iste?
              </p><br/><br/>
              <button className = "black-button">Learn more</button>
          </div>
        </div>
        <div className="main__learn-more-part">
          <div className = "main__learn-more__info">
              <h1>
                Lorem ipsum dolor sit amet consectetur 
              </h1>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit nemo hic quos, ab, dolor aperiam nobis cum est eos error ipsum, voluptate culpa nesciunt delectus iste?
              </p><br/><br/>
              <button className = "black-button">Learn more</button>
          </div>
          <picture>
            <img src = "src/imgs/human-with-pc.svg"/>
          </picture>
        </div>
        <div className = "main__team">
          <div className = "main__team__header part-header">
            <h4>TEAM</h4>
            <h1>Our Talents</h1>
            <p>Lorem ipsum, dolor sit amet consectetur Suscipit nemo hic quos, ab,</p>
          </div>
          <div className="main__talents">
            <Talent {...Peg}/>
            <Talent {...Richard}/>
            <Talent {...Alexandra}/>
            <Talent {...Janet}/>
          </div>
          <button className = "black-button">View Team</button>
        </div>
      </main>
      <footer>
        
      </footer>
    </>
  )
}

export default App

// 25.09 TODO: Сделать часть header
// 26.09 TODO: Сделать части main__learn-more-part
// 27.09 TODO: Сделать часть main_team
