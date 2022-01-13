import React from 'react';
import Tour from './Tour';
const Tours = ({tours=[]}) => {


  const listOfTours = tours.map((tour)=>{
    //{tour} it gives me the possibility to access to all the tour data array
      if (tour.id, tour.name, tour.info, tour.price) {
        return <Tour key={tour.id} {...tour}/> 
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
