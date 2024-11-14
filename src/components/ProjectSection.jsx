/* eslint-disable react/prop-types */
import { AiOutlineCaretRight } from "react-icons/ai";
import { useRef, useState, useEffect } from "react";
import '../Caro.scss'
import cards from '../assets/Data/Projects'


const Card = ({ dataImage, header,  link }) => {
  const cardRef = useRef(null);
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);
  const [mouseX, setMouseX] = useState(0);
  const [mouseY, setMouseY] = useState(0);

  useEffect(() => {
    setWidth(cardRef.current.offsetWidth);
    setHeight(cardRef.current.offsetHeight);
  }, []);

  const handleMouseMove = (e) => {
    const rect = cardRef.current.getBoundingClientRect();
    setMouseX(e.clientX - rect.left - width / 2);
    setMouseY(e.clientY - rect.top - height / 2);
  };

  const handleMouseLeave = () => {
    setTimeout(() => {
      setMouseX(0);
      setMouseY(0);
    }, 300);
  };

  const cardStyle = {
    transform: `rotateY(${(mouseX / width) * 20}deg) rotateX(${(-mouseY / height) * 20}deg)`,
    transition: "transform 0.3s ease-out",
  };

  const cardBgTransform = {
    transform: `translateX(${(mouseX / width) * -10}px) translateY(${(mouseY / height) * -10}px)`,
    transition: "transform 0.2s ease-out",
  };
   
  const cardBgImage = {
    backgroundImage: `url(${dataImage})`,
  };

  return (
    <div
      className="card-wrap "
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
    <a href={link} target="_blank">
      <div className="card" style={cardStyle}>
      
        <div className="card-bg borders  " style={{ ...cardBgTransform, ...cardBgImage }}></div>
        
        

        
      </div>
      <div className=" text-center text-xl text-gray-900">
          <h1>{header}</h1>
          {/* <p>{content}</p> */}
        </div>
      </a>

      
    </div>
  );
};


const ProjectSection = () => {

  const scrollToLast = () => {
    if (carouselRef.current) {
      carouselRef.current.lastElementChild.scrollIntoView({ behavior: "smooth" });
    }
  };

  const carouselRef = useRef(null);

  return (
<section className="botton-0 relative p-6">

<h1 className="text-center text-3xl font-bold mb-4">
        Project <span className="text-red-700">Section</span>
      </h1>

  <div className="relative z-30 bg-clip-border  text-gray-900 flex h-full min-h-[200px] w-full flex-col  justify-center rounded bg-colors-3 blur-2xl">
  </div>


  <div className="relative z-30 px-0 pt-0 pb-0 -mt-40 lg:px-0 xl:px-0">
    <div className="grid gap-8">
    
        <div className="carousel " ref={carouselRef}>
        <button onClick={scrollToLast} className="hover:text-pink-500 sm:block text-4xl ">
            <AiOutlineCaretRight />
        </button>

        {cards.map((card, index) => (
          <Card
            key={index}
            dataImage={card.image}
            header={card.header}
            content={card.content}
            link={card.html_url}
          />
        ))}

      
      </div>

    </div>
    
  </div>

  
</section>
  );
};

export default ProjectSection;

