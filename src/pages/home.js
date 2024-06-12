import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Home = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("https://dummyapi.online/api/pokemon");
      const data = await response.json();
      setData(data.slice(0, 6));
    };
    fetchData();
  }, []);

  return (
    <div>
      <h3>Trending Pokemon</h3>
      <div className="pokemon-container">
        {data.map((movie) => {
          const { image_url, pokemon, id } = movie;
          return (
            <div className="pokemon" key={id}>
              <Link to={`/items-list/${id}`}>
                <img src={image_url} alt={pokemon} />
                <h3>{pokemon}</h3>
              </Link>
            </div>
          );
        })}
      </div>
      <div
        style={{ display: "flex", justifyContent: "center", marginTop: "10px" }}
      >
        <Link to={`/items-list`}>
          <button
            style={{
              color: "white",
              background: "red",
              border: "1px solid pink",
            }}
          >
            Show All Pokemons
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
