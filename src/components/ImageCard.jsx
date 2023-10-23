import {useState,useEffect} from "react"
   
const ImageCard = () => {
    const [datas, setData] = useState([]);
    const [showModal, setShowModal] = useState(false);
    
  const [selectedPhoto, setSelectedPhoto] = useState(null);
    const url = "https://api.unsplash.com/photos?client_id=O0qM1D498Z1Xs2utEhu6wvtRsRVWE4GzfecUIAf6joU";
   

  const fetchInfo = () => {
    return fetch(url)
      .then((res) => res.json())
      .then((d) => setData(d));
  }
  useEffect(() => {
    fetchInfo();
  }, []);

  const openModal = (photo) => {
    setSelectedPhoto(photo);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };
  return (
    <div>
    <section className="text-gray-600 body-font">
  <div className="flex flex-row flex-wrap ">
  {datas.map(data => (
      <div className="p-5 md:w-1/3" key={data.index}>
        <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden"  >
        
          <img className="lg:h-48 md:h-36 w-full object-cover object-center cursor-pointer" src={data.urls.small} alt="blog"
           onClick={() => openModal(data)}
          />
          <div className="p-6">
           
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">Name:{data.user.name}</h1>
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">Likes:{data.likes}</h1>
            <button
        className="bg-blue-200 text-black active:bg-blue-500 
      font-bold px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
        type="button"
        onClick={() => openModal(data)}
      >
       See Details
      </button>
          </div>
        </div>
        </div>
           ))}
           </div>

           
           {showModal && selectedPhoto &&(
            <div className="fixed inset-0 flex items-center justify-center z-50">
            <div className="bg-white p-6 rounded-lg">
              <button className="float-right text-3xl cursor-pointer" onClick={closeModal}>
                &times;
              </button>
                 
              <img src={selectedPhoto.urls.small} alt={selectedPhoto.alt_description} className="h-auto max-w-xs rounded-lg shadow-lg" />
              <div className="my-4">
                <h3 className="text-2xl font-semibold">User Details</h3>
                <p>Name: {selectedPhoto.user.name}</p>
                <p>Username: {selectedPhoto.user.username}</p>
                {/* Add more user details as needed */}
              </div>
              <div>
                <h3 className="text-2xl font-semibold">Photo Details</h3>
                <p>Likes: {selectedPhoto.likes}</p>
                <p>Instagram:{selectedPhoto.user.instagram_username}</p>
                <p>total_collections{selectedPhoto.user.total_collections}</p>
                {/* Add more photo details as needed */}
              </div>
            </div>
          </div>
            
          )}
   
</section>
    </div>
  )
}

export default ImageCard
