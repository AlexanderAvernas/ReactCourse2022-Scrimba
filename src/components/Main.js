import mainImg from '../images/airbnb-3399753_1920.jpg'

function Main() {
    return (
        <div>
            <div className="main-container">
                <img src={mainImg} alt="" className="main-logo" />
            </div>

            <div className="main-content">
                <h1 className="main-header">Online Experience</h1>
                <h4 className="main-text">
                    Join unique interactive activities led by one-of-a-kind
                    host- all without leaving the home
                </h4>
            </div>
        </div>
    )
}

export default Main
