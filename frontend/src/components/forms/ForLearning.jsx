// eslint-disable-next-line no-unused-vars
import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../home/NavBar";
import Footer from "../home/Footer";
import NavbarToggler from "../Demo/NavbarToggle";
import { ThemeContext } from "../../contexts/Theme";

function ForLearning() {
    const [dataFrom, setDataFrom] = useState({
        firstName: "", lastName: "", email: "", country: "",
        streetAddress: "", city: "", state: "", zipCode: "",
        gender: "", age: "", emailNotifications: "", pushNotifications: "",
        loading: false
    });
  const{darkMode} = useContext(ThemeContext);

    const handleChange = (event) => {
        const { name, value, type, checked } = event.target;
        setDataFrom((prevState) => ({
            ...prevState,
            [name]: type === "checkbox" || type === "radio" ? checked : value
        }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        setDataFrom((prevState) => ({ ...prevState, loading: true }));
        console.log(dataFrom);
        setTimeout(() => {
            setDataFrom((prevState) => ({ ...prevState, loading: false }));
        }, 2000);
    };

    return (
        <>
            <Navbar />

        {/* <div className="container mx-auto px-4 py-8 md:px-6 lg:px-8"> */}
        <div className={`${darkMode ? 'bg-gray-800 text-white' : 'bg-gray-200 text-black'}container mx-auto px-4 py-8 md:px-6 lg:px-8`}>
            <form onSubmit={handleSubmit} className={`${darkMode ? 'bg-gray-800 text-white' : 'bg-white text-black'} rounded-lg shadow-lg p-8 md:p-12 lg:p-16`}>
                <h2 className="lg:text-3xl sm:text-2xl text-center font-bold mb-4">
                    FOR LEARNING FORM
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    <div>
                        <label
                            htmlFor="firstName"
                            className="block text-sm font-medium text-gray-700"
                        >
                            First Name
                        </label>
                        <input
                            type="text"
                            name="firstName"
                            className="mt-1 block w-full py-2 px-4 shadow-sm sm:text-sm border-gray-300 rounded-md"
                            placeholder="Enter your first name"
                            onChange={handleChange}
                            value={dataFrom.firstName}
                            required
                        />
                    </div>
                    <div>
                        <label
                            htmlFor="lastName"
                            className="block text-sm font-medium text-gray-700"
                        >
                            Last Name
                        </label>
                        <input
                            type="text"
                            name="lastName"
                            className="mt-1 block w-full py-2 px-4 shadow-sm sm:text-sm border-gray-300 rounded-md"
                            placeholder="Enter your last name"
                            onChange={handleChange}
                            value={dataFrom.lastName}
                            required
                        />
                    </div>
                    <div>
                        <label
                            htmlFor="email"
                            className="block text-sm font-medium text-gray-700"
                        >
                            Email Address
                        </label>
                        <input
                            type="email"
                            name="email"
                            className="mt-1 block w-full py-2 px-4 shadow-sm sm:text-sm border-gray-300 rounded-md"
                            placeholder="Enter your email"
                            onChange={handleChange}
                            value={dataFrom.email}
                            required
                        />
                    </div>
                    <div>
                        <label
                            htmlFor="country"
                            className="block text-sm font-medium text-gray-700"
                        >
                            Country
                        </label>
                        <select
                            id="country"
                            name="country"
                            className="mt-1 block w-full py-2 px-4 shadow-sm sm:text-sm border-gray-300 rounded-md"
                            onChange={handleChange}
                            value={dataFrom.country}
                            required
                        >

                            <option value="">Select</option>
                            <option value="India">India</option>
                            <option value="America">America</option>
                            <option value="China">China</option>
                        </select>
                    </div>
                    <div>
                        <label
                            htmlFor="streetAddress"
                            className="block text-sm font-medium text-gray-700"
                        >
                            Street Address
                        </label>
                        <input
                            type="text"
                            id="streetAddress"
                            name="streetAddress"
                            className="mt-1 block w-full py-2 px-4 shadow-sm sm:text-sm border-gray-300 rounded-md"
                            placeholder="Enter your street address"
                            onChange={handleChange}
                            value={dataFrom.streetAddress}
                            required
                        />
                    </div>
                    <div>
                        <label
                            htmlFor="city"
                            className="block text-sm font-medium text-gray-700"
                        >
                            City
                        </label>
                        <input
                            type="text"
                            id="city"
                            name="city"
                            className="mt-1 block w-full py-2 px-4 shadow-sm sm:text-sm border-gray-300 rounded-md"
                            placeholder="Enter your city"
                            onChange={handleChange}
                            value={dataFrom.city}
                            required
                        />
                    </div>
                    <div>
                        <label
                            htmlFor="state"
                            className="block text-sm font-medium text-gray-700"
                        >
                            State
                        </label>
                        <input
                            type="text"
                            id="state"
                            name="state"
                            className="mt-1 block w-full py-2 px-4 shadow-sm sm:text-sm border-gray-300 rounded-md"
                            placeholder="Enter your state"
                            onChange={handleChange}
                            value={dataFrom.state}
                            required
                        />
                    </div>
                    <div>
                        <label
                            htmlFor="zipCode"
                            className="block text-sm font-medium text-gray-700"
                        >
                            Zip/Postal Code
                        </label>
                        <input
                            type="text"
                            id="zipCode"
                            name="zipCode"
                            className="mt-1 block w-full py-2 px-4 shadow-sm sm:text-sm border-gray-300 rounded-md"
                            placeholder="Enter your zip code"
                            onChange={handleChange}
                            value={dataFrom.zipCode}
                            required
                        />
                    </div>

                    <div>
                        <label
                            htmlFor="gender"
                            className="block text-sm font-medium text-gray-700"
                        >
                            Gender
                        </label>
                        <select
                            id="gender"
                            name="gender"
                            className="mt-1 block w-full py-2 px-4 shadow-sm sm:text-sm border-gray-300 rounded-md"
                            onChange={handleChange}
                            value={dataFrom.gender}
                            required
                        >
                            <option value="">Select</option>
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                            <option value="other">Other</option>
                        </select>
                    </div>
                    <div>
                        <label
                            htmlFor="age"
                            className="block text-sm font-medium text-gray-700"
                        >
                            Age
                        </label>
                        <input
                            type="number"
                            id="age"
                            name="age"
                            className="mt-1 block w-full py-2 px-4 shadow-sm sm:text-sm border-gray-300 rounded-md"
                            placeholder="Enter your age"
                            onChange={handleChange}
                            value={dataFrom.age}
                            required
                        />
                    </div>
                    <div>
                        <label
                            htmlFor="emailNotifications"
                            className="block text-sm font-medium text-gray-700"
                        >
                            By Email
                        </label>
                        <div className="mt-1 flex items-center">
                            <input
                                type="checkbox"
                                id="comments"
                                name="emailNotifications"
                                className="mr-2"
                                onChange={handleChange}
                                value={dataFrom.emailNotifications}

                            />
                            <label htmlFor="comments" className="text-sm">
                                Comments
                                <small className="block">
                                    Get notify someone posts a comments on a posting
                                </small>
                            </label>
                        </div>
                        <div className="mt-1 flex items-center">
                            <input
                                type="checkbox"
                                id="candidates"
                                name="emailNotifications"
                                className="mr-2"
                                onChange={handleChange}
                                value={dataFrom.emailNotifications}

                            />
                            <label htmlFor="candidates" className="text-sm">
                                Candidates
                                <small className="block">
                                    Get notify someone posts a comments on a posting
                                </small>
                            </label>
                        </div>
                        <div className="mt-1 flex items-center">
                            <input
                                type="checkbox"
                                id="offers"
                                name="emailNotifications"
                                className="mr-2"
                                onChange={handleChange}
                                value={dataFrom.emailNotifications}

                            />
                            <label htmlFor="offers" className="text-sm">
                                Offers
                                <small className="block">
                                    Get notify someone posts a comments on a posting
                                </small>
                            </label>
                        </div>
                    </div>

                    <div>
                        <label
                            htmlFor="pushNotifications"
                            className="block text-sm font-medium text-gray-700"
                        >
                            Push Notifications
                        </label>
                        <div className="mt-1 flex items-center">
                            <input
                                type="radio"
                                id="pushNotifications-1"
                                name="pushNotifications"
                                className="mr-2"
                                onChange={handleChange}
                                value={dataFrom.pushNotifications}
                            />
                            <label htmlFor="pushNotifications-1" className="text-sm">
                                Everything
                            </label>
                        </div>
                        <div className="mt-1 flex items-center">
                            <input
                                type="radio"
                                id="pushNotifications-2"
                                name="pushNotifications"
                                className="mr-2"
                                onChange={handleChange}
                                value={dataFrom.pushNotifications}
                            />
                            <label htmlFor="pushNotifications-2" className="text-sm">
                                Same as Email
                            </label>
                        </div>
                        <div className="mt-1 flex items-center">
                            <input
                                type="radio"
                                id="pushNotifications-3"
                                name="pushNotifications"
                                className="mr-2"
                                onChange={handleChange}
                                value={dataFrom.pushNotifications}
                            />
                            <label htmlFor="pushNotifications-3" className="text-sm">
                                No push Notifications
                            </label>
                        </div>
                    </div>
                </div>
           
                <div className="flex items-center justify-center mt-8">
                    <Link to={"/login"} className="mr-4">
                        Go Back
                    </Link>
                    <button
                        type="submit"
                        className="w-[50%] md:w-1/2 sm:w-full bg-blue-500 hover:bg-blue-700 text-white
                         cursor-pointer font-bold py-2 px-4 rounded"
                        disabled={dataFrom.loading}
                    >
                        {dataFrom.loading ? "Loading..." : "Submit"}
                    </button>
                </div>

            </form>
            <NavbarToggler />
        </div>
        <Footer />

        </>
    );
}

export default ForLearning;
