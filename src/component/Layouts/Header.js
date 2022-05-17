import React from 'react'
import classes from  './Header.module.css'
import mealsImage from '../../assets/meals.jpg'
const Header = () => {

    return(
        <>
        <header className={classes.header}>
            <h1>ReactMeals</h1>
            <button className={classes.button}>Your Cart <span>0</span> </button>
        </header>
        <div className={classes['main-image']}>
            <img src={mealsImage} alt='Meals'/>
        </div>
        </>
    )
}
 export default Header;