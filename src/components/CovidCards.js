
const CovidCards = ({title, stats, image})=>{
    return (
        <div className="card">
            <div className="card__info">
                <h3 className="card__heading">{title}</h3>
                <span className="card__stat">{stats}</span>
            </div>
            <img className="card__image" src={image} alt="first aid" />
        </div>
    )
}

export default CovidCards