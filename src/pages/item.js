import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Item = () => {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`https://dummyapi.online/api/pokemon/${id}`);
      const data = await response.json();
      setData(data);
      setLoading(false);
    };
    fetchData();
  }, []);

  if (loading) return <div>...loading</div>;

  return (
    <div className="pokeDetail-container">
      <img
        style={{ height: "600px" }}
        src={data?.image_url}
        alt={data?.pokemon}
      />
      <div>{data.pokemon}</div>
      <div>{data.type}</div>
      <div className="evolution">
        {data.evolutions?.map((evolution) => (
          <div className="evolution-item">{evolution}</div>
        ))}
      </div>
    </div>
  );
};

export default Item;
