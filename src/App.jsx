
import './App.css';
import Navbar from './components/Navbar';

import PhotoList from './components/PhotoList';
import ImageCard from './components/ImageCard';
import Searchbar from './components/Searchbar';

const App = () => {
 return (
    <div>
   
    <Navbar/>
      
        <PhotoList/>
    <Searchbar/>
    <ImageCard/>
    
    
  
      

      
    </div>
 );
};

export default App;