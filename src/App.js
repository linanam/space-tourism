import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import {Layout} from "./pages/Layout/Layout";
import {Home} from "./pages/Home/Home";
import {Destinations} from "./pages/Destinations/Destinations";
import {Crew} from "./pages/Crew/Crew";
import {Technology} from "./pages/Technology/Technology";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Layout />}>
                    <Route index element={<Home />}></Route>
                    <Route path="/destinations" element={<Destinations />}></Route>
                    <Route path="/crew" element={<Crew />}></Route>
                    <Route path="/technology" element={<Technology />}></Route>
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
