import { DetailsHotel } from '../articles/DetailsHotel';
import { Form } from '../form/Form';
import './MainSection.css';

export const MainSection = () => {
  return (
    <main>
        <section className='hotelSection'>
            <DetailsHotel />
        </section>
         <section className='formSection'>
            <Form />
        </section> 
    </main>
  )
}