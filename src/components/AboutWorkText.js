import React, {useState} from 'react';
import FoundationJson from "../mock_data/foundations.json";
import OrganizationJson from "../mock_data/organizations.json";
import LocalJson from "../mock_data/local.json";
import ReactPaginate from "react-paginate";

function AboutWorkText(state) {
    const [foundations, setFoundations] = useState(FoundationJson.slice(0, 9));
    const [organizations, setOrganizations] = useState(OrganizationJson.slice(0, 6));
    const [local, setLocal] = useState(LocalJson.slice(0, 6));
    const [pageNumber, setPageNumber] = useState(0);

    const infoPerPage = 3;
    const pagesVisited = pageNumber * infoPerPage;
    const pageCount = Math.ceil(foundations.length / infoPerPage)

    const changePage = ({selected}) => {
        setPageNumber(selected)
    }

    const displayPage = foundations
        .slice(pagesVisited, pagesVisited + infoPerPage)
        .map((data) => {
            return (
                <>
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
                </>
            )
        })
    return (
        <>
            {displayPage}
            <ReactPaginate
                previousLabel={""}
                nextLabel={""}
                pageCount={pageCount}
                onPageChange={changePage}
                containerClassName={"about-work__container--footer"}
            />
        </>
    )


}

export default AboutWorkText;