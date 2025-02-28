import { NavLink } from 'react-router-dom';

function Sidebar() {
    return (
        <div className="wrapper">
            <div className="sidebar">
                <ul>
                    <li>
                        <NavLink 
                            to="/learn" 
                            className={({ isActive }) => isActive ? "active-link" : ""}
                        >
                            Dashboard
                        </NavLink>
                    </li>
                    <li>
                        <NavLink 
                            to="/lessons" 
                            className={({ isActive }) => isActive ? "active-link" : ""}
                        >
                            Lessons
                        </NavLink>
                    </li>
                    <li>
                        <NavLink 
                            to="/goals" 
                            className={({ isActive }) => isActive ? "active-link" : ""}
                        >
                            Goals
                        </NavLink>
                    </li>
                    <li>
                        <NavLink 
                            to="/settings" 
                            className={({ isActive }) => isActive ? "active-link" : ""}
                        >
                            Settings
                        </NavLink>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Sidebar;
