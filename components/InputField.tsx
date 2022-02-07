import styles from '../styles/InputField.module.css'

export interface InputFieldProps {
    label: string;
    inputType: string;
    inputId: string;
    inputName: string;
    placeholder: string;
    errorMessage: string;
}

const InputField = (props: InputFieldProps) => {
    return (
        <div className={styles.inputField}>
            <label>{props.label}</label>
            <input 
                type={props.inputType} 
                id={props.inputId} 
                name={props.inputName} 
                placeholder={props.placeholder}
            />
            <p>{props.errorMessage}</p>
        </div>
    );
}

export default InputField;