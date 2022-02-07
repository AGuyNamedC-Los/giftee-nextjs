import style from '../styles/AuthFormButton.module.css';

const AuthFormButton = () => {
    return (
        <input className={style.authFormButton} type="submit" value="Login"/>
    );
}

export default AuthFormButton;