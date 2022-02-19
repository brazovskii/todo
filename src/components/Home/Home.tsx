import React from 'react';
import './style.scss'
import {NavLink, Outlet} from "react-router-dom";

function Home() {
    return (
        <div className={'home'}>
            <img className={'home__picture'}
                 src={'https://res.cloudinary.com/duzecrl3s/image/upload/v1645290226/Yes_Check_Circle.svg_tzwwz6.png'}
                 alt={'todo'}/>
            <div className={'home__footer'}>
                <span className={'home__description'}>Record all your todos, track their progress, mark and delete completed todos!</span>
                <NavLink to={'todo'}
                         className={"home__btn"}> Watch todo
                </NavLink>
            </div>
        </div>
    );
}

export default Home;