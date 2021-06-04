import { useSelector } from 'react-redux'
import SelectAnswer from '../SelectAnswer/SelectAnswer'
import './questionBox.sass'
import Votes  from '../Votes'

function QuestionBox(props){
    // Question data
    const {question, page} = props

    // Users data from redux
    const users = useSelector(state => state.users)

    return(
        <div className='questionBox-container remove-deco' >
            <div className='questionBox-header'>
                <img src={users[question.author].avatarURL} width='60px' alt='user avatar'/>
                <p>{users[question.author].name} asked, Would You Rather...</p>
            </div>

            {page === 'home' &&
                <p>{question.optionOne.text} <span>or</span> {question.optionTwo.text}</p>
            }

            {page === 'notAnsweredQuestion' &&
                < SelectAnswer question={question}/>
            }

            {page === 'answeredQuestion' &&
                < Votes />
            }
        </div>
    )
}

export default QuestionBox