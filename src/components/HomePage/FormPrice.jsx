import { useForm } from "react-hook-form";

export const FormPrice = ({ setFormValue }) => {
    const { register, reset, handleSubmit } = useForm();

    const submit = (data) => {
        setFormValue({
            from: data.from || 0,
            to: data.to || Infinity,
        });

        reset({ from: 0, to: Infinity });
    };

    return (
        <form onSubmit={handleSubmit(submit)}>
            <div>
                <label htmlFor="from">From</label>
                <input {...register('from')} id="from" type="number" />
            </div>

            <div>
                <label htmlFor="to">To</label>
                <input {...register('to')} id="to" type="numberc" />
            </div>

            <button>Filter Price</button>
        </form>
    );
};
