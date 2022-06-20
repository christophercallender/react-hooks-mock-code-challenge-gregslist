import React from 'react';
import ListingCard from './ListingCard';

function ListingsContainer({ listings, setListings }) {
   const handleDelete = (id) => {
      fetch(`http://localhost:6001/listings/${id}`, {
         method: 'DELETE',
      })
         .then((resp) => resp.json())
         .then(() => {
            setListings(listings.filter((listing) => listing.id !== id));
         });
   };

   return (
      <main>
         <ul className="cards">
            {listings.map((listing) => {
               return (
                  <ListingCard
                     key={listing.id}
                     listing={listing}
                     handleDelete={handleDelete}
                  />
               );
            })}
         </ul>
      </main>
   );
}

export default ListingsContainer;
