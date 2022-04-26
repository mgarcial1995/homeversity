import "./styles.sass"
const Learning = ({learn, index}) => {
    console.log(learn)
    return (
        <div className="learning">
            <div className="learning-number-label">{index+1}</div>
            <div className="learning-text">{learn} </div>
        </div>
    )
}

export default Learning;