import { NextApiRequest } from "next";
import { NextApiResponse } from "next";
import InputField from "../components/InputField";
import { useRouter } from 'next/router';


const Login = () => {
    const router = useRouter();

    return (
        <>
            <div>Login Page</div>
            <InputField label="email" inputType="email" inputName="email" errorMessage="Invalid Email"></InputField>
        </>
    );
}

export default Login