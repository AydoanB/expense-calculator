import './SingleInput.css'

interface InputProps {
    label: string,
    type: string,
    inputData: any,
    defaultValue: string | number
}

function SingleInput({ label, type, inputData, defaultValue }: InputProps) {

    return (<div onChange={inputData} className='new-expense__control'>
        <label>{label}</label>
        <input type={type} defaultValue={defaultValue} />
    </div>)
}

export default SingleInput;