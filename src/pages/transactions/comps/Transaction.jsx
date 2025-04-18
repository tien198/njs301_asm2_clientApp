import ExLib from '../../../utilities/ExternalLib'

const getStatusStyle = (status) => {
    switch (status) {
        case "Booked":
            return "bg-red-200 text-red-700";
        case "Checkin":
            return "bg-green-500 text-white";
        case "Checkout":
            return "bg-purple-200 text-purple-700";
        default:
            return "";
    }
}


function Transaction({ tran, index }) {
    const { hotelRef, startDate, endDate, price, payment, status } = tran

    const rNumsStr = tran?.rooms?.reduce((acc, curr) => acc + (acc ? ', ' : '') + ExLib.toString(curr.roomNumbers), '')
    const date = new Date(startDate).toLocaleDateString() + ' - ' + new Date(endDate).toLocaleDateString()
    return (
        <tr key={tran.id} className="text-center border-t border-gray-300">
            <td className="px-4 py-2">{index}</td>
            <td className="px-4 py-2 text-left">{hotelRef?.name}</td>
            <td className="px-4 py-2">{rNumsStr}</td>
            <td className="px-4 py-2">{date}</td>
            <td className="px-4 py-2">{price}</td>
            <td className="px-4 py-2">{payment}</td>
            <td className="px-4 py-2">
                <button className={`px-2 py-1 rounded ${getStatusStyle(status)}`}                                    >
                    {status}
                </button>
            </td>
        </tr>
    );
}

export default Transaction;