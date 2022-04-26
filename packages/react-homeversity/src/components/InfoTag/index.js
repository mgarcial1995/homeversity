import "./styles.sass"
const InfoTag = ({tag}) => {
    const isCategory = (tag) => {
        return /^\d/.test(tag)
    }
    return (
        <div className="infotag">
            <div className="infotag-left"></div>
            <div className="infotag-right">
                {!isCategory (tag) ? (<p className="infotag-right-tittle">Categoría</p>)
                :<p  className="infotag-right-tittle">Duración</p>}
                <p className="infotag-right-text">{tag}</p>
            </div>
        </div>
    )
}

export default InfoTag;