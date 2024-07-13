import Input from "../../components/Input";
import Option from "../../components/Option";

const QuestionCard = ({description, type}) => {
    const options = ['YES', 'NO'];
    const input = (type === 'YES_NO') ? <Option options={options} /> : <Input />

    return (
        <>
            <p>{description}</p>
            <div>{input}</div>
        </>
    )
}

export default QuestionCard;