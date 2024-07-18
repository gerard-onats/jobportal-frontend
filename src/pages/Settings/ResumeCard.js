import Delete from "../../svg/Delete";
import Doc from "../../svg/Doc";
import Pdf from "../../svg/Pdf";

import styles from './styles/ResumeCard.module.css';

const ResumeCard = ({props}) => {
    const booleanRandomizer = () => Math.random() < 0.50;
    const SCALE_FACTOR = 10.10;

    const fileSize = (Math.random() * SCALE_FACTOR).toFixed(2);
    const fileUnitSize = booleanRandomizer() ? 'kB' : 'MB';

    const marginTop = {
        borderTop: props ? '1px solid rgb(200,200,200)' : 'none'
    }

    return (
        <div id={styles.container} style={marginTop}>
            <div className="flex flex-row">
                {booleanRandomizer() ? <Pdf /> : <Doc />}
                <div>
                    <p className={styles.documentName}>Randomized_ResumeName_DateMMDDYYY.docType</p>
                    <p className={styles.documentDateDetails}>(MM/DD/YYYY) | (MM/DD/YYYY)</p>
                </div>
            </div>
            <div className="flex items-center">
                <p className={styles.fileSize}>{fileSize}{fileUnitSize}</p>
            </div>
            <div className="flex items-center"><Delete /></div>
        </div>
    );
};

export default ResumeCard;