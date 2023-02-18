import SignInForm from "../../components/SignInForm";
import { Link } from "react-router-dom";

export default function SignIn() {
    return <div
        className="bg-ming bg-center bg-no-repeat bg-cover w-full h-screen flex justify-center items-center">
        {/* Sign in card */}
        {/* <div className="w-[400px] h-[500px] bg-white ">

        </div> */}
        <div className="w-5/12 flex">
            <div className="bg-white text-black flex flex-col box-border pb-10 px-5 rounded-md justify-center w-full">
                <h2 className="pb-4 pt-12 flex justify-start text-3xl">Lets play...</h2>
                <SignInForm />
                <span className="my-4 flex flex-col justify-center items-center">
                    Don't have an account?
                    <span className="text-tangerine"> <Link to="/signup">Register here</Link></span>
                </span>
            </div>
        </div>


    </div>
}
