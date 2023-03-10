import { Link } from "react-router-dom";
import SignUpForm from "../../components/SignUpForm";

export default function SignUp() {
    return <div
        className="bg-background-color bg-center bg-no-repeat bg-cover w-full h-screen flex justify-center items-center">
        {/* Sign in card */}
        <div className="xl:w-4/12 flex w-7/12">
            <div className="bg-white text-black flex flex-col box-border pb-10 px-5 rounded-md justify-center w-full">
                <h2 className="pb-4 pt-12 flex justify-start text-3xl">Get Started</h2>
                <SignUpForm />
                <span className="my-4 flex flex-col justify-center items-center">
                    Already have an account?
                    <span className="text-accent"> <Link to="/">Click here</Link></span>
                </span>
            </div>
        </div>


    </div>
}
