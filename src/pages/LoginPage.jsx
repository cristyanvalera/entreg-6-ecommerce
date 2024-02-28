import { useForm } from "react-hook-form";
import { useAuth } from "../hooks/useAuth";
import { Link } from "react-router-dom";

export const LoginPage = () => {
    const { handleSubmit, register, reset } = useForm();
    const createToken = useAuth();

    const submit = (data) => {
        let url = 'https://e-commerce-api-v2.academlo.tech/api/v1/users/login';

        createToken(url, data);

        reset({ email: '', password: '' });
    };

    return (
        <div>
            <form onSubmit={handleSubmit(submit)}>
                <div>
                    <label htmlFor="email">Email</label>
                    <input {...register('email')} id="email" type="email" />
                </div>

                <div>
                    <label htmlFor="password">Password</label>
                    <input {...register('password')} id="password" type="password" />
                </div>

                <button type="submit">Submit</button>
            </form>

            <p>
                If you are not registered, you can <Link to='/register'>register here.</Link>
            </p>
        </div>
    )
};
