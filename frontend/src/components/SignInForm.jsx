import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import signIn from "../api/signin";

export default function SignInForm({ setToken }) {
    const [failedSignIn, setFailedSignIn] = useState(false)
    const navigate = useNavigate()
    const { register, handleSubmit, formState: { errors } } = useForm()
    function submitHandler(data) {
        signIn(data).then(res => {
            console.log(res)
            setToken(res.token)
            navigate("/game")
        }).catch(e => {
            console.log(e)
            setFailedSignIn(true)
        })
    }
    console.log(errors)
    return (
        <form className="flex flex-col text-black [&>*]:my-2 w-full"
            onSubmit={handleSubmit(submitHandler)}
        >
            {/* Inputs */}
            <div className="[&>*]:my-4">
                <div className="flex flex-col box-border w-full">
                    <label htmlFor="email" className="text-lg">Email</label>
                    <input name="email" type="text"
                        className={"border-2 border-black focus:border-danger box-border py-2 rounded"}
                        {...register("email")}
                    ></input>
                    {
                        errors.email ?
                            <p className="text-xs text-danger">Email Invalid</p>
                            : ""
                    }
                </div>

                {/* password */}
                <div className="flex flex-col w-full">
                    <label htmlFor="password" className="text-lg p-0.5">Password</label>
                    <input name="password" type="password" className="border-2 border-black box-border py-2 rounded"
                        {...register("password")}
                    ></input>
                    {
                        errors.password ?
                            <p className="text-xs text-danger">Password Invalid</p>
                            : ""
                    }
                </div>

            </div>
            {failedSignIn && <p className="text-xs text-red-500">Something went wrong</p>}
            <button className="w-full bg-accent text-[#EEEEEE] text-lg py-2 rounded">Sign In</button>
        </form>
    )
}