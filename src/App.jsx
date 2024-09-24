import './desktop-style.css'

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
      </header>
    </>
  )
}

export default App
