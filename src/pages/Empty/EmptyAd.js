import Person from "../../svg/Person";

import './styles/EmptyAd.css';

const EmptyAd = () => {
    return (
        <div className="empty-ad-container">  
            <div className="person-svg-style"><Person /></div>
            <p className="main-sentence">You haven't selected an ad yet!</p>
            <p className="sub-sentence">Select a job ad on the left pane to display its details.</p>
        </div>
    )
}

export default EmptyAd;