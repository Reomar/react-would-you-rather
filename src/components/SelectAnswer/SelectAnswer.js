import { useState } from "react"

function SelectAnswer(props){

    const [selectedOption, setSelectedOption] = useState('')

    const handleRadio = (value)=>{
        setSelectedOption(value)
    }
    return(
        <form >
            <input
                type='radio'
                name='answer' id='option1'
                value='optionOne'
                checked={selectedOption === 'optionOne'}
                onClick={() => setSelectedOption('optionOne')}
            />
            <label htmlFor='option1'>option1</label>

            <input
                type='radio'
                name='answer'
                id='option2'
                value='optionTwo'
                checked={selectedOption === 'optionTwo'}
                onClick={() => setSelectedOption('optionTwo')}
            />
            <label htmlFor='option2'>option2</label>
        </form>
    )
}
export default SelectAnswer