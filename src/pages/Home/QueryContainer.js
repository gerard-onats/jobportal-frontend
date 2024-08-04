import { fetchQueryResults } from '../../store/searchQuerySlice';
import { useDispatch, useSelector } from 'react-redux';
import { memo, useRef } from 'react';

import { QUERY_CONTAINER } from './constants';

import './styles/QueryContainer.css'
import Input from '../../components/Input';
import Button from '../../components/Button';
import Search from '../../svg/Search';
import Job from '../../svg/Job';
import User from '../../svg/User';
import Clock from '../../svg/Clock';
import MapPin from '../../svg/MapPin';
import ButtonDropdown from './ButtonDropdown';

const QueryContainer = () => {
    const searchQueryRef = useRef('');

    const dispatch = useDispatch();
    const searchQuerySelector = useSelector((state) => state.search.query);

    const handleTextChange = (query) => {
        searchQueryRef.current = query;
    }

    const handleSearch = async () => {
        const shouldRender = (searchQueryRef.current !== searchQuerySelector);
        if(shouldRender) dispatch(fetchQueryResults(searchQueryRef.current));
    }

    const customInputStyle = {
        width: '30%',
        marginRight: '0.25em'
    }

    console.log(`QueryContainer rendered!`);

    return (
        <div className="query-container-style">
            <Input 
                type="text"
                placeholder="Search"
                onChange={(event) => handleTextChange(event.target.value)}
                customStyle={customInputStyle} />
            <Input
                type="text"
                placeholder="Location"
                customStyle={customInputStyle} />
            <Button 
                svgComponent={<Search />}
                onClick={() => handleSearch()}
                textComponent={QUERY_CONTAINER.FIND_JOBS} />
            <div className="mb-4">
                <ButtonDropdown
                    svgComponent={<Clock />}
                    value={QUERY_CONTAINER.DATE_POSTED}
                    options={QUERY_CONTAINER.OPTIONS.DATE_POSTED} />
                <ButtonDropdown 
                    svgComponent={<Job />}
                    value={QUERY_CONTAINER.JOB_TYPE} 
                    options={QUERY_CONTAINER.OPTIONS.JOB_TYPE}/>
                <ButtonDropdown
                    svgComponent={<MapPin />}
                    value={QUERY_CONTAINER.LOCATION_PREFERENCE}
                    options={QUERY_CONTAINER.OPTIONS.LOCATION_PREFERENCE} />
                <ButtonDropdown
                    svgComponent={<User />}
                    value={QUERY_CONTAINER.EXPERIENCE_LEVEL}
                    options={QUERY_CONTAINER.OPTIONS.EXPERIENCE_LEVEL} />
            </div>
        </div>
    );
}

export default memo(QueryContainer);