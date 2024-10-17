import React, { useState } from 'react'
import '../Login/Login.css';
import { Link , useNavigate} from 'react-router-dom';
import { auth, googleProvider, signInWithEmailAndPassword,signInWithPopup} from '../../../firebaseConfig';


function Login ()  {
    const [email, setEmail] = useState('');
    const [password , setPassword] = useState('');
    const[error, setError] = useState('');
    const [success, setSuccess]=useState('');
    const [isSubmit, setIsSubmit] = useState(false);
    const navigate = useNavigate();

    const handleLogin = (e) =>{
        e.preventDefault();
        setError('');
        setSuccess('');
        setIsSubmit(true)
    }
    signInWithEmailAndPassword(auth,email,password)
    .then((userCredential) => {
        const user = userCredential.user;

        alert('Login Successful!');
        navigate('/', {state:{userEmail:user.email}})
    })
    .catch((error) =>{
        if (error.code ==='auth/wrong-password'){
            alert('Invalid password. Please try again.');
        } else if (error.code === 'auth/user-not-found'){
            alert('No account found with this email .');
        } else{
            setError(error.message)
        };
    })
    const handleLoginGoogle = () =>{
        signInWithPopup(auth,googleProvider)
        .then((result) =>{
            alert('Login with Google successful!');
            const user = result.user;
        navigate('/', {state:{userEmail:user.email, }});
            })
            .catch((error) =>{
                setError(error.message);
            });
    };

    return (
        <div className='login-page'>
            <div className='background-page'></div>
                <main className='main-login'>
                   <div className='container-login'>
                           <form className='login-form' onSubmit={handleLogin}>
                            <h1 className='title-login'>Login</h1>
                            <div className='login-inputbox'>
                                <input type="text" placeholder=''id='user' className='login-field' required onChange={(e) => {setEmail(e.target.value)}}/>
                                <label className='login-label'> Email</label>
                            </div>
                            <div className='login-inputbox'>
                                <input type="password" placeholder='' className='login-field' required onChange={(e) => {setPassword(e.target.value)}}/>
                                <label className='login-label'>Password</label>
                            </div>

                            <button className='btn-login'>Login</button>
                            

                        {isSubmit && error && <p style={{color:"red"}}>{error}</p>}
                        {isSubmit && success && <p style={{color:"green"}}>{success}</p>}

                        
                            <div className='choose'>
                            <span className='span-choose'>Hoặc</span>
                        </div>
                            <div className='social-btn-login'>
                                <button className='btn-gg' onClick={handleLoginGoogle} type='button'>
                                    <img  src='/img/gmail.jpg' className="gmail" alt="logo" />
                                    Sign up with Google
                                </button>
                            </div>
                            <div className='register'>
                                <p className='register-p'>
                                    Don't have an account ?
                                    <Link className='register-link' to='/signup'>Sign Up</Link>
                                </p>
                            </div>
                        </form>
                    </div>
                
            </main>
            </div>
    )
}

export default Login
