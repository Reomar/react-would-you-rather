import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import img from '../../assets/avatars/a1.png'
import SelectAnswer from '../SelectAnswer/SelectAnswer'
import './questionBox.sass'

function QuestionBox(props){
    // Question data
    const {question, page} = props

    // Users data from redux
    const users = useSelector(state => state.users)

    return(
        <div className='questionBox-container' >
            <div className='questionBox-header'>
                <img src={img} width='60px'/>
                <p>{users[question.author].name} asked, Would You Rather...</p>
            </div>

            {page === 'home' &&
                <p>{question.optionOne.text} <span>or</span> {question.optionTwo.text}</p>
            }

            
                < SelectAnswer />
        </div>
    )
}

export default QuestionBox