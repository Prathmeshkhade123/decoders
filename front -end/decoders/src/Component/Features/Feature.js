import React, { useState, useEffect } from "react";
import axios from "axios"; // Assuming you have axios or any other library for making API requests
import "./Feature.css";
function Feature() {
  const [features, setFeatures] = useState([]);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // Define the function to fetch data for features from the API
    const fetchFeatures = async () => {
      try {
        const response = await axios.get("http://localhost:3001/api/features"); // Replace with the actual API endpoint for features
        setFeatures(response.data);
      } catch (error) {
        console.error("Error fetching features data:", error);
      }
    };

    // Define the function to fetch data for users from the API
    const fetchUsers = async () => {
      try {
        const response = await axios.get("http://localhost:3001/api/users"); // Replace with the actual API endpoint for users
        setUsers(response.data);
      } catch (error) {
        console.error("Error fetching users data:", error);
      }
    };

    // Call the fetchData functions when the component mounts
    fetchFeatures();
    fetchUsers();
  }, []); // The empty array [] ensures this effect runs only once when the component mounts

  return (
    <>
      <section>
        <div className="feature-wrapper">
          {features.map((feature, index) => (
            <button key={index} className="feature-button">
              {feature.title}{" "}
              {/* Assuming the API response contains a 'title' field */}
            </button>
          ))}
        </div>
      </section>
      <section className="user-main">
        <div className="users-wrapper">
          {users.map((user, index) => (
            <div key={index} className="user">
              <div className="square"></div>
              <div className="text">
                <b>{user.name}</b>
                <br />
                UseCode:{user.code}{" "}
                {/* Assuming the API response contains 'name' and 'code' fields */}
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

export default Feature;
