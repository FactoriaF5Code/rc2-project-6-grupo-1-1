import Star from "../../../public/Star.svg";
import { useEffect, useState } from "react";
import "./Hotel.css";

export const DetailsHotel = ({ setSelectedHotel }) => {
  const [hotels, setHotels] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    fetch("http://localhost:8080/api/hotels")
      .then((response) => response.json())
      .then((data) => setHotels(data))
      .catch((error) => console.error("Error fetching hotels:", error));
  }, []);

  const totalPages = Math.ceil(hotels.length / 10);

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

  const startIndex = (currentPage - 1) * 10;
  const endIndex = startIndex + 10;
  const currentHotels = hotels.slice(startIndex, endIndex);

  const handleReservaClick = (hotel) => {
    setSelectedHotel(hotel);
  };

  return (
    <div>
      {currentHotels.map((hotel) => (
        <article key={hotel.id} className="detailsHotel">
          <img src={hotel.photoUrl} className="fotoHotel" alt="" />
          <div className="infoHotel">
            <div className="nombreHotel">
              <h1>{hotel.name}</h1>
              <div>
                {[...Array(Math.ceil(Math.random() * 5))].map((_, index) => (
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
            <button onClick={() => handleReservaClick(hotel)}>
              ¡Reserva ahora!
            </button>
          </div>
        </article>
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
};
