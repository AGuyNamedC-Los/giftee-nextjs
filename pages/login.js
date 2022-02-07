import style from '../styles/AuthForm.module.css';
import InputField from '../components/InputField';
import AuthFormButton from '../components/AuthFormButton';


const Login = () => {
    return (
        <>
            <form className={style.authForm}>
                <h1 className={style.title}>Login to Your Account</h1>
                <InputField label="email" inputType="email" inputName="email" errorMessage="Invalid Email" placeholder="email"></InputField>
                <InputField label="password" inputType="password" inputName="password" errorMessage="Invalid password" placeholder="password"></InputField>
                <AuthFormButton></AuthFormButton>
            </form>
        </>
    );
}

export default Login