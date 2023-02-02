import React from "react";
import { AiOutlineLink } from "react-icons/ai";
import { MdAdd } from "react-icons/md";

const Portfolio = () => {
    const portfolio = [
        {
            id: 1,
            name: "Project 1",
            link: "#",
            url: "https://bootstrapmade.com/demo/templates/iPortfolio/assets/img/portfolio/portfolio-1.jpg"
        },
        {
            id: 2,
            name: "Project 2",
            link: "#",
            url: "https://bootstrapmade.com/demo/templates/iPortfolio/assets/img/portfolio/portfolio-1.jpg"
        },
        {
            id: 3,
            name: "Project 3",
            link: "#",
            url: "https://bootstrapmade.com/demo/templates/iPortfolio/assets/img/portfolio/portfolio-1.jpg"
        },
        {
            id: 4,
            name: "Project 4",
            link: "#",
            url: "https://bootstrapmade.com/demo/templates/iPortfolio/assets/img/portfolio/portfolio-1.jpg"
        },
        {
            id: 5,
            name: "Project 5",
            link: "#",
            url: "https://bootstrapmade.com/demo/templates/iPortfolio/assets/img/portfolio/portfolio-1.jpg"
        },
        {
            id: 6,
            name: "Project 6",
            link: "#",
            url: "https://bootstrapmade.com/demo/templates/iPortfolio/assets/img/portfolio/portfolio-1.jpg"
        }
    ]
  return (
    <div id="portfolio" className="md:p-20 max-sm:p-4 p-10">
      <h2 className="text-4xl">Portfolio</h2>
      <div className="w-[70px] h-1 bg-blue-400 my-5"></div>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, qui!
        Pariatur quod dolorum harum saepe porro deleniti delectus quo modi,
        mollitia consequuntur id, eligendi nulla odit libero quaerat perferendis
        aspernatur, perspiciatis error quae illo numquam. Rem culpa dolores
        cumque voluptas.
      </p>
      <div className="grid grid-cols-3 max-sm:grid-cols-1 gap-5 mt-10">
        {portfolio.map(item => (
            <div key={item.id} className="group relative w-full h-full overflow-hidden rounded shadow z-0">
                <div className="absolute w-full h-full hover:bg-black/20 z-20 duration-500"></div>
                <div className="absolute bottom-0 w-full group-hover:h-10 h-0 duration-500 grid grid-cols-2">
                    <button className="w-full h-full text-white bg-blue-400/50 hover:bg-blue-400 flex justify-center items-center gap-2 text-lg z-20 duration-300">
                        <MdAdd size={24} />
                    </button>
                    <a href={item.link} className="w-full h-full text-white bg-blue-400/50 hover:bg-blue-400 flex justify-center items-center gap-2 text-lg z-20 duration-30">
                        <AiOutlineLink size={24} />
                    </a>
                </div>
                <img src={item.url} alt={item.name} className="w-full h-full z-10" />
            </div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
