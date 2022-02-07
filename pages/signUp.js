import style from '../styles/AuthForm.module.css';
import InputField from '../components/InputField';
import AuthFormButton from '../components/AuthFormButton';

const SignUp = () => {
    return (
        <>
            <form className={style.authForm} action="/api/addUser" method="post">
                <h1 className={style.title}>Sign Up</h1>
                <InputField label="email" inputType="email" inputName="email" errorMessage="Invalid Email" placeholder="email"></InputField>
                <InputField label="username" inputType="text" inputName="username" errorMessage="Invalid username" placeholder="username"></InputField>
                <InputField label="firstname" inputType="text" inputName="firstname" errorMessage="Must enter firstname" placeholder="firstname"></InputField>
                <InputField label="lastname" inputType="text" inputName="lastname" errorMessage="Must enter a lastname" placeholder="lastname"></InputField>
                <InputField label="password" inputType="password" inputName="password" errorMessage="Invalid password" placeholder="password"></InputField>
                <InputField label="confirm password" inputType="password" inputName="confirmPassword" errorMessage="Not the same password" placeholder="confirm password"></InputField>
                <AuthFormButton></AuthFormButton>
            </form>
        </>
    );
}

export default SignUp