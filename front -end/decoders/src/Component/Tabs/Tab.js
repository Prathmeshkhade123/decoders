import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Tab.css";

const Tab = () => {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:3001/api/cards"); // Replace with the actual API endpoint
        setCards(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <div className="tab-head">
        <div>Latest Video</div>
        <div>see all</div>
      </div>
      <section>
        <div className="cards-wrapper">
          {cards.map((card, index) => (
            <button key={index} className="card-button">
              {card.title}{" "}
              {/* Assuming the API response contains a 'title' field */}
            </button>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Tab;
