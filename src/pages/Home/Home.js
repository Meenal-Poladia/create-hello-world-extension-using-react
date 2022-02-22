import Checkbox from "../../UI/Checkbox/Checkbox";
import {Link} from "react-router-dom";

const Home = () => {
    return (
        <>
            <h3>Hello World</h3>
            <Checkbox type="checkbox" name="changeText" labelText="Check box"/>
            <div>
                <Link to={"/travelPage"}>
                    Click here for Travel Page
                </Link>
            </div>
        </>
    )
}
export default Home;