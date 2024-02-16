import { useState } from 'react';
import { Link } from 'react-router-dom';

const MainMenu = () => {
    const [activeItem, setActiveItem] = useState("Dashboard");

    let classActive = "bg-white py-3 pl-2 rounded-lg text-blue-500 font-bold";

    const handleItemClick = (itemName) => {
        setActiveItem(itemName);
      };

  return (
    <>
        <section>
            <ul>
                <li className='menu-title text-xl text-slate-50 font-bold'>Main Menu</li>
                <ul>
                    <li className={activeItem === "dashboard" ? classActive : ""}>
                        <Link to="/Dashboard" onClick={handleItemClick("Dashboard")}>
                            Dasboard
                        </Link>
                    </li>
                    <li className={activeItem === "cariLoker" ? classActive : ""}>
                        <Link to="/CariLoker" onClick={handleItemClick("cariLoker")}>
                            Cari Loker
                        </Link>
                    </li>
                    <li className={activeItem === "settings" ? classActive : ""}>
                        <Link to="/Settings" onClick={handleItemClick("settings")}>
                            Settings
                        </Link>
                    </li>
                </ul>
            </ul>
        </section>
    </>
  )
}

export default MainMenu