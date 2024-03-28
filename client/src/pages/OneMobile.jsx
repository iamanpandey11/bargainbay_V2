import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

function OneMobile() {
  const { id } = useParams();
  const [mobile, setMobile] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/api/mobile/getOne", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ id: id }),
        });
        const data = await response.json(); // Parse the JSON response
        const posts = data[0].posts; // Extract the 'posts' array from the data
        console.log("Mobile details:", posts[0]); // Log the 'posts' array to the console
        setMobile(posts[0]);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching mobile data:", error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);
  return (
    <div className="max-w-xl mx-auto bg-white shadow-md rounded-md p-4">
      <h2 className="text-lg font-bold mb-4">Mobile Details</h2>
      <div className="grid grid-cols-2 gap-4">
        <div className="flex justify-between bg-gray-100 p-2 rounded">
          <span className="text-base font-medium" >Brand Name:</span>
          <span className="uppercase">{mobile.brand_name}</span>
        </div>
        <div className="flex justify-between bg-gray-100 p-2 rounded">
          <span className="text-base font-medium" >Model:</span>
          <span>{mobile.model}</span>
        </div>
        <div className="flex justify-between bg-gray-100 p-2 rounded">
          <span className="text-base font-medium" >Price:</span>
          <span>{mobile.price}</span>
        </div>
        <div className="flex justify-between bg-gray-100 p-2 rounded">
          <span className="text-base font-medium" >Average Rating:</span>
          <span>{mobile.avg_rating}</span>
        </div>
        <div className="flex justify-between bg-gray-100 p-2 rounded">
          <span className="text-base font-medium" >5G:</span>
          <span>{mobile.FiveG_or_not ? "Yes" : "No"}</span>
        </div>
        <div className="flex justify-between bg-gray-100 p-2 rounded">
          <span className="text-base font-medium" >Battery Capacity:</span>
          <span>{mobile.battery_capacity}</span>
        </div>
        <div className="flex justify-between bg-gray-100 p-2 rounded">
          <span className="text-base font-medium" >Extended Memory Available:</span>
          <span>{mobile.extended_memory_available ? "Yes" : "No"}</span>
        </div>
        
        <div className="flex justify-between bg-gray-100 p-2 rounded">
          <span className="text-base font-medium" >Fast Charging Available:</span>
          <span>{mobile.fast_charging_available ? "Yes" : "No"}</span>
        </div>
        <div className="flex justify-between bg-gray-100 p-2 rounded">
          <span className="text-base font-medium" >Internal Memory:</span>
          <span>{mobile.internal_memory}</span>
        </div>
        <div className="flex justify-between bg-gray-100 p-2 rounded">
          <span className="text-base font-medium" >Number of Cores:</span>
          <span>{mobile.num_cores}</span>
        </div>
        <div className="flex justify-between bg-gray-100 p-2 rounded">
          <span className="text-base font-medium">Number of Rear Cameras:</span>
          <span>{mobile.num_rear_cameras}</span>
        </div>
        <div className="flex justify-between bg-gray-100 p-2 rounded">
          <span className="text-base font-medium" >OS:</span>
          <span>{mobile.os}</span>
        </div>
        <div className="flex justify-between bg-gray-100 p-2 rounded">
          <span className="text-base font-medium" >Primary Camera (Front):</span>
          <span>{mobile.primary_camera_front}</span>
        </div>
        <div className="flex justify-between bg-gray-100 p-2 rounded">
          <span className="text-base font-medium" >Primary Camera (Rear):</span>
          <span>{mobile.primary_camera_rear}</span>
        </div>
        <div className="flex justify-between bg-gray-100 p-2 rounded">
          <span className="text-base font-medium" >Processor Brand:</span>
          <span>{mobile.processor_brand}</span>
        </div>
        <div className="flex justify-between bg-gray-100 p-2 rounded">
          <span className="text-base font-medium" >Processor Speed:</span>
          <span>{mobile.processor_speed}</span>
        </div>
        <div className="flex justify-between bg-gray-100 p-2 rounded">
          <span className="text-base font-medium" >RAM Capacity:</span>
          <span>{mobile.ram_capacity}</span>
        </div>
        <div className="flex justify-between bg-gray-100 p-2 rounded">
          <span className="text-base font-medium" >Refresh Rate:</span>
          <span>{mobile.refresh_rate}</span>
        </div>
        <div className="flex justify-between bg-gray-100 p-2 rounded">
          <span className="text-base font-medium" >Resolution Height:</span>
          <span>{mobile.resolution_height}</span>
        </div>
        <div className="flex justify-between bg-gray-100 p-2 rounded">
          <span className="text-base font-medium" >Resolution Width:</span>
          <span>{mobile.resolution_width}</span>
        </div>
        <div className="flex justify-between bg-gray-100 p-2 rounded">
          <span className="text-base font-medium" >Screen Size:</span>
          <span>{mobile.screen_size}</span>
        </div>
      </div>
    </div>
  );
}

export default OneMobile;
