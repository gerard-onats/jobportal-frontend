import School from "../../svg/School";

const AddEducationCard = () => {
    const defaultStyle = {
        height: '87.50vh'
    }

    const component = {
        width: '95.5%',
        marginLeft: 'auto',
        marginRight: 'auto'
    }

    const universityName = '${University.of.StubName}';
    const universityDateStay = '${Month_A XXXX - Month_B XXXX}';
    const universitySpecialty = '${Bachelor of Science, Applied in stub, minor in fake data}';
    const gpa = '${GPA: university.GPA_optional}'

    const activities = 'Activity_A, Group_A, Network_A';

    const summaryStay = '${summaryStay.sameple = Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium,' + 
    'totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas' +
    'sit aspernatur aut odit aut fugit}';

    return (
        <div>
            <div style={component} className="bg-white mt-2 px-2">
                <div className="flex component mb-6">
                    <School />
                    <div className="ml-4">
                        <p className="text-lg font-bold">{universityName}</p>
                        <p className="text-sm text-gray-500">{universityDateStay}</p>
                        <p className="text-sm">{universitySpecialty}</p>
                        <p className="text-sm">{gpa}</p>
                    </div>
                </div>
                <div className="text-wrap">
                    <p className="text-md font-bold">Activities and achievements:</p>
                    <p className="mb-5">{activities}</p>
                    <p className="text-md font-bold">Summary:</p>
                    <p>{summaryStay}</p>
                </div>
            </div>
        </div>
    );
}

export default AddEducationCard;