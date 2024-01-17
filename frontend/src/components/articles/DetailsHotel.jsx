import "./Hotel.css";
import { useEffect, useState } from "react";

import Star from "../../../public/star.svg";

const Hotel = ({hotel}) => {

  const randomStars = Math.floor(Math.random() * 6);

  return (
    <article className="detailsHotel">
      <img src={hotel.photoUrl} className="fotoHotel" alt="" />
      <div className="infoHotel">
        <div className="nombreHotel">
          <h1>{hotel.name}</h1>
          <div>
          {[...Array(randomStars)].map((_, index) => (
            <img key={index} src={Star} className="star" alt="Estrella" />
            ))}
          </div>
        </div>
        <p>{hotel.description}</p>
      </div>
      <div className="precioHotel">
        <div>
          <h3>{`${hotel.pricePerNight}€`}</h3>
          <p>/por noche</p>
        </div>
        <button>¡Reserva ahora!</button>
      </div>
    </article>
  )
}

export const DetailsHotel = () => {
  const [hotels, setHotels] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/api/hotels")
      .then((response) => response.json())
      .then((data) => setHotels(data))
      .catch((error) => console.error("Error fetching hotels:", error));
  }, []);

  return (
    <div>
      {hotels.map((hotel) => (
        <Hotel key={hotel.id} hotel={hotel} />
      ))}
    </div>
  );
};