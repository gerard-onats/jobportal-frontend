import Facebook from "../../svg/Facebook";
import Instagram from "../../svg/Instagram";
import Twitter from "../../svg/Twitter";
import Youtube from "../../svg/Youtube";
import MapPin from "../../svg/MapPin";
import Apply from "../../svg/Apply";
import Contact from "../../svg/Contact";
import Button from "../../components/Button";
import Input from "../../components/Input";

const Footer = () => {
    const temp = {
        width: '100%',
        padding: '0em 2.50em',
    }

    const buttonStyle = {
        marginTop: '0.50em',
        borderRadius: '5px',
        color: 'white',
        backgroundColor: '#800000',
        border: '2px solid #800000',
    }

    return (
        <>  
            <div style={{backgroundColor: '#10182F', color: '#999999', }} className="pb-16 pt-4">
                <div className="flex w-2/3 relative m-auto">
                    <div style={ temp }>
                        <h1 className="font-bold mb-4">About Us</h1>
                        <p className="font-medium">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        </p>
                        <p className="mt-4">© 2024 Job Portal App. All Rights Reserved</p>
                        <div className="flex mt-8">
                            <Facebook />
                            <Instagram />
                            <Twitter />
                            <Youtube />
                        </div>
                    </div>
                    <div style={ temp }>
                        <h1 className="font-bold mb-4">Contact Us</h1>
                        <ul>
                            <li className="font-medium">Home</li>
                            <li className="font-medium">Services</li>
                            <li className="font-medium">About</li>
                            <li className="font-medium">Terms</li>
                            <li className="font-medium">Privacy Policy</li>
                        </ul>
                    </div>
                    <div style={ temp }>
                        <h1 className="font-bold mb-4">Contact Information</h1>
                        <p className="flex font-medium pb-2"><MapPin /> 221B Baker Street, London. United Kingdom</p>
                        <p className="flex font-medium pb-2"><Apply /> johndoe@gmail.com</p>
                        <p className="flex font-medium pb-2"><Contact /> 09876543210 </p>
                    </div>
                    <div style={ temp }>
                        <h1 className="font-bold mb-4">Newsletter</h1>
                        <p className="font-medium mb-4">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        </p>
                        <Input
                            type={'text'}
                            placeholder={'Enter email address...'}
                            />
                        <Button 
                            textComponent={'SUBSCRIBE'}
                            customStyle={buttonStyle} />
                    </div>
                </div>
            </div>
        </>
    );
}

export default Footer;