const Settings = () => {
    return (
        <div className="flex justify-center" style={{height: '87.5vh'}}>
            <div className="border border-gray-400 bg-white w-2/5">
                <p>Profile Settings</p>
                <div>
                    <p>First name:</p>
                    <input type="text" placeholder="first name" />

                    <p>First name:</p>
                    <input type="text" placeholder="first name" />
                </div>
            </div>
        </div>
    );
}

export default Settings;