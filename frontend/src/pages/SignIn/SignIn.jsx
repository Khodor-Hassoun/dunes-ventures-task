import SignInForm from "../../components/SignInForm";

export default function SignIn() {
    return <div
        className="bg-ming bg-center bg-no-repeat bg-cover w-full h-screen flex justify-between items-center">
        {/* Sign in card */}
        <div className="w-[400px] h-[500px] bg-white ">

        </div>
        <div className="w-5/12 flex">
            <div className="bg-white text-black flex flex-col box-border pb-10 px-5 rounded-md justify-center w-10/12">
                <h2 className="pb-4 pt-12 flex justify-start text-3xl">Sign In</h2>
                <SignInForm />
            </div>

        </div>


    </div>
}
