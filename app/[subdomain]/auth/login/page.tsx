'use client';

import Link from "next/link";
import Image from "next/image";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useRef, useState } from "react";
import { useRouter } from "next/navigation";

export default function LoginPage(props: any) {
    const roleRef = useRef<any>(props.role);
    const [logInData, setLogInData] = useState({
        email: '',
        password: '',
        role: roleRef.current,
        rememberMe: ''
    });
    const router = useRouter();


    function logInChange(e: { target: { name: string, value: string } }) {
        setLogInData({ ...logInData, [e.target.name]: e.target.value })
    }

    const logInUser = () => {
        console.log(logInData);

        router.push(`/${logInData.role}`)

    }

    return (
        <main className="form-signin mt-5">
            <form className='w-50 m-auto'>
                <Image className="mb-4" src="/assets/images/service-icon-01.png" style={{ width: 'auto', height: 'auto' }} alt="avatar" width={72} height={57} />
                <h1>{props.role.toUpperCase()}&apos;s Corner</h1>

                <h2 className="h3 mb-3 fw-normal">Please sign in</h2>

                <div className="form-floating">
                    <input type="email" name="email" onChange={logInChange} className="form-control" id="floatingInput" placeholder="name@example.com" autoComplete='email' />
                    <label htmlFor="floatingInput">Email address</label>
                </div>
                <div className="form-floating">
                    <input type="password" name="password" onChange={logInChange} className="form-control" id="floatingPassword" placeholder="Password" autoComplete='password' />
                    <label htmlFor="floatingPassword">Password</label>
                    <input name="role" ref={roleRef} defaultValue={props.role} hidden />
                </div>
                <div className="form-check text-start my-3 d-flex flex-row justify-content-between">
                    <span>
                        <input className="form-check-input" name="rememberMe" type="checkbox" id="flexCheckDefault" autoComplete='check' />
                        <label className="form-check-label" htmlFor="flexCheckDefault">
                            Remember me
                        </label>
                    </span>
                    <span className="psw">Forgot <a href="#">password?</a></span>
                </div>
                <button className="btn btn-primary w-100 py-2" onClick={() => logInUser()} type="button">Sign in</button>
                <p>Don&apos;t have an account, sign up <Link href={"/auth/account"}>here</Link> </p>
                <p className="mt-5 mb-3 text-body-secondary">&copy; 2017–2024</p>
            </form>
        </main>
    )
}