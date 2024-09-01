// FancyButton.jsx
import React from 'react';

function FancyButton({ onClick }) {
    return (
        <button
            onClick={onClick}
            className="mt-4 w-full bg-gradient-to-r from-purple-500 to-indigo-600 hover:from-indigo-500 hover:to-purple-600 text-white font-bold py-3 px-6 rounded-lg shadow-lg transform transition-all hover:scale-105 focus:outline-none focus:ring-4 focus:ring-purple-300"
        >
            Submit
        </button>
    );
}

export default FancyButton;
