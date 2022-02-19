import React from 'react';
import {Route, Routes} from "react-router-dom";
import TodosList from "../TodosList/TodosList";
import Home from "../Home/Home";

function Navigator() {
    return (
        <Routes>
            <Route path={'/'} element={<Home/>}/>
            <Route path={'todo'} element={<TodosList/>}/>
        </Routes>
    );
}

export default Navigator;