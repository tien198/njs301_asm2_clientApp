/* eslint-disable react/prop-types */

function Fallback({ message }) {
    return (
        <div>
            {message || 'Loading...'}
        </div>
    );
}

export default Fallback;