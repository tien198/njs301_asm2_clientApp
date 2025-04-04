import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBed, faPlane, faCar, faTaxi } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';

function NavbarItems({ data }) {
    const [active, setActive] = useState(0);
    const onActive = (index) => {
        setActive(index);
    }
    return (
        <div className='bg-main-color text-white py-4 px-5 md:px-7'>
            <div className='container mx-auto'>
                <div className='pt-5 flex md:gap-8'>
                    {
                        data.map((item, i) => {
                            const isActive = active === i ? true : false;
                            return <NavbarItem item={item} key={item.type} isActive={isActive} onClick={() => onActive(i)} />
                        })
                    }
                </div>
            </div>
        </div>
    )
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

export default NavbarItems;