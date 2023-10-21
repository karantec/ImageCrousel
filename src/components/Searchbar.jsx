// PhotoSearch.js
import  { useState, useEffect } from 'react';
import axios from 'axios';
import Modal from 'react-modal';
Modal.setAppElement('#root');


const Searchbar = () => {
  const [query, setQuery] = useState('');
  const [photos, setPhotos] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  useEffect(() => {
    if (query) {
      searchPhotos();
    }
  }, [query]);

  const searchPhotos = async () => {
    try {
      const response = await axios.get(
        `https://api.unsplash.com/search/photos/?query=${query}`,
        {
          headers: {
            Authorization: 'Client-ID O0qM1D498Z1Xs2utEhu6wvtRsRVWE4GzfecUIAf6joU',
          },
        }
      );
      setPhotos(response.data.results);
    } catch (error) {
      console.error(error);
    }
  };
  

  
  const openModal = (photo) => {
    setSelectedPhoto(photo);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };
 
  
  return (
    <div>
    <div className='max-w-md mx-auto mt-5'>
    <div className="relative flex items-center w-full h-12 rounded-lg focus-within:shadow-lg bg-white overflow-hidden">
        <div className="grid place-items-center h-full w-12 text-gray-300">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
       </div>
      <input
        type="text"
        placeholder="Search for photos"
        value={query}
        className="peer h-full w-full outline-none text-sm text-gray-700 pr-2"
        onChange={(e) => setQuery(e.target.value)}
      />
       </div>
</div>
      <div className="flex flex-row flex-wrap">
        {photos.map((photo) => (
            
            <div  className="flex flex-row cursor-pointer"  key={photo.id} >
          <div className="p-5 md:w-1/3" key={photo.id}>
        <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden" >
        
          <img className="lg:h-48 md:h-36 w-full object-cover object-center" src={photo.urls.small} alt="blog" onClick={() => openModal(data)}/>
          <div className="p-6">
           
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">Name:{photo.user.name}</h1>
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">Likes:{photo.likes}</h1>
            <button
         className="bg-blue-200 text-black active:bg-blue-500 
        font-bold px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
        type="button"
        onClick={() => openModal(photo)}
      >
       See Details
      </button>
          </div>
        </div>
        </div>
            <img src={photo.urls.small} alt={photo.alt_description} />
          </div>
        ))}
        {showModal && selectedPhoto &&(
            <div className="fixed inset-0 flex items-center justify-center z-50">
            <div className="bg-white p-6 rounded-lg">
              <button className="float-right text-3xl cursor-pointer" onClick={closeModal}>
                &times;
              </button>
                 
              <img src={selectedPhoto.urls.small} alt={selectedPhoto.alt_description} className="w-full h-auto rounded-lg shadow-lg" />
              <div className="my-4">
                <h3 className="text-2xl font-semibold">User Details</h3>
                <p>Name: {selectedPhoto.user.name}</p>
                <p>Username: {selectedPhoto.user.username}</p>
                {/* Add more user details as needed */}
              </div>
              <div>
                <h3 className="text-2xl font-semibold">Photo Details</h3>
                <p>Likes: {selectedPhoto.likes}</p>
                {/* Add more photo details as needed */}
              </div>
            </div>
          </div>
            
          )}
   
      </div>
    </div>
  );
};

export default Searchbar;
