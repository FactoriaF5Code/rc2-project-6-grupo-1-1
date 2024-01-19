import { DetailsHotel } from "../articles/DetailsHotel";
import { Form } from "../form/Form";
import "./MainSection.css";
import { useState } from "react";

export const MainSection = () => {
  const [selectedHotel, setSelectedHotel] = useState(null);
  return (

    <main>
        <DetailsHotel setSelectedHotel={setSelectedHotel} />
      <Form selectedHotel={selectedHotel} />
    </main>
  );
};
