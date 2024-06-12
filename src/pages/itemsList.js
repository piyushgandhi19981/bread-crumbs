import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const ItemList = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("https://dummyapi.online/api/pokemon");
      const data = await response.json();
      setData(data);
      setLoading(false);
    };
    fetchData();
  }, []);

  console.log(data);

  if (loading) return <div>...loading</div>;

  return (
    <div>
      <h3>All Pokemon</h3>
      <div className="pokemon-container">
        {data.map((pokeDetail) => {
          const { image_url, pokemon, id } = pokeDetail;
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
    </div>
  );
};

export default ItemList;
