import React, { useState, useEffect } from "react";
import "./Card.css";
import axios from "axios";
import "./Card.css";

function Card() {
  const [tiles, settiles] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:3001/api/tiles");
        settiles(response.data);
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
          {tiles.map((card) => (
            <div key={card.id} className="card">
              {card.title}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Card;
