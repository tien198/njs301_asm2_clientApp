import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBed, faPlane, faCar, faTaxi } from "@fortawesome/free-solid-svg-icons";
import Button from './Button'
import data from '../../data/navBar.json';
import { useState } from "react";


function Navbar() {
    const btnClasses = "text-base text-main-color bg-gray-50 px-4 hover:bg-gray-600 hover:text-white";

    return (
        <div className="bg-main-color text-white py-4 px-5 md:px-7">
            <div className="container mx-auto">

                <div className="flex justify-between text-xl md:text-2xl">
                    <div>Booking Website</div>
                    <div className="flex gap-5">
                        <Button label={'Register'} className={btnClasses} />
                        <Button label={'Login'} className={btnClasses} />
                    </div>
                </div>
                <NavbarItems data={data} />
            </div>
        </div>
    );
}

function NavbarItems({ data }) {
    const [active, setActive] = useState(0);
    const onActive = (index) => {
        setActive(index);
    }
    return (
        <div className="pt-5 flex md:gap-8">
            {
                data.map((item, i) => {
                    const isActive = active === i ? true : false;
                    return <NavbarItem item={item} key={item.type} isActive={isActive} onClick={e => onActive(i)} />
                })
            }
        </div>)
}

function NavbarItem({ item, isActive, ...props }) {

    const fontIcon = icon => {
        if (icon === 'fa-bed')
            return faBed;
        else if (icon === 'fa-plane')
            return faPlane;
        else if (icon === 'fa-car')
            return faCar;
        else
            return faTaxi;
    }

    return (
        <div {...props} className={`px-4 py-3 pointer ${isActive ? 'border rounded-3xl' : ''}`}>
            <FontAwesomeIcon icon={fontIcon(item.icon)} className={`text-white mr-3`} />
            <span>{item.type}</span>
        </div>)
}

export default Navbar;