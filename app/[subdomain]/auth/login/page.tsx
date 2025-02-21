import Link from "next/link";
import "./login.css";
import Image from "next/image";
export default function LoginPage(props:any) {

    return (

        <form className="modal-content animate" action="/action_page.php" style={{maxWidth:'600px', margin: 'auto'}}>
            <div className="imgcontainer">
                <Image width={100} height={100} style={{ width: 'auto', height: 'auto' }} alt="Avatar" className="avatar" src="/assets/images/meeting-01.jpg" />
            </div>
            <h1>{props.role.toUpperCase()}&apos;s Corner</h1>
            <div className="container">
                <label htmlFor="uname"><b>Username</b></label>
                <input type="text" placeholder="Enter Username" name="uname" autoComplete="name" required />

                <label htmlFor="psw"><b>Password</b></label>
                <input type="password" placeholder="Enter Password" name="psw" autoComplete="password" required />

                <button type="submit">Login</button>
                <label>
                    <input type="checkbox" checked name="remember" autoComplete="checked"/> Remember me
                </label>
                <input name="role" defaultValue={props.role} hidden/>
            </div>
            <p>Don&apos;t have an account, sign up <Link href={"/auth/account"}>here</Link> </p>
            <div className="container clearfix" style={{ backgroundColor: '#f1f1f1' }}>
                <button type="reset" className="cancelbtn">Reset</button>
                <span className="psw">Forgot <a href="#">password?</a></span>
            </div>
        </form>
    )


}