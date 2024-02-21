import React, { useState } from 'react';
import { getAuth, createUserWithEmailAndPassword, updateProfile  } from "firebase/auth";
import { initFirebase } from '../firebase/firebase';
import { useRouter } from 'next/navigation';


const RegisterPage = () => {
  const router = useRouter();
  const auth = getAuth();
  const [displayName, setDisplayName] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleDisplayNameChange = (e) => setDisplayName(e.target.value);
  const handleUsernameChange = (e) => setUsername(e.target.value);
  const handleEmailChange = (e) => setEmail(e.target.value);
  const handlePasswordChange = (e) => setPassword(e.target.value);

  const signUp = async (e) => {
    e.preventDefault();
    try {
      // Create a new user with email and password
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
  
      // Set the display name (you can also update other user properties here)
      await updateProfile(userCredential.user, {
        displayName: displayName || username, // Use displayName if provided, else use username
      });
  
      // Redirect to a different page after successful registration
      router.push('/dashboard');
    } catch (error) {
      console.error('Registration error:', error.message);
      // Handle the error (show an error message to the user, etc.)
    }
    
  };


  

  return (
    <main className="login">
      <div className="div-login">
        <h2>
          <span className='pri'>REG</span>ISTER
        </h2>
        <div className="box">
          <form id="register-form" action="login.html">
            <div className="input-group">
              <div className="input-field">
                <input type="text" placeholder="Full Name" required name="firstname" onChange={handleDisplayNameChange} />
              </div>
            </div>
            <div className="input-group">
              <div className="input-field">
                <img src="/images/pngwing.com (8).png" alt="icon" />
                <input type="text" placeholder="Username" required name="username" id="username" onChange={handleUsernameChange} />
                <div className="error"></div>
              </div>
            </div>
            <div className="input-group">
              <div className="input-field">
                <img src="/images/pngwing.com (9).png" alt="icon" />
                <input type="email" placeholder="Email-id" required name="email" id="email" onChange={handleEmailChange}/>
                <div className="error"></div>
              </div>
            </div>
            <div className="input-group">
              <div className="input-field">
                <img src="/images/pngwing.com (7).png" alt="icon" />
                <input type="password" placeholder="Password" id="password" required name="password" onChange={handlePasswordChange}
/>
                <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAABoElEQVR4nO1Uu0pDQRBNYacYtVURFAz+hIi/olb5ghQx3xBIds/ZGwhJpwTShAiCIMYmhRYWaVQs0qpoRC2VwQmsN0seTbBwYeAy58yZuTM7m0j8nz99oihaApAm2QDQBfCp1lVfWjgTC+dyuRmSGZJvJL9GmHAyEjOWuHNuhWTbEzi11u4ZY1LVanVWTL7FJ5jHa0vsUPFSqbRG8l4D7gBsjypIOABuNeZeNILEQqEwB6AjRAAX5XJ5oY8Vi8VVADUAPTGSdfmLPk4yCeBcYzuiNZCAZEWruPYJxR/xp0DvnwXzC5RYxSq/xK21Owp8kNyItaCmWMNauyx9BtBU33GsyA3V+BJNH2hpwGGgxz3B/AFK5cp/DXQiq1grlCA7YYKXAD83kMBr0bsxZj1WUV2H15QkKn6iviOf65zblEUcaFFsyFdy1/t+Y0xKBhoY8qP/V/l8fp7kTXDIgWsqVy4Za8mx9FxMKvfFjTGLJC+HXtP4osnyjLNozrldkg8jF23YU0FyP4qiLalMTL6dcwcAziZ6Kqby2E3luf4/Uz3fOiUT1fn36X4AAAAASUVORK5CYII=" onclick="hidepassword()" id="open" />
                <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAAEBUlEQVR4nO1ZaWhdVRA+auK+1ii44QIiiLuioP5Q/KGgQSSp+sOFYlUQQdBfLnAVQUR44CPJme8794anQREeBEREaEUFRUlCq2ilVShtUay21gWtW40+mWYuXIJ5793kvkW5H+RH0jkz883cM2dm6lyJEiVKlCjRB6jVaoeSvBbAUySnSW4iuQfAbwDmSX4PYBvJdQCeJzlCcsj1C0TkGpIvAPiJZCPPjxFcLyJ3VavVQ3pCAMAwgLmMU3+T3EiyEkK4NYRwURzHqzRT9Xr9IO/9cSJyNskbATwB4E3NVub8VyQf6Rohc2ZdxoFvAETe+7Py6qrVaseSXAvgo0ymtipZ10mEEO4FsNcM7iH5oEa8CN0AbiD5SSZAIHm4KxIkBwFMZqL24tjY2PGFGnHORVE0AODhzCf3oYicUpgBkq9blDQbtxemeGl75wP43Gx+OTk5ecKKlepFJbmL5E4Al7kuIY7jVQDeIvm73stClOqlHB8fP9J1GY1G44Cpqakjum23RIn/OqIoGmgqoGUOwA6Sz7o+BYDbSO4TkdElhSYmJk5TIZJ/kbzS9RnihZK82x7L1U2FtekzQW3DB10fgWRivn2gpbmV8DH6mtqBJ12fIIRwvXXY+7z3F7d1CMB1+nnZwRHXY4jIGSS/teA+muswyaft4I8icq7rEarV6tEAPjZf1mvLlEtBFEUHknzVFHztvT/PdRm1hXllxnz4TH9flqJKpXKYNW4NS+0lrksgOWQTp9reniTJ6UXU7XQO+UVE7nEdhohcRfKLjN0rilgs/GrK0ujojPBSJzYg9Xr9YACPkfzT7PyRPgXe+xOXpVSXBwB+MEXeiI3qWsf+9rOW5wJH3WGb1xv2IFd1OsyMv1tInpRLqVaptNxp9PXip/+mSwYAb2TSvlNbGu/9OXmd1yjr5gTA5ky2PyV59SKZTbkzE0I401YzevC1pV53XcaRnF20p9Iy6UneGcfxpXpBdSDTrGl04zi+QERuJvkcyfcyn07Dery7/6285iaTJMnJmfS+3eqzIflQWp4BfJd3Qaf3z7aPSqTWzFYuMpkLPZskyVHNFCvJNHMhhJs0kiJyOcnHSb4M4P1MZlOyutCbBvCMdg+qwz7Vec1OCOHUdsmormZENN1z7ax6SD6QrmyaNXApkWa6ALxicpVWdpUMgA3aOLqC9lw7LBu3tJBtSURELtS+DsDeTuzLlgSA+9IKk61oyyVicvvXsPqOFOpsi2zsv6C6rG5Dvi0i1nE3dIemrVFhDjcxuMYit7lVNvIQMdkZk7/fdRrp4wXgjjady0NkddrprtjRNoy9o9Wt3bkgD5H6wnp2Vv+bwfUb8hBRtJzFewV7m97ttR8lSpRw/w/8A/Am/KMil075AAAAAElFTkSuQmCC" width="24px" onclick="showpassword()" id="close" />

                <div className="error"></div>
              </div>
            </div>
            <br />
            <center>
              <a href="login.html">
                <button type="submit" onClick={signUp} className="btn" style={{ padding: '10px' }}>
                  REGISTER →
                </button>
              </a>
            </center>
          </form>
        </div>
      </div>
    </main>
  );
};

export default RegisterPage;
