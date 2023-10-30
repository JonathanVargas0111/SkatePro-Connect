import React from 'react';

const RegistrationForm: React.FC = () => {
    return (
        <form className="mt-8 flex flex-col sm:flex-row p-2 gap-2 ">
            <input type="email" placeholder="Correo electrónico"
                className="w-full p-2 rounded border border-purple-800 
                focus:outline-none focus:ring-2 focus:ring-purple-700 focus:border-transparent
                placeholder-violet-700
                "/>
            <button className="bg-violet-700 text-white px-4 py-2 rounded hover:bg-violet-800 sm:text-sm">Únete a la Lista</button>
        </form>
    );
}
export default RegistrationForm