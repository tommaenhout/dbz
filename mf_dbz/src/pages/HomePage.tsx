import React from 'react';

const HomePage = () => {
    return (
        <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl font-bold text-center mb-8 mt-4">Dragon Ball Z Micro-Frontend</h1>
            
            <div className="bg-white shadow-lg rounded-lg p-6 mb-8">
                <h2 className="text-2xl font-semibold mb-4">Project Overview</h2>
                <p className="mb-4">
                    This application is an exercise for practicing micro-frontend architecture, 
                    particularly focusing on combining Vue.js with React applications. While the app feels 
                    like a single unified experience, it's actually a fusion of different applications 
                    working together seamlessly as one.
                </p>
            </div>

            <div className="bg-white shadow-lg rounded-lg p-6 mb-8">
                <h2 className="text-2xl font-semibold mb-4">Technical Stack</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="border rounded-lg p-4 hover:bg-gray-50 transition duration-300">
                        <h3 className="text-xl font-semibold mb-2">Rspack</h3>
                        <p className="text-gray-600">High-performance JavaScript bundler used for building the application</p>
                    </div>
                    <div className="border rounded-lg p-4 hover:bg-gray-50 transition duration-300">
                        <h3 className="text-xl font-semibold mb-2">React</h3>
                        <p className="text-gray-600">JavaScript library for building user interfaces in host and some micro-frontends</p>
                    </div>
                    <div className="border rounded-lg p-4 hover:bg-gray-50 transition duration-300">
                        <h3 className="text-xl font-semibold mb-2">Vue.js</h3>
                        <p className="text-gray-600">Progressive JavaScript framework used in the cards micro-frontend</p>
                    </div>
                    <div className="border rounded-lg p-4 hover:bg-gray-50 transition duration-300">
                        <h3 className="text-xl font-semibold mb-2">Module Federation</h3>
                        <p className="text-gray-600">Enables sharing of modules across multiple applications</p>
                    </div>
                    <div className="border rounded-lg p-4 hover:bg-gray-50 transition duration-300">
                        <h3 className="text-xl font-semibold mb-2">Tailwind CSS</h3>
                        <p className="text-gray-600">Utility-first CSS framework for styling components</p>
                    </div>
                    <div className="border rounded-lg p-4 hover:bg-gray-50 transition duration-300">
                        <h3 className="text-xl font-semibold mb-2">React Router</h3>
                        <p className="text-gray-600">Standard routing library for React applications</p>
                    </div>
                    <div className="border rounded-lg p-4 hover:bg-gray-50 transition duration-300">
                        <h3 className="text-xl font-semibold mb-2">ReactBits</h3>
                        <p className="text-gray-600">Animation library for implementing UI animations</p>
                    </div>
                    <div className="border rounded-lg p-4 hover:bg-gray-50 transition duration-300">
                        <h3 className="text-xl font-semibold mb-2">Cypress</h3>
                        <p className="text-gray-600">JavaScript end-to-end testing framework</p>
                    </div>
                </div>
            </div>

            <div className="bg-white shadow-lg rounded-lg p-6 mb-8">
                <h2 className="text-2xl font-semibold mb-4">Micro-Frontend Architecture</h2>
                <p className="mb-4">
                    This project demonstrates how multiple frontend applications can be integrated into a single cohesive experience:
                </p>
                <ul className="list-disc pl-6 mb-4 space-y-2">
                    <li><strong>mf_dbz</strong>: Host application that orchestrates and integrates all micro-frontends</li>
                    <li><strong>mf_navbar</strong>: Navigation bar component built with React</li>
                    <li><strong>mf_vue_cards</strong>: Character cards component built with Vue.js</li>
                    <li><strong>mf_card_detail</strong>: Character detail component built with React</li>
                </ul>
                <p>
                    Each of these components is developed and deployed independently, yet they work together 
                    to create a unified user experience, demonstrating the power and flexibility of the 
                    micro-frontend architecture.
                </p>
            </div>
        </div>
    );
};

export default HomePage;