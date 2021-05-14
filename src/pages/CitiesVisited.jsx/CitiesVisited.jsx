import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Visited from "./Visited";

export default function CitiesVisited({ setSearch, search, city }) {
  const [photos, setPhotos] = useState();

  useEffect(() => {
    axios
      .get(`https://api.teleport.org/api/urban_areas/slug:${city}/images/`)
      .then((res) => {
        setPhotos(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
        console.log("ya une erreur");
      });
  }, []);

  return (
    <div>
      {photos &&
        photos.photos.map((item, index) => {
          return (
            <p key={index}>
              <Visited
                img={item.image.web}
                photographer={item.attribution.photographer}
                source={item.attribution.source}
              />
            </p>
          );
        })}
    </div>
  );
}

// <div>
// <div className="grid grid-cols-5 h-40 gap-3 rounded-2xl">
//   <div className="group">
//     <Link to={`/city/sydney`}>
//       <p
//         className="bg-gray-800 h-full bg-opacity-20 group-hover:bg-opacity-95"
//         style={{
//           backgroundImage: "url(src/IMAGES/sydney.jpeg)",
//           backgroundPosition: "center",
//           backgroundSize: "cover",
//         }}
//       >
//         Sydney {photos}
//       </p>
//     </Link>
//   </div>
//   <div className="group">
//     <Link to={`/city/london`}>
//       <div className="bg-gray-800 h-full bg-opacity-20 group-hover:bg-opacity-95">
//         <p
//           style={{
//             backgroundImage: "url(src/IMAGES/london.jpeg)",
//             backgroundPosition: "center",
//             backgroundSize: "cover",
//           }}
//         >
//           London
//         </p>
//       </div>
//     </Link>
//   </div>
//   <Link to={`/city/stockholm`}>
//     <p
//       className="bg-gray-800 h-full bg-opacity-20 group-hover:bg-opacity-95"
//       style={{
//         backgroundImage: "url(src/IMAGES/stockholm.jpeg)",
//         backgroundPosition: "center",
//         backgroundSize: "cover",
//       }}
//     >
//       Stockholm
//     </p>
//   </Link>

//   <Link to={`/city/zaragoza`}>
//     <p className="border-gray-800 border-2 text-center">Zaragoza</p>
//   </Link>
//   <Link to={`/city/montreal`}>
//     <p className="border-gray-800 border-2 text-center">Montreal</p>
//   </Link>
// </div>
// </div>
