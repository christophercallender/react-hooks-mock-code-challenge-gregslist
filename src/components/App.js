import React, { useEffect, useState } from 'react';
import Header from './Header';
import ListingsContainer from './ListingsContainer';

function App() {
   const [listings, setListings] = useState([]);
   const [search, setSearch] = useState('');

   useEffect(() => {
      fetch('http://localhost:6001/listings')
         .then((resp) => resp.json())
         .then((data) => setListings(data));
   }, []);

   return (
      <div className="app">
         <Header onSearch={setSearch} />
         <ListingsContainer
            listings={listings.filter((listing) =>
               listing.description.toLowerCase().includes(search.toLowerCase())
            )}
            setListings={setListings}
         />
      </div>
   );
}

export default App;
