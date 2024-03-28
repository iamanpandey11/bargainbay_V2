import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function OneLaptop() {
  const { id } = useParams();
  const [laptop, setLaptop] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await fetch("/api/laptop/getOne", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ id: id }),
        });
        const data = await response.json(); // Parse the JSON response
        const posts = data[0].laptop; // Extract the 'posts' array from the data
        console.log("Mobile details:", posts[0]); // Log the 'posts' array to the console
        setLaptop(posts[0]);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching mobile data:", error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);
  return (
    <div className="flex flex-col items-center p-6 border border-gray-300 rounded-md bg-white shadow-md max-w-md mx-auto my-4">
      <img className="w-full mb-4" src={laptop.img_link} alt={laptop.name} />
      <div className="text-left">
        <h2 className="text-xl font-semibold mb-2 border-b-2 border-black uppercase">{laptop.name}</h2>
        <p className="text-lg font-semibold text-gray-800 mb-1">
         <span className="text-base font-medium" > Price: Rs.</span> {laptop["price(in Rs.)"]}
        </p>
        <p className="text-gray-700 mb-1">
           <span className="text-base font-medium" > Display (in inch):</span> {laptop["display(in inch)"]}
        </p>
        <p className="text-gray-700 mb-1"> <span className="text-base font-medium" > Processor:</span> {laptop.processor}</p>
        <p className="text-gray-700 mb-1"> <span className="text-base font-medium" > RAM:</span> {laptop.ram}</p>
        <p className="text-gray-700 mb-1"> <span className="text-base font-medium" > Storage:</span> {laptop.storage}</p>
        <p className="text-gray-700 mb-1"> <span className="text-base font-medium" > OS:</span> {laptop.os}</p>
        <p className="text-lg font-semibold text-gray-800 mt-2">
           <span className="text-base font-medium" > Rating:</span> {laptop.rating}
        </p>
        <p className="text-gray-700 mb-1">
           <span className="text-base font-medium" > No. of Ratings:</span> {laptop.no_of_ratings}
        </p>
        <p className="text-gray-700 mb-1">
           <span className="text-base font-medium" > No. of Reviews:</span> {laptop.no_of_reviews}
        </p>
      </div>
    </div>
  );
}

export default OneLaptop;
