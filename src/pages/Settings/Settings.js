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
        <div id={styles.container} style={{minHeight: '87.5vh'}}>
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
                        <div id="contact-information">
                            <p className={styles.header}>{SETTINGS.HEADERS.CONTACT_INFORMATION}</p>
                            <p className={styles.description}>{SETTINGS.DESCRIPTION.PERSONAL_INFORMATION}</p>
                            <div class="flex flex-row">
                                <label className="mr-5">
                                    <span className="text-xs">{SETTINGS.LABELS.CONTACT_NO}</span>
                                    <Input
                                        name="contact-information"
                                        type="text"
                                    />
                                </label>
                                <label id="alt-email" for="alt-email" className="mr-5">
                                    <span className="text-xs">{SETTINGS.LABELS.ALTERNATE_EMAIL}</span>
                                    <Input 
                                        name="alt-email"
                                        type="mail"
                                    />
                                </label>
                                <label>
                                    <span className="text-xs">{SETTINGS.LABELS.COUNTRY}</span>
                                    <Option options={["COUNTRY_A", "COUNTRY_B"]}/>
                                </label>
                            </div>
                            <div class="flex flex-row">
                                <label id="city" for="city" className="mr-5">
                                    <span className="text-xs">{SETTINGS.LABELS.CITY}</span>
                                    <Input 
                                        name="city"
                                        type="text"
                                    />
                                </label>
                                <label id="state" for="state" className="mr-5">
                                    <span className="text-xs">{SETTINGS.LABELS.STATE}</span>
                                    <Input
                                        name="state"
                                        type="text" 
                                    />
                                </label>
                            </div> 
                        </div>
                        <div>
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