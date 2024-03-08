import { memo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setPageNumber, setResultsNextPage } from "../../store/searchQuerySlice";
import { searchJobSpecificationApi } from "../../services/jobService";

import './styles/Pagination.css';
import { MAX_PAGINATION_SIZE } from "../../constants";

const Pagination = () => {
    let paginationButtons = [];

    const dispatch = useDispatch();
    const searchQuerySelector = useSelector((state) => state.search.searchQuery);
    const pageNumberSelector = useSelector((state) => state.search.pageNumber);
    const pagesNeededSelector = useSelector((state) => state.search.pagesNeeded);
    
    const handleNextPage = async (index) => {
        const shouldRender = pageNumberSelector !== index;
        if(!shouldRender) return;

        const jsonResponse = await searchJobSpecificationApi(searchQuerySelector, index, false);

        dispatch(setResultsNextPage(jsonResponse));
        dispatch(setPageNumber({pageNumber: index}));
    }
    
    const list = [];
    const limit = Math.min(pagesNeededSelector, MAX_PAGINATION_SIZE);
    for(var i = 1; i <= limit; i++) list.push(i);

    paginationButtons = list.map((element, index) => 
        <button 
            key={index}
            className={ (element === pageNumberSelector) ? 'selected' : 'non-selected' }
            onClick={() => handleNextPage(element) }>
                { element }
        </button>);

    console.log(`Pagination rendered!`);

    return (
        <>
            <ul className="pagination-container">{ paginationButtons }</ul>
        </>
    );
}

export default memo(Pagination);