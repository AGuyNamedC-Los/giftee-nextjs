import styles from '../styles/InputField.module.css'

const InputField = (props) => {
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