import "./Hotel.css";
import { useEffect, useState } from "react";

import Star from "../../../public/star.svg";

const Hotel = ({ hotel }) => {
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
  );
};

export const DetailsHotel = () => {
  const [hotels, setHotels] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const hotelsPerPage = 2;

  useEffect(() => {
    fetch("http://localhost:8080/api/hotels")
      .then((response) => response.json())
      .then((data) => setHotels(data))
      .catch((error) => console.error("Error fetching hotels:", error));
  }, []);

  const totalPages = Math.ceil(hotels.length / hotelsPerPage);

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const startIndex = (currentPage - 1) * hotelsPerPage;
  const endIndex = startIndex + hotelsPerPage;
  const currentHotels = hotels.slice(startIndex, endIndex);

  return (
    <div>
      {currentHotels.map((hotel) => (
        <Hotel key={hotel.id} hotel={hotel} />
      ))}

      <div className="pagination">
        <button onClick={handlePrevPage}>&lt;</button>
        {Array.from({ length: totalPages }, (_, index) => (
          <button key={index + 1} onClick={() => handlePageChange(index + 1)}>
            {index + 1}
          </button>
        ))}
        <button onClick={handleNextPage}>&gt;</button>
      </div>
    </div>
  );
};/*  */