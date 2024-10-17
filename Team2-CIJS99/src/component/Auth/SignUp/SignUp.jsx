import React, { useState } from 'react'
import '../SignUp/SignUp.css'
import { useNavigate , Link} from 'react-router-dom';
import { auth, googleProvider, createUserWithEmailAndPassword,signInWithPopup } from '../../../firebaseConfig';
function SignUp(){
    const [email, setEmail] = useState('');
    const [userName , setUserName] = useState('');
    const [password , setPassword] = useState('');
    const[confirmPassword , setConfirmPassword] = useState('');
    const[error, setError] = useState('');
    const [success, setSuccess]=useState('');
    const navigate = useNavigate();

    const validateEmail = (email) => {
        const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
        return emailRegex.test(email);
    };
    const validatePassword=(password) =>{
        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{6,}$/;
        return passwordRegex.test(password);
      };
    
    const handleSignUp = (e) =>{ 
        e.preventDefault();
        setError('');
        setSuccess('');
        if (password !== confirmPassword){
            alert('Password and confirm password do not match');
            return;
        };
        if (!validateEmail(email)){
            alert('Invalid email');
        };
        if(!validatePassword(password)){
            alert('Password must be at least 6 characters including at least 1 uppercase letter, 1 lowercase letter, 1 number and 1 character');
            return;
        }
        createUserWithEmailAndPassword(auth,email,password)
        .then((userCredential) => {
            const user = userCredential.user;
            alert('Sign up successful!');
            navigate('/');
        }).catch((error) =>{
            if (error.code ==='auth/email-already-in-use'){
                alert('This email is already in use')
            }
            setError(error.message);
        })
    };
    const handleSignUpGoogle = () =>{
        signInWithPopup(auth,googleProvider)
        .then((result) =>{
            alert('Sign up with Google successful!');
            const user = result.user;
        navigate('/', {state:{userUseName:user.userName, }});
            })
            .catch((error) =>{
                setError(error.message);
            });
    };
    
    return (
        <div className='signup-page'>
            <div className='background-page'></div>
            <main className='main-sigup'>
                <div className='container-signup'>
                    <form className='signup-form' onSubmit={handleSignUp}>
                        <h1 className='title-signup'>SignUp</h1>
                        <div className='signup-inputbox'>
                            <input type="text" placeholder='' id='user-signup'
                             className='signup-field' 
                             required
                             onChange={(e) => setEmail(e.target.value)} />
                            <label className='signup-label'> Email</label>
                        </div>
                        <div className='signup-inputbox'>
                            <input type="text" placeholder='' id='userName-signup'
                             className='signup-field' 
                             onChange={(e) => setUserName(e.target.value)}
                             required />
                            <label className='signup-label'>User Name</label>
                        </div>
                        <div className='signup-inputbox'>
                            <input type="password" placeholder='' className='signup-field'
                            onChange={(e) => setPassword(e.target.value)} required />
                            <label className='signup-label'>Password</label>
                        </div>
                        <div className='signup-inputbox'>
                            <input type="password" placeholder='' className='signup-field'
                            onChange={(e) => setConfirmPassword(e.target.value)} required />
                            <label className='signup-label'>Confirm Password</label>
                        </div>


                        {error && <p style={{color:"red"}}>{error}</p>}
                        {success && <p style={{color:"green"}}>{success}</p>}

                        
                        <button className='btn-signup' type='submit'>SignUp</button>
                        
                        <div className='choose'>
                            <span className='span-choose-signup'>Hoặc</span>
                        </div>
                        <div className='social-btn'>
                                <button className='btn-gg' onClick={handleSignUpGoogle}>
                                    <img  src='/img/gmail.jpg' className="gmail" alt="logo" />
                                    Sign up with Google
                                </button>
                            </div>
                            <div className='login'>
                            <p className='login-p'>
                                Have an account?
                                <Link className='login-link' to='/login'>LogIn</Link>
                            </p>
                        </div>
                    </form>
                </div>

            </main>
        </div>
    )
}

export default SignUp
