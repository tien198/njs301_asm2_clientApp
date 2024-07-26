import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBed, faPlane, faCar, faTaxi } from "@fortawesome/free-solid-svg-icons";
import data from '../../data/navBar.json';


function Navbar() {
    return <div className="bg-main-color text-white py-4 px-5 md:px-7">
        <div className="flex justify-between text-xl md:text-2xl">
            <div>Booking Website</div>
            <div className="flex gap-5">
                <Button label={'Register'} />
                <Button label={'Login'} />
            </div>
        </div>
        <NavbarItems data={data} />
    </div>
}

function Button({ label, ...props }) {
    return <button {...props} className="text-base text-main-color bg-gray-50 px-4 hover:bg-gray-600 hover:text-white">{label}</button>
}

function NavbarItems({ data }) {
    return (
        <div className="pt-5 flex md:gap-8">
            {
                data.map((item) => {
                    return <NavbarItem item={item} key={item.type} />
                })
            }
        </div>)
}

function NavbarItem({ item }) {

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
        <div className={`px-4 py-3 pointer ${item.active ? 'border rounded-3xl' : ''}`}>
            <FontAwesomeIcon icon={fontIcon(item.icon)} className={`text-white mr-3`} />
            {item.type}
        </div>)
}

export default Navbar;