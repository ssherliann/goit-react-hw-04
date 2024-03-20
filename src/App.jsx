import './App.css';
import axios from 'axios';
import { useState } from 'react';
import SearchBar from './components/SearchBar/SearchBar';
import ImageGallery from './components/ImageGallery/ImageGallery';
import LoadMoreBtn from './components/LoadMoreBtn/LoadMoreBtn';
import ErrorMessage from './components/ErrorMessage/ErrorMessage';
import Loader from './components/Loader/Loader'; 

function App() {
  const [photos, setPhotos] = useState([]);
  const [page, setPage] = useState(1);
  const [query, setQuery] = useState('');
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchPhotos = async (searchQuery, pageNum) => {
    try {
      setLoading(true);
      const response = await axios.get(`https://api.unsplash.com/search/photos?page=${pageNum}&query=${searchQuery}`, {
        headers: {
          Authorization: 'Client-ID OdMg3srnHeX4GNTMtXc1Nsznztm6rubkdkSNNR1mI2E'
        }
      });
      return response.data.results.slice(0, 9);
    } catch (error) {
      console.error('Error:', error);
      throw error;
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (searchQuery) => {
    try {
      const newPhotos = await fetchPhotos(searchQuery, 1);
      setPhotos(newPhotos);
      setPage(1);
      setQuery(searchQuery);
      setError(null);
    } catch (error) {
      setError(error);
    }
  };

  const handleLoadMore = async () => {
    try {
      const nextPage = page + 1;
      const newPhotos = await fetchPhotos(query, nextPage);
      setPhotos(prevPhotos => [...prevPhotos, ...newPhotos]);
      setPage(nextPage);
      setError(null);
    } catch (error) {
      setError(error);
    }
  };

  return (
    <>
      <SearchBar onSubmit={handleSubmit} />
      {error ? <ErrorMessage error={error} /> : <ImageGallery photos={photos} />}
      {loading && <Loader />} 
      {photos.length > 0 && !error && <LoadMoreBtn onClick={handleLoadMore} />}
    </>
  );  
}

export default App;
