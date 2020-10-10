import React from 'react';
import { FaFilter, FaAngleDown } from 'react-icons/fa'
import './style.css'

function FilterBar() {
    return (
        <React.Fragment>
            <div className="filterbarContainer">
                <div className="button-group">
                    <input className="searchBar" placeholder="Search Users..." type="text" />
                    <button className="btn"><FaFilter /> Filter <FaAngleDown /></button>
                </div>
            </div>
        </React.Fragment>
    )
}

export default FilterBar;