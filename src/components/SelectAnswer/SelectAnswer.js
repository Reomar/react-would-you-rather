import { useState } from "react"

function SelectAnswer(props){

    const [selectedOption, setSelectedOption] = useState('')

    const {question} = props

    const handleRadio = (value)=>{
        setSelectedOption(value)
    }
    return(
        <div >
            <div onClick={() => setSelectedOption('optionOne')}>
                <input
                    type='radio'
                    name='answer' id='option1'
                    value='optionOne'
                    checked={selectedOption === 'optionOne'}
                ></input>
                <label htmlFor='option1'>{question.optionOne.text}</label>
            </div>

            <div onClick={() => setSelectedOption('optionTwo')}>
                <input
                    type='radio'
                    name='answer'
                    id='option2'
                    value='optionTwo'
                    checked={selectedOption === 'optionTwo'}
                />
                <label htmlFor='option2'>{question.optionTwo.text}</label>
            </div>
        </div>

        
    )
}
export default SelectAnswer