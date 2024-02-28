import { useForm } from "react-hook-form";
import { useAuth } from "../hooks/useAuth";
import { Link } from "react-router-dom";

export const RegisterPage = () => {
    const createUser = useAuth();
    const { handleSubmit, register, reset } = useForm();

    const resetAll = () => {
        reset({
            firstName: "",
            lastName: "",
            email: "",
            password: "",
            phone: "",
        });
    };

    const submit = (data) => {
        let url = 'https://e-commerce-api-v2.academlo.tech/api/v1/users';

        createUser(url, data);
        
        resetAll();
    };

    return (
        <div>
            <form onSubmit={handleSubmit(submit)}>
                <div>
                    <label htmlFor="firstName">Name</label>
                    <input {...register('firstName')} id="firstName" type="text" />
                </div>

                <div>
                    <label htmlFor="lastName">Last name</label>
                    <input {...register('lastName')} id="lastName" type="text" />
                </div>

                <div>
                    <label htmlFor="email">Email</label>
                    <input {...register('email')} id="email" type="email" />
                </div>

                <div>
                    <label htmlFor="password">Password</label>
                    <input {...register('password')} id="password" type="password" />
                </div>

                <div>
                    <label htmlFor="phone">Phone</label>
                    <input {...register('phone')} id="phone" type="number" />
                </div>

                <button type="submit">Submit</button>
            </form>

            <p>
                Already registered, <Link to='/login'>log in here.</Link>
            </p>
        </div>
    )
};
