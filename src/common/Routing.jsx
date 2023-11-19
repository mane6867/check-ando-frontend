import { BrowserRouter, Routes, Route } from "react-router-dom"
import UserWelcome from "../profile/UserWelcome"
import Instructions from "../pages/instructions"
import App from "./App"

export default function Routing() {
    return(
        <>
        <BrowserRouter>
        <Routes>
            <Route path="/welcome" element= {<UserWelcome/>}></Route>
            <Route path= "/instrucciones" element = {<Instructions/>}></Route>
            <Route path= "/" element = {<App/>}></Route>
        </Routes>
        </BrowserRouter>
        </>
    )
}