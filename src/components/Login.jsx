import { useState } from "react";
import "./Login.css";

const Login = () => {
    const [signup, setSignup] = useState(false);

    return (
        <main>
            <div className="login-box">
                <aside>
                    <h1>
                        {signup ? "Looks like you're new here!" : "Login"}
                    </h1>
                    <p>
                        {signup
                        ? "Sign up with your email or mobile number to get started"
                        : "Get access to your Orders, Wishlist and Recommendations"}
                    </p>
                </aside>
                <form action="/login" className="login-form">
                    <div>
                        <input type="text" name="email" id="email" autoComplete="off" />
                        <span className="blue-underline"></span>
                        <label htmlFor="email" className="email-label">
                            Enter Email/Mobile number
                        </label>
                    </div>
                    <div className="agreement">
                        By continuing, you agree to Flipkart&apos;s
                        <a target="_blank" href="https://www.flipkart.com/pages/terms" rel="noreferrer">
                            &nbsp;Terms of Use&nbsp;
                        </a>
                        and
                        <a target="_blank" href="https://www.flipkart.com/pages/privacypolicy" rel="noreferrer">
                            &nbsp;Privacy Policy
                        </a>
                        .
                    </div>
                    <button type="button">
                        {signup ? "Request OTP" : "Continue"}
                    </button>
                    <div className="signup-link">
                        <a href={null} onClick={() => { setSignup(!signup) }}>
                            {signup ? "Existing User? Log in" : "New to Flipkart? Create an account"}
                        </a>
                    </div>
                </form>
            </div>
        </main>
    );
};

export default Login;