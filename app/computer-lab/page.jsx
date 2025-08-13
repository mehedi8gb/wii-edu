// pages/computer-lab.js
import Image from 'next/image';

export default function ComputerLabPage() {
    return (
        <div className="bg-gradient-to-br from-blue-50 to-blue-100 min-h-screen py-12">
            <div className="container mx-auto px-4">
                {/* Header */}
                <header className="text-center mb-12">
                    <h1 className="text-4xl font-extrabold text-blue-700 tracking-tight mb-4">
                        Computer Lab Courses
                    </h1>
                    <p className="text-lg text-gray-600">
                        Explore our courses designed to enhance your digital skills.
                    </p>
                </header>

                {/* Courses Section */}
                <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Microsoft Office Course */}
                    <div className="bg-white rounded-xl shadow-lg overflow-hidden transform transition-transform hover:scale-105">
                        <div className="relative h-56">
                            <Image
                                src="/microsoft-office.jpg" // Replace with your image path
                                alt="Microsoft Office Course"
                                layout="fill"
                                objectFit="cover"
                            />
                            <div className="absolute inset-0 bg-black opacity-20"></div> {/* Dark overlay */}
                        </div>
                        <div className="p-6">
                            <h2 className="text-2xl font-semibold text-blue-600 mb-2">
                                Microsoft Office Mastery
                            </h2>
                            <p className="text-gray-700 mb-4">
                                Master essential office tools like Word, Excel, and PowerPoint.
                                Boost your productivity and create professional documents.
                            </p>
                            <a
                                href="#"
                                className="inline-block bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full transition-colors duration-300"
                            >
                                Learn More
                            </a>
                        </div>
                    </div>

                    {/* Web Design and Development Course */}
                    <div className="bg-white rounded-xl shadow-lg overflow-hidden transform transition-transform hover:scale-105">
                        <div className="relative h-56">
                            <Image
                                src="/web-development.jpg" // Replace with your image path
                                alt="Web Design and Development Course"
                                layout="fill"
                                objectFit="cover"
                            />
                            <div className="absolute inset-0 bg-black opacity-20"></div> {/* Dark overlay */}
                        </div>
                        <div className="p-6">
                            <h2 className="text-2xl font-semibold text-blue-600 mb-2">
                                Web Design & Development
                            </h2>
                            <p className="text-gray-700 mb-4">
                                Dive into the world of web development. Learn HTML, CSS,
                                JavaScript, and modern frameworks to build stunning websites.
                            </p>
                            <a
                                href="#"
                                className="inline-block bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full transition-colors duration-300"
                            >
                                Learn More
                            </a>
                        </div>
                    </div>
                </section>

                {/* Footer */}
                <footer className="text-center mt-12">
                    <p className="text-gray-500">
                        © 2024 Computer Lab. All rights reserved.
                    </p>
                </footer>
            </div>
        </div>
    );
}