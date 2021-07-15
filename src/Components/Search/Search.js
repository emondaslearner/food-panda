import React from 'react';
import './Search.css';

const Search = () => {
    return (
        <div style={{background:'url(../image/bannerbackground.png)',backgroundSize:'cover'}} class="bg-search">
            <h1>Best food waiting for your belly</h1>
            <form className="search" action="">
                <input placeholder="Search food items" type="text"/>
                <input type="submit" value="Search"/>
            </form>
        </div>
    );
};

export default Search;