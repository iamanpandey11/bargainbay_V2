import satyam from "../images/satyam.jpg";
import shivam from "../images/shivam.jpg";
import shashank from "../images/shashank.jpg";
import aman from "../images/aman.jpg";
import {Card, CardHeader, CardBody, Image} from "@nextui-org/react";
import {Badge, Avatar} from "@nextui-org/react";
export default function About() {
  const leader = {
    name:"Aman kumar Pandey",
    role: "Frontend Developer",
    image: aman,
    leader: "Team Lead"
  };
  const developers = [{
    name:"Shivam Mishra",
    role: "Designer and Developer",
    image: shivam,
  },{
    name:"Satyam Tiwari",
    role: "Backend Developer",
    image: satyam,
  },{
    name:"Shashank Shukla",
    role: "Database Manager",
    image: shashank,
  },];
  return (
    <div className="min-h-screen  ">
      <div className="max-w-2xl mx-auto p-3 text-center">
        <div>
          <h1 className="text-3xl my-4 font font-semibold text-center">
            About Bargein Bay
          </h1>
          <div className="text-md text-gray-500 flex flex-col gap-6">
            <p>
            Welcome to Bargain Bay, your premier destination for navigating the dynamic landscape of tech gadgets! In an era defined by rapid technological innovation, finding the perfect gadget that not only meets your needs but also aligns with your lifestyle can often feel like a daunting task. Fear not, because Bargain Bay is here to revolutionize your quest for the ideal tech companion.
            In today's fast-paced world, technology plays an integral role in virtually every aspect of our lives. Whether it's staying connected with loved ones, enhancing productivity at work, or indulging in entertainment, the right gadget can significantly enrich our daily experiences. However, with an overwhelming array of options flooding the market, it's easy to feel overwhelmed and uncertain about which product is truly the best fit for you.

            </p>

            <p>
            At Bargain Bay, we recognize the importance of personalized recommendations and tailored solutions. Leveraging the power of the MERN stack (MongoDB, Express.js, React.js, and Node.js), our platform is meticulously crafted to provide an intuitive and immersive user experience. From the moment you step foot into Bargain Bay, you'll embark on a journey of discovery, guided by expert insights and cutting-edge technology.
            Our extensive database boasts a diverse selection of tech gadgets, ranging from smartphones and laptops to wearables and smart home devices. Each product is meticulously curated and accompanied by detailed descriptions, specifications, and unbiased reviews, empowering you to make informed decisions with confidence.
            One of the hallmark features of Bargain Bay is our innovative comparison tool, which allows you to effortlessly evaluate multiple gadgets side by side. Whether you're torn between two flagship smartphones or weighing the pros and cons of various fitness trackers, our comparison feature streamlines the decision-making process, enabling you to pinpoint the perfect gadget that aligns with your preferences and priorities.

            </p>

            <p>
              Join our community of tech-savvy shoppers and discover a world of
              incredible deals and fantastic finds. Whether you're shopping for
              yourself or searching for the perfect gift, Bargain Bay Tech
              Gadgets has something for everyone. Explore our website today and
              embark on a journey of discovery and savings!
            </p>
          </div>
        </div>
      </div>
      <div className="font-bold text-center text-5xl text-black my-4"  >Our Team</div>
      <div className=" flex justify-evenly flex-wrap ">
      <Badge content={leader.leader} color="success" size="sm">
      <Card className="py-4 m-2 ">
              <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
                <h4 className="font-bold text-large">{leader.name}</h4>
                <small className="text-default-500">{leader.role}</small>
              </CardHeader>
              <CardBody className="overflow-visible py-2">
              <Image
              className=" object-contain rounded-xl  h-[357px]"
               width={300}
               height={200}
               src={leader.image}
              />
              </CardBody>
            </Card>
            </Badge>
        {developers.map((developer) =>(<Card className="py-4 m-2 ">
              <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
                <h4 className="font-bold text-large">{developer.name}</h4>
                <small className="text-default-500">{developer.role}</small>
              </CardHeader>
              <CardBody className="overflow-visible py-2">
                <Image
                  alt="Card background"
                  className="object-cover rounded-xl h-[357px]" 
                  src={developer.image}
                  width={300}
                  height={300}
                />
              </CardBody>
            </Card>
            ))}    
      </div> 
    </div>
  );
}
