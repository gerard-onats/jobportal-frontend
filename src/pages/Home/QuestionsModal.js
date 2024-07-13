/* eslint-disable jsx-a11y/alt-text */
import {forwardRef, useImperativeHandle, useState, memo} from "react";
import PROFILE_PICTURE from './../../images/user-logo.png';
import Input from "../../components/Input";
import Doc from "../../svg/Doc";
import Download from "../../svg/Download";
import {searchJobApplicationQuestionsApi} from "../../services/jobService";
import QuestionCard from "./QuestionCard";

import {OVERFLOW_HIDDEN, OVERFLOW_AUTO, QUESTIONS_MODAL} from './constants';

import './styles/QuestionsModal.css';

const QuestionsModal = forwardRef(({props, parentRef}) => {
    const [applicant, setApplicant] = useState(null);
    const [question, setQuestion] = useState(null);
    const [isVisible, setVisible] = useState(false);

    useImperativeHandle(parentRef, () => {
        return {
            async setDetails(details) {
                const response = await searchJobApplicationQuestionsApi(details.id);
                const questions = response.map(
                    (element, index) => <QuestionCard
                        key={index}
                        description={element.description}
                        type={element.questionType}
                        />
                )
                setApplicant(details);
                setQuestion(questions);
                setVisible(true);
                document.body.style.overflow = OVERFLOW_HIDDEN;
            }
        }
    }, []);

    const isQuestionVisible = (question != null && question.length > 0);

    //TODO: Store user data in a state. This is a temporary approach 
    const UserData = {
        name: '${user_name}',
        currentPosition: '${user_current_position} @ ${insert_company_name}'
    }

    const DocumentData = {
        fileName: '${resume_file_name}',
        lastUsed: '${resume_last_used}',
    }

    const handleSubmitApplication = () => {
        setVisible(false);
        document.body.style.overflow = OVERFLOW_AUTO;
    }

    const handleCloseApplication = () => {
        setVisible(false);
        document.body.style.overflow = OVERFLOW_AUTO;
    }

    const style = {
        position: 'relative',
        padding: '12.50px 15.0px',
        borderRadius: '5px',
        top: '15.00%',
        margin: 'auto',
        maxWidth: '25%',
        backgroundColor: 'white'
    }

    const center = {
        position: 'fixed',
        top: '0%',
        left: '0%',
        width: '100%',
        height: '100%',
        background: 'rgba(0, 0, 0, 0.40)',
    }

    return (
        <>
            {isVisible &&
                <div style={center}>
                    <div style={style}>
                        <div class="flex flex-start mb-1 border-b-2">
                            <img src={applicant.base64Image} className="object-fill h-10 w-10"/>
                            <p className="text-lg font-medium py-2 px-2">{QUESTIONS_MODAL.APPLY_TO} {applicant.company}</p>
                        </div>
                        <div className="flex flex-start">
                            <img src={PROFILE_PICTURE} className="profile-picture-style"/>
                            <div className="ml-2">
                                <p className="text-md font-medium mr-2">{UserData.name}</p>
                                <p className="modal-tip">{UserData.currentPosition}</p>
                            </div>
                        </div>
                        <div>
                            <p>{QUESTIONS_MODAL.EMAIL}</p>
                            <Input />
                            <p>{QUESTIONS_MODAL.COUNTRY_CODE}</p>
                            <Input />
                            <p>{QUESTIONS_MODAL.CONTACT_NUMBER}</p>
                            <Input />
                        </div>
                        <div>
                            <p className="header">{QUESTIONS_MODAL.RESUME_OR_CV}</p>
                            <div class="modal-section">
                                <div className="flex flex-start">
                                    <Doc />
                                    <div>
                                        <p>{DocumentData.fileName}</p>
                                        <p>{QUESTIONS_MODAL.LAST_USED} {DocumentData.lastUsed}</p>
                                    </div>
                                </div>
                                <Download />
                            </div>
                            <p className="modal-tip">{QUESTIONS_MODAL.DOCUMENT_TYPE_NOTIFICATION}</p>
                        </div>
                        <div className="my-4 border-b-2">
                            {isQuestionVisible && <p className="header">{QUESTIONS_MODAL.APPLICATION_QUESTIONS}</p>}
                            {question}
                        </div>
                        <button className="button button--cancel" onClick={() => handleCloseApplication()}>
                            {QUESTIONS_MODAL.CANCEL_APPLICATION}
                        </button>
                        <button className="button button--submit" onClick={() => handleSubmitApplication()}>
                            {QUESTIONS_MODAL.SUBMIT_APPLICATION}
                        </button>
                    </div>
                </div>
            }
        </>
    );
});

export default memo(QuestionsModal);