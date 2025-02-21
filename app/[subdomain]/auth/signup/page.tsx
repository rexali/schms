import Link from "next/link";
import "./signup.css";
export default function SignupPage(props:any) {

    return (
        <form action="action_page.php" style={{ border: '1px solid #ccc', maxWidth: '600px', margin: 'auto' }}>
            <div className="container">
                <h1>{props.role.toUpperCase()}&apos;s Corner</h1>
                <label htmlFor="email"><b>Email</b></label>
                <input type="text" placeholder="Enter Email" name="email" autoComplete="email" required />

                <label htmlFor="psw"><b>Password</b></label>
                <input type="password" placeholder="Enter Password" name="psw" autoComplete="password" required />

                <label htmlFor="psw-repeat"><b>Repeat Password</b></label>
                <input type="password" placeholder="Repeat Password" name="psw-repeat" autoComplete="password" required />

                <label>
                    <input type="checkbox" checked name="remember" style={{ marginBottom: '15px' }} autoComplete="checked" /> Remember me
                </label>
                <input name="role" defaultValue={props.role} hidden/>
                <p>By creating an account you agree to our <a href="#" style={{ color: 'dodgerblue' }}>Terms & Privacy</a>.</p>
                <p>Already have an account, log in <Link href="/auth" style={{ color: 'dodgerblue' }}>here</Link>.</p>
                <div className="clearfix">
                    <button type="reset" className="cancelbtn">Reset</button>
                    <button type="submit" className="signupbtn">Sign Up</button>
                </div>
            </div>
        </form>
    )


}