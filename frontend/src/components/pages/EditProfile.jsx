import { useContext, useEffect, useState } from "react";
import { ThemeContext } from "../../contexts/Theme";
import toast, { Toaster } from 'react-hot-toast';
import Footer from "../home/Footer";
import Navbar from "../home/NavBar";
import axios from "axios";

function EditProfile() {
    const { darkMode } = useContext(ThemeContext);
    const [image, setImage] = useState("");
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");

    useEffect(() => {
        axios.get("https://randomuser.me/api/").then((response) => {
            setImage(response.data.results[0].picture.large);
            setName(
                response.data.results[0].name.first +
                " " +
                response.data.results[0].name.last
            );
            setEmail(response.data.results[0].email);
        });
    }, []);

    const handleImageChange = (e) => {
        setImage(e.target.value);
    };

    const handleNameChange = (e) => {
        setName(e.target.value);
    };

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const data = {
            image,
            name,
            email,
        };
        axios
            .post("https://codehelp-api.onrender.com/api/edit-profile", data)
            .then((response) => {
                toast.success[response.data.success ? "success" : "error"](
                    response.data.message
                );
            });
    };

    return (
        <>
            <Navbar />
            <div
                className={`${darkMode ? "bg-gray-800" : "bg-gray-200"
                    } flex flex-col items-center justify-center h-screen`}
            >
                <div
                    className={`${darkMode ? "bg-gray-900 text-white" : "bg-white text-black"
                        } rounded-sm shadow-lg p-24 md:p-16`}
                >
                    <h1 className="text-4xl font-bold">Edit Profile</h1>
                    <form onSubmit={handleSubmit}>
                        <div className="flex flex-col mt-8">
                            <label className="text-lg font-bold" htmlFor="image">
                                Image
                            </label>
                            <input
                                type="text"
                                className="border-2 p-2 rounded-lg mt-2"
                                value={image}
                                onChange={handleImageChange}
                            />
                        </div>
                        <div className="flex flex-col mt-8">
                            <label className="text-lg font-bold" htmlFor="name">
                                Full Name
                            </label>
                            <input
                                type="text"
                                className="border-2 p-2 rounded-lg mt-2"
                                value={name}
                                onChange={handleNameChange}
                            />
                        </div>
                        <div className="flex flex-col mt-8">
                            <label className="text-lg font-bold" htmlFor="email">
                                Email
                            </label>
                            <input
                                type="email"
                                className="border-2 p-2 rounded-lg mt-2"
                                value={email}
                                onChange={handleEmailChange}
                            />
                        </div>
                        <button
                            type="submit"
                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-8 cursor-pointer"
                            onClick={() => window.history.back()}
                        >
                        <Toaster/>
                            Edit Profile
                        </button>
                    </form>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default EditProfile;
