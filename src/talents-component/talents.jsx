import './talents.css'

export default function Talent(person){
    return(
        <div className = "container">
            <img 
            src= {person.src}/>
            <div className="container__info">
                <div className="container__info__name">{person.name}</div>
                <div className="container__info__job">{person.job}</div>
            </div>
        </div>
    )
}