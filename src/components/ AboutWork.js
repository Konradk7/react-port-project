import React, {useState} from 'react';
import AboutWorkText from "./AboutWorkText";
import ReactPaginate from "react-paginate";
import Decoration from '../assets/Decoration.svg';


function AboutWork() {
    const [who, setWho] = useState(0);
    const [pageNumber, setPageNumber] = useState(0);

    const infoPerPage = 3;
    const pagesVisited = pageNumber * infoPerPage;
    return (
        <div className="about-work__container" id="about-work">
            <h2 className="about-work__container--title">Komu pomagamy?</h2>
            <img src={Decoration} alt="decoration" className="about-work__container--decoration"/>
            <div className="about-work__container--links">
                <h3 >Fundacjom</h3>
                <h3 style={{display: "flex", flexDirection: "column"}} ><span>Organizacjom</span>
                    <span>pozarządowym</span></h3>
                <h3 style={{display: "flex", flexDirection: "column"}} ><span>Lokalnym</span>
                    <span>zbiórkom</span></h3>
            </div>
            <AboutWorkText />
            <div className="about-work__container--footer">
                <button>1</button>
                <button>2</button>
            </div>
        </div>
    );
}

export default AboutWork;