import React, { useReducer } from 'react';
import { NavLink } from 'react-router-dom';

import Routes from 'views/Routes';

const BASE_CLASS = 'sidebar';

const Sidebar = () => {
    const [open, toggle] = useReducer(s => !s, true);

    return (
        <aside className={BASE_CLASS}>
            <input
                checked={open}
                type='checkbox'
                onChange={toggle}
                id={`${BASE_CLASS}-toggle`}
                className={`${BASE_CLASS}-toggle`}
            />
            <label htmlFor={`${BASE_CLASS}-toggle`}>&nbsp;</label>

            <nav className={`${BASE_CLASS}-navigation`}>
                {Routes.map(({ path, navigationName }) => (
                    <NavLink
                        key={path}
                        to={path}
                        onClick={toggle}
                        className={`${BASE_CLASS}-navigation-link`}>
                        {navigationName}
                    </NavLink>
                ))}
            </nav>
        </aside>
    );
};

export default Sidebar;
