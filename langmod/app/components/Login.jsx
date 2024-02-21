import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { initFirebase } from '../firebase/firebase';
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import {useAuthState} from "react-firebase-hooks/auth"

const LoginPage = () => {
    const router = useRouter();

    initFirebase();
    const provider = new GoogleAuthProvider();
    const auth = getAuth();
    const [user, loading] = useAuthState(auth);
    const [passwordVisible, setPasswordVisible] = useState(false);

    if (loading) {
        return <div>Loading.....</div>
    }
    if (user) {
        router.push("/dashboard")
        return <div> Welcome {user.displayName}</div>
    }

    const signIn = async () => {
        const result = await signInWithPopup(auth, provider)
        console.log(result.user)
    }







    const togglePasswordVisibility = () => {
        setPasswordVisible(!passwordVisible);
    };

    const hidePassword = () => {
        setPasswordVisible(false);
    };

    const showPassword = () => {
        setPasswordVisible(true);
    };

    const handleGetStarted = () => {
        router.push('/register');
    };
    return (
        <>

            <main className="login">
                <div className="div-login">
                    <h2>
                        LOG<span className="pri">IN</span>
                    </h2>
                    <br />
                    <div className="box">
                        <form action="#">
                            <div className="input-group">
                                <div className="input-field">
                                    <img src="/images/pngwing.com (8).png" width="25" />
                                    <input type="text" placeholder="Username" required name="username" />
                                </div>
                            </div>
                            <br />
                            <div className="input-group">
                                <div className="input-field">
                                    <img src="/images/pngwing.com (7).png" width="25" />
                                    <input type={passwordVisible ? 'text' : 'password'} placeholder="Password" id="password" required name="password" />
                                    <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAABoElEQVR4nO1Uu0pDQRBNYacYtVURFAz+hIi/olb5ghQx3xBIds/ZGwhJpwTShAiCIMYmhRYWaVQs0qpoRC2VwQmsN0seTbBwYeAy58yZuTM7m0j8nz99oihaApAm2QDQBfCp1lVfWjgTC+dyuRmSGZJvJL9GmHAyEjOWuHNuhWTbEzi11u4ZY1LVanVWTL7FJ5jHa0vsUPFSqbRG8l4D7gBsjypIOABuNeZeNILEQqEwB6AjRAAX5XJ5oY8Vi8VVADUAPTGSdfmLPk4yCeBcYzuiNZCAZEWruPYJxR/xp0DvnwXzC5RYxSq/xK21Owp8kNyItaCmWMNauyx9BtBU33GsyA3V+BJNH2hpwGGgxz3B/AFK5cp/DXQiq1grlCA7YYKXAD83kMBr0bsxZj1WUV2H15QkKn6iviOf65zblEUcaFFsyFdy1/t+Y0xKBhoY8qP/V/l8fp7kTXDIgWsqVy4Za8mx9FxMKvfFjTGLJC+HXtP4osnyjLNozrldkg8jF23YU0FyP4qiLalMTL6dcwcAziZ6Kqby2E3luf4/Uz3fOiUT1fn36X4AAAAASUVORK5CYII=" onClick={togglePasswordVisibility} id="open" style={{ display: !passwordVisible ? 'inline' : 'none' }} />
                                    <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAAEBUlEQVR4nO1ZaWhdVRA+auK+1ii44QIiiLuioP5Q/KGgQSSp+sOFYlUQQdBfLnAVQUR44CPJme8794anQREeBEREaEUFRUlCq2ilVShtUay21gWtW40+mWYuXIJ5793kvkW5H+RH0jkz883cM2dm6lyJEiVKlCjRB6jVaoeSvBbAUySnSW4iuQfAbwDmSX4PYBvJdQCeJzlCcsj1C0TkGpIvAPiJZCPPjxFcLyJ3VavVQ3pCAMAwgLmMU3+T3EiyEkK4NYRwURzHqzRT9Xr9IO/9cSJyNskbATwB4E3NVub8VyQf6Rohc2ZdxoFvAETe+7Py6qrVaseSXAvgo0ymtipZ10mEEO4FsNcM7iH5oEa8CN0AbiD5SSZAIHm4KxIkBwFMZqL24tjY2PGFGnHORVE0AODhzCf3oYicUpgBkq9blDQbtxemeGl75wP43Gx+OTk5ecKKlepFJbmL5E4Al7kuIY7jVQDeIvm73stClOqlHB8fP9J1GY1G44Cpqakjum23RIn/OqIoGmgqoGUOwA6Sz7o+BYDbSO4TkdElhSYmJk5TIZJ/kbzS9RnihZK82x7L1U2FtekzQW3DB10fgWRivn2gpbmV8DH6mtqBJ12fIIRwvXXY+7z3F7d1CMB1+nnZwRHXY4jIGSS/teA+muswyaft4I8icq7rEarV6tEAPjZf1mvLlEtBFEUHknzVFHztvT/PdRm1hXllxnz4TH9flqJKpXKYNW4NS+0lrksgOWQTp9reniTJ6UXU7XQO+UVE7nEdhohcRfKLjN0rilgs/GrK0ujojPBSJzYg9Xr9YACPkfzT7PyRPgXe+xOXpVSXBwB+MEXeiI3qWsf+9rOW5wJH3WGb1xv2IFd1OsyMv1tInpRLqVaptNxp9PXip/+mSwYAb2TSvlNbGu/9OXmd1yjr5gTA5ky2PyV59SKZTbkzE0I401YzevC1pV53XcaRnF20p9Iy6UneGcfxpXpBdSDTrGl04zi+QERuJvkcyfcyn07Dery7/6285iaTJMnJmfS+3eqzIflQWp4BfJd3Qaf3z7aPSqTWzFYuMpkLPZskyVHNFCvJNHMhhJs0kiJyOcnHSb4M4P1MZlOyutCbBvCMdg+qwz7Vec1OCOHUdsmormZENN1z7ax6SD6QrmyaNXApkWa6ALxicpVWdpUMgA3aOLqC9lw7LBu3tJBtSURELtS+DsDeTuzLlgSA+9IKk61oyyVicvvXsPqOFOpsi2zsv6C6rG5Dvi0i1nE3dIemrVFhDjcxuMYit7lVNvIQMdkZk7/fdRrp4wXgjjady0NkddrprtjRNoy9o9Wt3bkgD5H6wnp2Vv+bwfUb8hBRtJzFewV7m97ttR8lSpRw/w/8A/Am/KMil075AAAAAElFTkSuQmCC" width="24px" id="close" onClick={togglePasswordVisibility} style={{ display: passwordVisible ? 'inline' : 'none' }} />
                                </div>
                            </div>
                            <div style={{ display: 'flex', justifyContent: 'space-between', padding: '0px 20px' }} className="for">
                                <a href="password_reset.html" style={{ textDecoration: 'none', color: 'white' }}>
                                    Forget Password?
                                </a>
                                <span style={{ display: 'flex', flexDirection: 'row', gap: '5px' }}>
                                    <p>New User? </p>
                                    <button onClick={handleGetStarted} style={{ textDecoration: 'none', color: 'white', backgroundColor: 'inherit' }}>
                                        Register
                                    </button>
                                </span>
                            </div>
                            <br />
                            <center>
                                <a href="">
                                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="73" height="73" viewBox="0 0 48 48">
                                        <path fill="#FFC107" d="M43.611," />
                                        <path fill="#FF3D00" d="M6.306,14.691l6.571," />
                                        <path fill="#4CAF50" d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z" />
                                        <path fill="#1976D2" d="M43.61" />
                                    </svg>
                                </a>
                            </center>
                            <center>
                                <h3 style={{ fontSize: '15px' }}>CONTINUE WITH <button onClick={signIn} className="pri">GOOGLE</button></h3>
                            </center>
                            <br />
                            <center>
                                <a href="#">
                                    <button type="submit" className="btn" style={{ paddingTop: '10px', paddingBottom: '10px' }}>
                                        LOGIN →
                                    </button>
                                </a>
                            </center>
                        </form>
                    </div>
                </div>
            </main>



        </>
    );
};

export default LoginPage;
