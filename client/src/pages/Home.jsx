import { Link } from "react-router-dom";
import CallToAction from "../components/CallToAction";
import { useEffect, useState } from "react";
import PostCard from "../components/PostCard";
import { Carousel } from "flowbite-react";
import logo from '../images/homePage.jpg';
import banner from '../images/banner.jpg'
import {Button, ButtonGroup} from "@nextui-org/react";
import {useNavigate } from "react-router-dom";
export default function Home() {
  const [posts, setPosts] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    const fetchPosts = async () => {
      const res = await fetch("/api/post/getPosts");
      const data = await res.json();
      setPosts(data.posts);
    };
    fetchPosts();
  }, []);
 const handleButtonClick = ()=>{
navigate("/laptop")

 }
  return (
    <div className="bg-gray-100  flex flex-col justify-center items-center">
      <div className="w-full relative"><img className="w-full object-cover" src={logo} alt="" />
      <div className="absolute top-[10px] left-[10px] w-7/12 my-16 text-sm md:top-[220px] md:text-3xl md:left-[110px] md:w-1/3 ">
      <span className="bg-red-900 text-white  text-center block  p-0 ">Compare Gadgets and Accessories</span>
      <span className="block text-2xl my-5 md:text-6xl md:font-bold text-black" >Find the Best Gadgets Online</span>
      <Button onClick={handleButtonClick} color="primary" variant="solid" className="md:ml-10">Explore</Button>
      </div>
      </div>
      
         

      <img src={banner} className="my-1 p-3  sm:hidden" alt="" />
      
    </div>
  );
}
