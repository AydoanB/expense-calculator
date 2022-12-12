import './SingleInput.css'
import { useState } from 'react'


interface InputProps {
    label: string,
    type: string,
    inputData: any,
}

function SingleInput({ label, type, inputData }: InputProps) {
    const [inputFieldText, setInputFieldText] = useState('');

const handleChange = () =>{
    setInputFieldText(inputData);
}

    return (<div onChange={handleChange} className='new-expense__control'>
        <label>{label}</label>
        <input type={type} />
    </div>)
}

export default SingleInput;