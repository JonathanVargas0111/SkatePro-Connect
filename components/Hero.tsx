import React from 'react';
import RegistrationForm from './RegistrationForm';

const Hero: React.FC = () => {
    return (
        <section className="text-purple-800">
            <div className="max-w-3xl mx-auto justify-center text-center">
                <h1 className="text-6xl font-bold mt-8">SkatePro Connect</h1>
                <p className="mt-4 text-xl font-semibold">Crea tu parche</p>
                <RegistrationForm />
            </div>
        </section>
    );
}

export default Hero;