import {BrowserRouter, Routes, Route} from 'react-router-dom';
import NavBar from "../components/navBar/NavBar";
import ItemListContainer from "../components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "../components/ItemDetailContainer/ItemDetailContainer"
function AppRouter(){
    return(
        <BrowserRouter>
        <NavBar/>
            <Routes>
                <Route path="/" element={<ItemListContainer/>}/>
                <Route path="/categoria/:id" element={<ItemListContainer/>}/>
                <Route path="/item/:id" element={<ItemDetailContainer/>}/> 
            </Routes>
        </BrowserRouter>
    )
}
export default AppRouter;