import { setSearchParams, setSearchResults } from '../../store/searchQuerySlice';
import { useDispatch, useSelector } from 'react-redux';
import { memo, useRef } from 'react';
import { searchJobSpecificationApi } from '../../services/jobService';

import './styles/QueryContainer.css'
import Input from '../../components/Input';
import Button from '../../components/Button';
import Search from '../../svg/Search';
import Job from '../../svg/Job';
import User from '../../svg/User';
import Clock from '../../svg/Clock';
import ChevronDown from '../../svg/ChevronDown';
import MapPin from '../../svg/MapPin';

const QueryContainer = () => {
    const searchQueryRef = useRef('');

    const dispatch = useDispatch();
    const searchQuerySelector = useSelector((state) => state.search.searchQuery);

    const handleTextChange = (query) => {
        searchQueryRef.current = query;
    }

    const handleSearch = async () => {
        const shouldRender = (searchQueryRef.current !== searchQuerySelector);
        if(!shouldRender) return;
        
        const jsonResponse = await searchJobSpecificationApi(searchQueryRef.current, 1, true);
    
        dispatch(setSearchParams({ searchQuery: searchQueryRef.current }));
        dispatch(setSearchResults(jsonResponse));
    }

    const customInputStyle = {
        width: '30%',
        marginRight: '0.25em'
    }

    const customButtonStyle = {
        color: 'white',
        backgroundColor: '#3B82F6',
        border: '1px solid #3B82F6',
    }

    console.log(`QueryContainer rendered!`);

    return (
        <div className="query-container-style">
            <Input 
                type="text"
                placeholder="Search"
                onChange={(e) => { handleTextChange(e.target.value) } }
                customStyle={customInputStyle} />
            <Input
                type="text"
                placeholder="Location"
                customStyle={customInputStyle} />
            <Button 
                svgComponent={<Search />}
                onClick={ () => { handleSearch() } }
                customStyle={customButtonStyle}
                textComponent='Search' />
            <div className="mb-4">
                <Button 
                    svgComponent={<Clock />}
                    textComponent={<>Date posted <ChevronDown /></> }/>
                <Button 
                    svgComponent={<Job />}
                    textComponent={<>Job type <ChevronDown /></> } />
                <Button 
                    svgComponent={<MapPin />}
                    textComponent={<>Location preference <ChevronDown /></> } />
                <Button 
                    svgComponent={<User />}
                    textComponent={<>Experience level <ChevronDown /></> } />
            </div>
        </div>
    );
}

export default memo(QueryContainer);