import "./styles.sass"

const PurchasedCourse = (props) => {
    const {name, photo} = props.purchasedCourse
    return (
        <div className="purchased-course">
            <p className="purchased-course-name">{name}</p>
            <div className="purchased-course-separator"></div>
            <img className="purchased-course-photo" src={photo}></img>
        </div>
    )
}

export default PurchasedCourse