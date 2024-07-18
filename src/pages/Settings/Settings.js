/* eslint-disable jsx-a11y/alt-text */
import styles from './styles/Settings.module.css';

import PROFILE_PICTURE from './../../images/user-logo.png';

import Input from './../../components/Input';
import Option from './../../components/Option';

import EducationCard from './EducationCard';
import { SETTINGS } from './constants';
import ResumeCard from './ResumeCard';
import Button from '../../components/Button';

const Settings = () => {
    const user = 'John V. Doe';
    const email = 'johndoestub@gmail.com';

    const del = '${btn.delete}';
    const update = '${btn.update}';

    return (
        <div id={styles.container}>
            <div className="mt-5 w-2/5">
                <ul id={styles.tabs}>
                    <li className={styles.selectedTab}>{SETTINGS.TABS.BASIC_INFORMATION}</li>
                    <li className={styles.unselectedTab}>{SETTINGS.TABS.SKILLS_AND_ACHIEVEMENTS}</li>
                </ul>
                <div className="bg-white py-5 px-2">
                    <form>
                        <p className={styles.header}>{SETTINGS.HEADERS.PROFILE}</p>
                        <p className={styles.description}>{SETTINGS.DESCRIPTION.PROFILE}</p>
                        <div className="flex profile px-4 mb-5">
                            <div className={styles.centered}>
                                    <div className="flex">
                                        <img src={PROFILE_PICTURE} className="h-20 w-20 mr-2"/>
                                        <div className="flex items-center">
                                            <button className={styles.button}>{del}</button>
                                            <button className={styles.button}>{update}</button>
                                        </div>
                                    </div>
                                    <p className={styles.basicProfileDetails}>{user}</p>
                                    <p className={styles.basicProfileDetails}>{email}</p>
                            </div>
                            <div className="w-1/2">
                                <p className="text-md font-bold">ABOUT</p>
                                <p className="text-sm text-gray-500">Write something about yourself.</p>
                                <textarea className="border-2 border-gray-200 w-full"/>
                            </div>
                        </div>
                        <div id="personal-information">
                            <p className={styles.header}>{SETTINGS.HEADERS.CONTACT_INFORMATION}</p>
                            <p className={styles.description}>{SETTINGS.DESCRIPTION.PERSONAL_INFORMATION}</p>
                            <div class="flex">
                                <div className={styles.formContainer}>
                                    <label id="contact-number" for="contact-number" className={styles.formLabel}>{SETTINGS.LABELS.CONTACT_NO}</label>
                                    <Input name="contact-information" type="text" />
                                </div>
                                <div className={styles.formContainer}>
                                    <label id="country" for="country" className={styles.formLabel}>{SETTINGS.LABELS.COUNTRY}</label>
                                    <Option options={["COUNTRY_A", "COUNTRY_B"]}/>
                                </div>
                            </div>
                            <div class="flex">
                                <div className={styles.formContainer}>
                                    <label id="city" for="city" className={styles.formLabel}>{SETTINGS.LABELS.CITY}</label>
                                    <Input name="city" type="text" />
                                </div>
                                <div className={styles.formContainer}>
                                    <label id="state" for="state" className={styles.formLabel}>{SETTINGS.LABELS.STATE}</label>
                                    <Input name="state" type="text" />
                                </div>
                            </div>
                            <div class="flex">
                                <label id="alt-email" for="alt-email">
                                    <span className={styles.formLabel}>{SETTINGS.LABELS.ALTERNATE_EMAIL}</span>
                                    <Input name="alt-email" type="email" />
                                </label>
                            </div> 
                        </div>
                        <div id="online-presence">
                            <p className={styles.header}>{SETTINGS.HEADERS.ONLINE_PRESENCE}</p>
                            <p className={styles.description}>{SETTINGS.DESCRIPTION.ONLINE_PRESENCE}</p>
                            <label id="social-media" for="social-media" className={styles.formLabel}>
                                {SETTINGS.LABELS.SOCIAL_MEDIA}
                            </label>
                            <Input name="alt-email" type="url" placeholder={SETTINGS.PLACEHOLDER.SOCIAL_MEDIA}/>
                            <label id="work-sample" for="work-sample" className={styles.formLabel}>
                                {SETTINGS.LABELS.WORK_SAMPLE}
                            </label>
                            <Input name="work-sample" type="url" placeholder={SETTINGS.PLACEHOLDER.WORK_SAMPLE}/>
                        </div>
                        <div id="resume/cv">
                            <p className={styles.header}>{SETTINGS.HEADERS.RESUME_CV}</p>
                            <p className={styles.description}>{SETTINGS.DESCRIPTION.RESUME_CV}</p>
                            <ResumeCard />
                            <ResumeCard props={true}/>
                        </div>
                        <div id="education" className="mt-2">
                            <p className={styles.header}>{SETTINGS.HEADERS.EDUCATION}</p>
                            <EducationCard />
                        </div>
                        <div id="footer" className="mt-5 flex justify-end">
                            <Button textComponent={SETTINGS.BUTTON_SAVE}/>
                            <Button textComponent={SETTINGS.BUTTON_CANCEL}/>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Settings;