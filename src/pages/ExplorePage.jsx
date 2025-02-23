// import axios from 'axios';
// import { useEffect, useState } from 'react';
// import { useParams } from 'react-router';
// import Card from '../components/Card';

// const ExplorePage = () => {
//   const params = useParams();
//   const [pageNo, setPageNo] = useState(1);
//   const [data, setData] = useState([]);
//   const [totalPageNo, setTotalPageNo] = useState(0);

//   const fetchData = async () => {
//     try {
//       const response = await axios.get(`/discover/${params.explore}`, {
//         params: { page: pageNo },
//       });
//       setData((prev) => [...prev, ...response.data.results]);
//       setTotalPageNo(response.data.total_pages);
//     } catch (error) {
//       console.log('Error fetching explore data:', error);
//     }
//   };

//   useEffect(() => {
//     setPageNo(1);
//     setData([]);
//     fetchData();
//   }, [params.explore]);

//   useEffect(() => {
//     if (pageNo > 1) fetchData();
//   }, [pageNo]);

//   useEffect(() => {
//     const handleScroll = () => {
//       if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
//         setPageNo((prev) => prev + 1);
//       }
//     };
//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   return (
//     <div className="py-16">
//       <div className="container mx-auto">
//         <h3 className="capitalize text-lg lg:text-xl font-semibold my-3">
//           Popular {params.explore} Show
//         </h3>
//         <div className="grid grid-cols-[repeat(auto-fit,230px)] gap-6 justify-center lg:justify-start">
//           {data.map((exploreData) => (
//             <Card
//               data={exploreData}
//               key={exploreData.id + 'exploreSection'}
//               media_type={params.explore}
//             />
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ExplorePage;