import Bookmark from '../../svg/Bookmark';
import './styles/JobAdItem.css'

const JobCatalogComponent = ({details, onClick}) => {
    return (
        <div className="job-catalog-container" onClick={ onClick }>
            <div className="flex justify-start mb-2">
                <img 
                    src={ details.base64Image }
                    alt="company-logo"
                    className="company-logo-style"
                />
                <div className="px-5 relative">
                    <p className="job-catalog-title-style">{ details.title }</p>
                    <p className="font-medium text-sm">{ details.company }</p>
                    <p className="font-light text-sm">{ details.location }</p>
                </div>
            </div>
            <p className="text-sm text-[#006B2B] font-medium">Posted { details.timePosted }</p>
            <div className="bookmark-post-style"><Bookmark /></div>
        </div>
    );
}

export default JobCatalogComponent;