import axios from "axios";
import { useForm } from "react-hook-form";

export default function SignInForm() {
    const baseURL = process.env.REACT_APP_BASE_URL
    const { register, handleSubmit } = useForm()
    function submitHandler(data) {
        console.log(data)
        axios.post(`${baseURL}/auth/signin`, data)
            .then(res => {
                console.log(res.data)
            })
    }
    return (
        <form className="flex flex-col text-black [&>*]:my-2 w-full"
            onSubmit={handleSubmit(submitHandler)}
        >
            {/* Inputs */}
            <div className="[&>*]:my-4">
                <div className="flex flex-col box-border w-full">
                    <label htmlFor="email" className="text-lg">Email</label>
                    <input name="email" type="text" className="border-2 border-black box-border py-2 rounded"
                        {...register("email")}
                    ></input>
                </div>

                {/* password */}
                <div className="flex flex-col w-full">
                    <label htmlFor="password" className="text-lg p-0.5">Password</label>
                    <input name="password" type="password" className="border-2 border-black box-border py-2 rounded"
                        {...register("password")}
                    ></input>
                </div>

            </div>
            {/* Email */}

            <button className="w-full bg-ming text-[#EEEEEE] text-lg py-2 rounded">Sign In</button>
        </form>
    )
}