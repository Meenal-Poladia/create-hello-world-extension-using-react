import {MemoryRouter as Router, Routes, Route} from "react-router-dom";
import TravelPage from "./pages/TravelPage/TravelPage";
import Home from "./pages/Home/Home";

const Routing = () => {
    return (
        <>
            <Router>
                <div className="App">
                    <Routes>
                        <Route path="/" element={<Home/>} exact/>
                        <Route path="/travelPage" element={<TravelPage/>}/>
                    </Routes>
                </div>
            </Router>
        </>

    )
}
export default Routing;