import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {Card, CardHeader, CardBody, Image,CardFooter,Button} from "@nextui-org/react";

function Laptop() {
  const [laptops, setLaptops] = useState([]);
  const [loading,setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await fetch("/api/laptop/get");
        const data = await response.json();
        setLaptops(data[0].laptop);
        setLoading(false);
      } catch (error) {
        setLoading(false);
        console.error("Error fetching laptop data:", error);
      }
    };

    fetchData();
  }, []);

  return (
  <>
  {loading?( <div className="min-h-screen text-4xl  flex items-center justify-center bg-gray-300">Ha Bhai itni jaldi kyu hai ruko jara....</div>  ):(<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {laptops.map((laptop) => (
        <Link key={laptop._id} to={`/laptop/${laptop._id}`} >
          <Card
      isFooterBlurred={false}
      radius="lg"
      className=" h-64 flex items-center  "
    >
      <Image
        alt="Woman listing to music"
        className="object-contain h-40 p-1" 
        height={200}
        src={laptop.img_link}
        width={200}
      />
      <CardFooter className="justify-between before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
        <p className=" text-center boder-2 border-red-400">{laptop.name}</p>
        <Button className=" text-tiny text-black hover:bg-gradient-to-r from-cyan-500 to-blue-500 hover:text-white " variant="flat" color="default" radius="lg" size="sm">
          Show more
        </Button>
      </CardFooter>
    </Card>
        </Link>
      ))}
    </div>)}
    
    </>
  );
}

export default Laptop;
