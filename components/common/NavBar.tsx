import React from 'react';

const NavBar: React.FC = () => {
    return (
        <header className="p-4">
            <div className="flex items-center justify-between">
                <div className="flex items-center">
                    {/*  <img src="logo.png" alt="Logo" className="h-8 w-8" /> */}
                    <span className="text-black ml-2 text-xl font-bold">SkatePro Connect</span>
                </div>
                {/* <nav className="space-x-4">
                    <a href="#" className="text-black">Inicio</a>
                    <a href="#" className="text-black">Características</a>
                    <a href="#" className="text-black">Contacto</a>
                </nav> */}
            </div>
        </header>
    )

}

export default NavBar