import React, { useEffect } from 'react';
import './app.module.css';
import Banner from './components/banner/banner';
import Header from './components/header/header';

export default function App() {


  const onClick = () => {
    fetch('data/info.json')//
      .then(response => response.json())//
      .then(result => console.log(result.resultlist));
  }
  return (
    <div>
      <Header />
      <Banner />
      <h1 onClick={onClick}>ss</h1>
    </div>
  );
}

// https://apis.data.go.kr/3660000/DayCareCenterListService/getDayCareCenterList?serviceKey=JXmTZeXeBMovU40L%2BVaMf7IP5iae26lLxzjPgS2suHAslr%2BWJlAzbht4TCw%2FGGTLuy%2F1KVBL62HsCQDHdBJsqQ%3D%3D&numOfRows=100&pageNo=1&dycrct_nm=%EC%96%B4%EB%A6%B0%EC%9D%B4%EC%A7%91


// JXmTZeXeBMovU40L % 2BVaMf7IP5iae26lLxzjPgS2suHAslr % 2BWJlAzbht4TCw % 2FGGTLuy % 2F1KVBL62HsCQDHdBJsqQ % 3D % 3D
// http://apis.data.go.kr/3660000/DayCareCenterListService/getDayCareCenterList?serviceKey=JXmTZeXeBMovU40L%2BVaMf7IP5iae26lLxzjPgS2suHAslr%2BWJlAzbht4TCw%2FGGTLuy%2F1KVBL62HsCQDHdBJsqQ%3D%3D
// & pageNo=5
//   & numOfRows=5
//     & dycrct_nm=255
//       & dycrct_nm=어린이집
//         & chldsbus_oper_yn=255
//           & oper_yn=255
//             & rdnmadr=255
//               & dycrct_telno=255
//                 & itnadr=255
//                   & ntpld_qy=17
//                     & psncpa_qy=17




//                     http://apis.data.go.kr/3660000/DayCareCenterListService/getDayCareCenterList?serviceKey=JXmTZeXeBMovU40L%2BVaMf7IP5iae26lLxzjPgS2suHAslr%2BWJlAzbht4TCw%2FGGTLuy%2F1KVBL62HsCQDHdBJsqQ%3D%3D&numOfRows=10&pageNo=1&dycrct_nm=한밭어린이집




// const getHtml = async () => {
//   try {
//     return await axios.get("https://apis.data.go.kr/3660000/DayCareCenterListService/getDayCareCenterList?serviceKey=JXmTZeXeBMovU40L%2BVaMf7IP5iae26lLxzjPgS2suHAslr%2BWJlAzbht4TCw%2FGGTLuy%2F1KVBL62HsCQDHdBJsqQ%3D%3D&numOfRows=100&pageNo=1&dycrct_nm=%EC%96%B4%EB%A6%B0%EC%9D%B4%EC%A7%91");
//   } catch (error) {
//     console.error(error);
//   }
// };