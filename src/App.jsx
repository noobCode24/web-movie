import { Outlet } from 'react-router';
import Header from './components/Header';
import Footer from './components/Footer';
import MobileNavigation from './components/MobileNavigation';
import axios from 'axios';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setBannerData, setImageURL } from './store/movieoSlice';
import './App.css';

function App() {
  const dispatch = useDispatch();

  const fetchData = async () => {
    try {
      const [trendingResponse, configResponse] = await Promise.all([
        axios.get('/trending/all/week'),
        axios.get('/configuration'),
      ]);
      dispatch(setBannerData(trendingResponse.data.results));
      dispatch(setImageURL(configResponse.data.images.secure_base_url + 'original'));
    } catch (error) {
      console.log('Error fetching data:', error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <main className="pb-14 lg:pb-0">
      <Header />
      <div className="min-h-[90vh]">
        <Outlet />
      </div>
      <Footer />
      <MobileNavigation />
    </main>
  );
}

export default App;