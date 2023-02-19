import SignInForm from "../../components/SignInForm";
import { Link } from "react-router-dom";

export default function SignIn({ setToken }) {
    return <div
        className="bg-background-color bg-center bg-no-repeat bg-cover w-full h-screen flex justify-center items-center">
        {/* Sign in card */}
        <div className="xl:w-4/12 flex w-7/12">
            <div className="bg-white text-black flex flex-col box-border pb-10 px-5 rounded-md justify-center w-full">
                <h2 className="pb-4 pt-12 flex justify-start text-3xl">Lets play...</h2>
                <SignInForm setToken={setToken} />
                <span className="my-4 flex flex-col justify-center items-center">
                    Don't have an account?
                    <span className="text-accent"> <Link to="/signup">Register here</Link></span>
                </span>
            </div>
        </div>


    </div>
}
