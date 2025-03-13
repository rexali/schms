import Link from "next/link";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useRef, useState } from "react";
import { useRouter } from "next/navigation";


export default function SignupPage(props: any) {
    const roleRef = useRef<any>(props.role);
    const [status, setStatus] = useState('');
    const [signUpData, setSignUpData] = useState({
        email: '',
        password: '',
        role: roleRef.current,
    });
    
    const router = useRouter();

    function signUpChange(e: { target: { name: string, value: string } }) {
        setSignUpData({ ...signUpData, [e.target.name]: e.target.value })
    }

    const signUpUser = async () => {

        setStatus('Sending data...');

        let response = await fetch('/api/auth/register', {
            mode: 'cors',
            method: "POST",
            body: JSON.stringify({ ...signUpData })
        }
        ).then(res => res.json());

        if (response.status === 'success') {
            setStatus('success');
            setTimeout(() => {
                router.push('/auth')
            }, 2000);
        }
    }

    return (
        <main className="form-signin mt-5">
            <form className='w-50 m-auto'>
                {/* <Image className="mb-4" src="/assets/images/service-icon-01.png" style={{ width: 'auto', height: 'auto' }} alt="avatar" width={72} height={57} /> */}
                <h1>{props.role.toUpperCase()}&apos;s Corner</h1>

                <h2 className="h3 mb-3 fw-normal">Please sign up</h2>

                <div className="form-floating">
                    <input type="email" name="email" onChange={signUpChange} className="form-control" id="floatingInput" placeholder="name@example.com" autoComplete='email' />
                    <label htmlFor="floatingInput">Email address</label>
                </div>

                <div className="form-floating">
                    <input type="password" name="password" onChange={signUpChange} className="form-control" id="floatingPassword" placeholder="Password" autoComplete='password' />
                    <label htmlFor="floatingPassword">Password</label>
                </div>

                <div className="form-floating">
                    <input type="password" name="confirmPassword" onChange={signUpChange} className="form-control" id="floatingPassword2" placeholder="Password" autoComplete='password' />
                    <label htmlFor="floatingPassword">Confirm Password</label>
                    <input name="role" ref={roleRef} defaultValue={props.role} hidden />
                </div>
                <p className="text-center text-success">{status}</p>
                <button className="btn btn-primary w-100 py-2" onClick={signUpUser} type="button">Sign up</button>
                <p>By creating an account you agree to our <a href="#" style={{ color: 'dodgerblue' }}>Terms & Privacy</a>.</p>
                <p>Already have an account, log in <Link href="/auth" style={{ color: 'dodgerblue' }}>here</Link>.</p>
                <p className="mt-5 mb-3 text-body-secondary">&copy; 2017–2024</p>
            </form>
        </main>
    )
}
