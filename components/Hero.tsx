import React from 'react';
import RegistrationForm from './RegistrationForm';

import { Fira_Sans } from 'next/font/google';
const firasans = Fira_Sans({ weight: ['400', '700'], subsets: ['latin'] });

import { Nosifer } from 'next/font/google';
const nosifer = Nosifer({ weight: ['400'], subsets: ['latin'] })

import { Lilita_One } from 'next/font/google';
const lilita = Lilita_One({ weight: ['400'], subsets: ['latin'] });


const Hero: React.FC = () => {
    return (
        <section className="text-purple-800">
            <div className="max-w-3xl mx-auto justify-center text-center">
                <h1 className={`text-6xl font-bold mt-8 ${lilita.className}`}>SkatePro Connect</h1>
                <p className="mt-4 text-xl font-semibold">Crea tu parche</p>
                <RegistrationForm />
            </div>
        </section>
    );
}

export default Hero;