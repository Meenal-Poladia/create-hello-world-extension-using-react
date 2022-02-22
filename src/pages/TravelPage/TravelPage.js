import {Link} from "react-router-dom";

const TravelPage = () => {
    return (
        <div>
            <h2>Travel page here</h2>
            <div>
                <Link to={"/"}>
                    Go back to Home
                </Link>
            </div>
        </div>
    )
}
export default TravelPage;