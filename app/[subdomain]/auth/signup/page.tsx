import Link from "next/link";
import 'bootstrap/dist/css/bootstrap.min.css';

    export default function SignupPage(props: any) {

        return (
            <main className="form-signin mt-5">
                <form className='w-50 m-auto'>
                    {/* <Image className="mb-4" src="/assets/images/service-icon-01.png" style={{ width: 'auto', height: 'auto' }} alt="avatar" width={72} height={57} /> */}
                    <h1>{props.role.toUpperCase()}&apos;s Corner</h1>
    
                    <h2 className="h3 mb-3 fw-normal">Please sign up</h2>
    
                    <div className="form-floating">
                        <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" autoComplete='email' />
                        <label htmlFor="floatingInput">Email address</label>
                    </div>

                    <div className="form-floating">
                        <input type="password" className="form-control" id="floatingPassword" placeholder="Password" autoComplete='password' />
                        <label htmlFor="floatingPassword">Password</label>
                    </div>

                    <div className="form-floating">
                        <input type="password" className="form-control" id="floatingPassword2" placeholder="Password" autoComplete='password' />
                        <label htmlFor="floatingPassword">Confirm Password</label>
                        <input name="role" defaultValue={props.role} hidden />
                    </div>

                    <div className="form-check text-start my-3 d-flex flex-row justify-content-between">
                        <span>
                        <input className="form-check-input" type="checkbox" value="remember-me" id="flexCheckDefault" autoComplete='check' />
                        <label className="form-check-label" htmlFor="flexCheckDefault">
                            Remember me
                        </label>
                        </span>
                        <span className="psw">Forgot <a href="#">password?</a></span>
                    </div>
                    <button className="btn btn-primary w-100 py-2" type="submit">Sign in</button>
                    <p>By creating an account you agree to our <a href="#" style={{ color: 'dodgerblue' }}>Terms & Privacy</a>.</p>
                    <p>Already have an account, log in <Link href="/auth" style={{ color: 'dodgerblue' }}>here</Link>.</p>
                    <p className="mt-5 mb-3 text-body-secondary">&copy; 2017–2024</p>
                </form>
            </main>
        )
    }
