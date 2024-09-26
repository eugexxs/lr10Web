import './css/fonts-and-vars.css'
import './css/header-desktop-style.css'
import './css/main-desktop-styles.css'

function App() {
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
          <h4>PARTNERS</h4>
        </div>
      </main>
    </>
  )
}

export default App
// TODO: Сделать часть main и отцентрировать main__learn-more