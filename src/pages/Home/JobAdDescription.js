/* eslint-disable jsx-a11y/alt-text */
import EmptyAd from "../Empty/EmptyAd";

import React, {memo, useState, forwardRef, useImperativeHandle, useRef} from 'react';

import parse from 'html-react-parser';

import './styles/JobAdDescription.css'
import Job from '../../svg/Job';
import Apply from '../../svg/Apply';
import Bookmark from '../../svg/Bookmark';
import QuestionsModal from "./QuestionsModal";

const JobAdDescription = forwardRef(({props, parentRef}) => {
    const ref = useRef();
    const [details, setDetails] = useState('');
    const [shouldRender, setShouldRender] = useState(false);

    useImperativeHandle(parentRef, () => {
        return {
            setDescription(details) {
                setShouldRender(true);
                setDetails(details);
            }
        }
    }, []);

    return ( 
        <div className="ml-2 w-1/3 bg-white overflow-auto">
            { shouldRender ? 
            <div className="py-5 px-8">
                <div className="flex flex-row">
                    <img src={details.base64Image} className="object-fill h-12 w-12 mt-2" />
                    <div className="ml-4 pt-1">
                        <p className="job-title-style">{ details.title }</p>
                        <p>{ details.location }</p>
                    </div>
                </div>
                <div className="mt-5">
                    <div className="mb-2">
                        <div className="flex flex-row">
                            <Job />
                            <p className="pl-2 text-medium font-medium">Job Details</p>
                        </div>
                        <p className="text-xs font-light italic text-stone-700">Here’s how the job details align with your job preferences. Manage job preferences anytime in your profile</p>
                    </div>
                    <p className="text-sm font-medium py-0.5">Skills:</p>
                    <ul className="flex flex-row mb-2">
                        <li className="text-xs font-medium mr-2 py-0.5 px-3 border border-gray-400 rounded-full">PostgreSQL</li>
                        <li className="text-xs font-medium mr-2 py-0.5 px-3 border border-gray-400 rounded-full">Java</li>
                        <li className="text-xs font-medium mr-2 py-0.5 px-3 border border-gray-400 rounded-full">Spring Boot</li>
                        <li className="text-xs font-medium mr-2 py-0.5 px-3 border border-gray-400 rounded-full">Git</li>
                    </ul>
                    <p className="text-sm font-medium py-0.5">Job Type:</p>
                    <ul className="flex flex-row mb-2">
                        <li className="text-xs font-medium mr-2 py-0.5 px-3 border border-gray-400 rounded-full">Full-time</li>
                        <li className="text-xs font-medium mr-2 py-0.5 px-3 border border-gray-400 rounded-full">Part-time</li>
                        <li className="text-xs font-medium mr-2 py-0.5 px-3 border border-gray-400 rounded-full">Contractual</li>
                    </ul>
                    <p className="text-sm font-medium py-0.5">Education:</p>
                    <ul className="flex flex-row mb-2">
                        <li className="text-xs font-medium mr-2 py-0.5 px-3 border border-gray-400 rounded-full">Bachelor's</li>
                        <li className="text-xs font-medium mr-2 py-0.5 px-3 border border-gray-400 rounded-full">Postgraduate</li>
                    </ul>
                    <p className="text-sm font-medium py-0.5">Shift and Schedule:</p>
                    <ul className="flex flex-row mb-2">
                        <li className="text-xs font-medium mr-2 py-0.5 px-3 border border-gray-400 rounded-full">8 hour shift</li>
                        <li className="text-xs font-medium mr-2 py-0.5 px-3 border border-gray-400 rounded-full">Night shift</li>
                    </ul>
                </div>
                <div className="my-5">
                    <button onClick={ () => ref.current.setDetails(details) } className="border border-blue-500 py-2 px-3 font-medium bg-blue-500 text-white rounded-full mr-5 inline-flex items-center hover:bg-blue-700">
                        <Apply />
                        <span>Quick Apply</span>
                    </button>
                    <button className="border border-gray-800 py-2 px-3 font-medium rounded-full inline-flex items-center">
                        <Bookmark />
                        <span>Save Job</span>
                    </button>
                </div>
                <div>
                    <div className="job-description-style">{parse(details.description)}</div>
                    <p className="font-medium mt-4 mb-1">About the company:</p>
                    <div className="flex flex-row">
                        <img src={ details.base64Image } className="object-fill h-12 w-12 mt-2" />
                        <div className="ml-4 pt-1 mb-5">
                            <p className="text-sm font-medium">{ details.company }</p>
                            <p className="text-sm font-light">1-50 employees</p>
                        </div> 
                    </div>
                    <p className="font-light text-sm italic">{ details.companyDescription }</p>
                </div>
            </div> : <EmptyAd /> }
            <QuestionsModal parentRef = {ref}/>
        </div>
    );
});

export default memo(JobAdDescription);