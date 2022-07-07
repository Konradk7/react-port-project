import React, {useEffect, useState} from 'react';
import FoundationJson from "../mock_data/foundations.json";
import OrganizationJson from "../mock_data/organizations.json";
import LocalJson from "../mock_data/local.json";
import ReactPaginate from "react-paginate";

function AboutWorkText({org}) {
    const [foundations, setFoundations] = useState(FoundationJson.slice(0, 9));
    const [organizations, setOrganizations] = useState(OrganizationJson.slice(0, 6));
    const [local, setLocal] = useState(LocalJson.slice(0, 6));
    const [cur, setCur] = useState(foundations);
    const [pageNumber, setPageNumber] = useState(0);
    const [number, setNumber] = useState(3)

    const infoPerPage = 3;
    const pagesVisited = pageNumber * infoPerPage;
    const pageCount = Math.ceil(foundations.length / infoPerPage)

    const changePage = ({selected}) => {
        setPageNumber(selected)
    }

    const displayPage = (fund) => fund
        .slice(pagesVisited, pagesVisited + infoPerPage)
        .map((data) => {
            return (
                <div key={data.id}>
                    <p
                        className="about-work__container--main">
                        {data.main}
                    </p>
                    <section>
                        <div>
                            <h2>{data.title}</h2>
                            <p>{data.text}</p>
                        </div>
                        <p>{data.aside}</p>
                    </section>
                </div>
            )
        })

    useEffect(() => {
        if(org === 1) {
            setCur(foundations);
            setNumber(3)
        }
        else if (org === 2) {
            setCur(organizations);
            setNumber(2)
        }
        else if (org === 3) {
            setCur(local);
            setNumber(0)
        }
    }, [org]);

    return (
        <>
            {displayPage(cur)}
            <ReactPaginate
                previousLabel={""}
                nextLabel={""}
                pageCount={number}
                onPageChange={changePage}
                containerClassName={"about-work__container--footer"}
            />
        </>
    )


}

export default AboutWorkText;