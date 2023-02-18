import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import signIn from "../api/signin";
import signUp from "../api/signup";

export default function SignUpForm() {
    const [failedSignUp, setFailedSignUp] = useState(false)
    const navigate = useNavigate()
    const { register, handleSubmit, formState: { errors } } = useForm()
    function submitHandler(data) {
        signUp(data)
            .then(res => {
                if (res == 200) {
                    signIn(data)
                        .then(res => {
                            navigate("/game")
                        })
                }
            })
    }
    console.log(errors)
    return (
        <form className="flex flex-col text-black [&>*]:my-2 w-full"
            onSubmit={handleSubmit(submitHandler)}
        >
            {/* Inputs */}
            <div className="[&>*]:my-4">

                {/* Name */}
                <div className="flex flex-col box-border w-full">
                    <label htmlFor="name" className="text-lg">Name</label>
                    <input name="name" type="text"
                        className={"border-2 border-black focus:border-red-500 box-border py-2 rounded"}
                        {...register("name")}
                    ></input>
                </div>



                <div className="flex flex-col box-border w-full">
                    <label htmlFor="email" className="text-lg">Email</label>
                    <input name="email" type="text"
                        className={"border-2 border-black focus:border-danger box-border py-2 rounded"}
                        {...register("email", {
                            pattern: {
                                value: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                                message: "Pattern not available"
                            },
                            required: {
                                value: true,
                                message: "Missing Email"
                            }

                        })}
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
                        {...register("password", {
                            required: "Password cannot be empty",
                            minLength: {
                                value: 3,
                                message: "Password too short"
                            },

                        })}
                    ></input>
                    {
                        errors.password ?
                            <p className="text-xs text-danger">Password Invalid</p>
                            : ""
                    }
                </div>

            </div>
            {/* {failedSignIn && <p className="text-xs text-red-500">Something went wrong</p>} */}
            <button className="w-full bg-accent text-[#EEEEEE] text-lg py-2 rounded">Sign Up</button>
        </form>
    )
}