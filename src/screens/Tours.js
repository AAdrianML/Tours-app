import React from 'react';
import Tour from './Tour';
const Tours = ({tours=[], removeTour}) => {


  const listOfTours = tours.map((tour)=>{
    if (tour.id, tour.name, tour.info, tour.price) {
        return <Tour key={tour.id} {...tour} removeTour={removeTour}/> 
      }
  })

  return <section>
          <div className='title'>
            <h2>Ours tours</h2>
            <div className="underline"></div>
          </div>
          <div>
            {listOfTours}
          </div>
        </section>;
};

export default Tours;
