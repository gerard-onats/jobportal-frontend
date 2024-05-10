import { memo } from 'react';
import { useRef } from "react";
import JobAdItem from "./JobAdItem";

import './styles/Home.css';
import JobAdDescription from "./JobAdDescription";
import Pagination from "./Pagination";
import QueryContainer from './QueryContainer';
import { useSelector } from 'react-redux';

const Home = () => {
    const childRef = useRef();
    const searchQueryRef = useRef('');
    const searchPageRef = useRef(1);

    const searchQuerySelector = useSelector((state) => state.search.query);
    const searchPageNumberSelector = useSelector((state) => state.search.pageNumber);
    const searchResultsSelector = useSelector((state) => state.search.data.results);
    const resultMatchSelector = useSelector((state) => state.search.data.matches);

    let jobMatches = [];
    const shouldRender = (searchQueryRef.current !== searchQuerySelector) || (searchPageRef !== searchPageNumberSelector);

    if(shouldRender) {
        jobMatches = searchResultsSelector.map(
            (element, index) => 
                <JobAdItem 
                    key={index}
                    id={index}
                    details={element}
                    onClick={() => childRef.current.setDescription(element)}/>);
        
        searchQueryRef.current = searchQuerySelector;
        searchPageRef.current = searchPageNumberSelector;
    }

    const jobResultsContainer = {
        height: "75.00vh",
    }

    const homeContainer = {
        height: '95.00vh',
    }

    const jobMatchesContainer = {
        height: '65.00vh',
        minWidth: '26.25em',
        overflow: 'auto',
    }

    console.log(`Home rendered! ${resultMatchSelector}`);
    
    return (
        <div className="pt-10" style={ homeContainer }>
            <QueryContainer />
            <div className="flex justify-center" style={ jobResultsContainer }>
                <div>
                    <p className="text-sm italic font-light py-2 px-4">
                        Showing { resultMatchSelector } results
                    </p>
                    <div className="overflow-auto" style={ jobMatchesContainer }>{ jobMatches }</div>
                    <Pagination/>
                </div>
                <JobAdDescription parentRef={ childRef }/>
            </div>
        </div>
    );
}

export default memo(Home);