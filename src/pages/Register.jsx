import React, { useState } from 'react';

const Register = () => {
    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [number, setNumber] = useState('');
    const [address, setAddress] = useState('');
    const [age, setAge] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Validate inputs before submitting
        if (!fullName || !email || !number || !address || !age || !password) {
            alert("All fields are required!");
            return;
        }

        const user = { fullName, email, number, address, age, password };

        try {
            const response = await fetch("http://localhost:8000/users", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json"
                },
                body: JSON.stringify(user),
            });

            if (!response.ok) {
                const errorMessage = await response.text();
                throw new Error(`Failed to submit: ${errorMessage}`);
            }

            const data = await response.json();
            console.log("Server Response:", data);

            // Reset form fields
            setFullName("");
            setEmail("");
            setNumber("");
            setAddress("");
            setAge("");
            setPassword("");

            alert("User submitted successfully!");
        } catch (error) {
            console.error("Submission error:", error.message);
            alert(`Error: ${error.message}`);
        }
    };

    return (
        <main className="bg-gray-100 flex items-center min-h-screen flex-col">
            <div className="mt-20 w-[500px]">
                <form onSubmit={handleSubmit} className="shadow-xl p-10 bg-white rounded mt-10">
                    <h2 className="text-center font-bold text-2xl underline text-blue-600 mb-10">
                        Register Account
                    </h2>

                    <div>
                        <label htmlFor="fullName">Fullname:</label>
                        <input
                            className="rounded shadow-xs p-2 bg-gray-100 w-full mb-2"
                            value={fullName}
                            onChange={(e) => setFullName(e.target.value)}
                            type="text"
                            placeholder="Full name..."
                            id="fullName"
                        />
                    </div>
                    <div>
                        <label htmlFor="email">Email:</label>
                        <input
                            className="rounded shadow-xs p-2 bg-gray-100 w-full mb-2"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            type="email"
                            placeholder="Email..."
                            id="email"
                        />
                    </div>
                    <div>
                        <label htmlFor="number">Phone number:</label>
                        <input
                            className="rounded shadow-xs p-2 bg-gray-100 w-full mb-2"
                            value={number}
                            onChange={(e) => setNumber(e.target.value)}
                            type="tel"
                            placeholder="Phone number..."
                            id="number"
                        />
                    </div>
                    <div>
                        <label htmlFor="address">Address:</label>
                        <input
                            className="rounded shadow-xs p-2 bg-gray-100 w-full mb-2"
                            value={address}
                            onChange={(e) => setAddress(e.target.value)}
                            type="text"
                            placeholder="Address..."
                            id="address"
                        />
                    </div>
                    <div>
                        <label htmlFor="age">Age:</label>
                        <input
                            className="rounded shadow-xs p-2 bg-gray-100 w-full mb-2"
                            value={age}
                            onChange={(e) => setAge(e.target.value)}
                            type="number"
                            placeholder="Age..."
                            id="age"
                        />
                    </div>
                    <div>
                        <label htmlFor="password">Password:</label>
                        <input
                            className="rounded shadow-xs p-2 bg-gray-100 w-full mb-2"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            type="password"
                            placeholder="Password..."
                            id="password"
                        />
                    </div>

                    <button
                        className="w-[200px] py-2 relative left-[100px] rounded bg-blue-500 hover:bg-blue-800 mt-5 text-white"
                        type="submit"
                    >
                        Create Account
                    </button>
                </form>
            </div>
        </main>
    );
};

export default Register;
