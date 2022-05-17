import React from 'react'
import classes from  './Header.module.css'
import mealsImage from '../../assets/meals.jpg'
import HeaderButton from './HeaderButton'




const Header = () => {

    return(
        <>
        <header className={classes.header}>
            <h1>ReactMeals</h1>
            <HeaderButton />
        </header>
        <div className={classes['main-image']}>
            <img src={mealsImage} alt='Meals'/>
        </div>
        </>
    )
}
 export default Header;