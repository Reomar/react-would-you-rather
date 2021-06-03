import { useSelector } from 'react-redux'
import img from '../../assets/avatars/a1.png'
import './questionBox.sass'

function QuestionBox(props){
    // Question data
    const {question} = props

    // Users data from redux
    const users = useSelector(state => state.users)

    return(
        <div className='questionBox-container' key={question.id}>
            <div className='questionBox-header'>
                <img src={img} width='60px'/>
                <p>{users[question.author].name} asked, Would You Rather...</p>
            </div>

            <p>{question.optionOne.text} <span>or</span> {question.optionTwo.text}</p>
        </div>
    )
}

export default QuestionBox