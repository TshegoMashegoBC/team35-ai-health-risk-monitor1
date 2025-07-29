
import React, { useEffect, useState } from "react";
import axios from "axios";

function ProfilePage() {
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    receiveNotifications: false,
    showHealthTips: false,
  });

  const [message, setMessage] = useState("");

  const token = localStorage.getItem("token");

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/user/profile", {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => {
        setUser(res.data);
      })
      .catch((err) => {
        console.error("Failed to fetch profile:", err);
      });
  }, []);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setUser((prevUser) => ({
      ...prevUser,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleUpdate = (e) => {
    e.preventDefault();

    axios
      .put("http://localhost:5000/api/user/profile", user, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then(() => {
        setMessage("Profile updated successfully.");
      })
      .catch(() => {
        setMessage("Failed to update profile.");
      });
  };

  return (
    <div className="max-w-xl mx-auto mt-10 p-6 bg-white rounded shadow">
      <h2 className="text-2xl font-semibold mb-4">My Profile</h2>

      {message && (
        <p className="mb-4 text-sm text-center text-green-600">{message}</p>
      )}

      <form onSubmit={handleUpdate} className="space-y-4">
        <div>
          <label className="block font-medium">Name</label>
          <input
            type="text"
            name="name"
            value={user.name}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded"
          />
        </div>

        <div>
          <label className="block font-medium">Email</label>
          <input
            type="email"
            name="email"
            value={user.email}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded"
          />
        </div>

        <div>
          <label className="block font-medium">Password</label>
          <input
            type="password"
            name="password"
            value={user.password}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded"
          />
        </div>

        <div className="flex items-center space-x-2">
          <input
            type="checkbox"
            name="receiveNotifications"
            checked={user.receiveNotifications}
            onChange={handleChange}
          />
          <label className="text-sm">Receive notifications</label>
        </div>

        <div className="flex items-center space-x-2">
          <input
            type="checkbox"
            name="showHealthTips"
            checked={user.showHealthTips}
            onChange={handleChange}
          />
          <label className="text-sm">Show health tips</label>
        </div>

        <button
          type="submit"
          className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700"
        >
          Update Profile
        </button>
      </form>
    </div>
  );
}

export default ProfilePage;
