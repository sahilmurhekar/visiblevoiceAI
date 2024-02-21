import React from 'react';
import "../styles/navbar.css"
import { useRouter } from 'next/navigation'
const Main = () => {
    const router = useRouter();

    const handleGetStarted = () => {
        router.push('/login');
    };
    return (
        <main>
            <section id="home">
                <div className="imgs1">
                    <span className="hand"><center><img src="/images/pngwing.com (6).png" className="img1" alt="img1" /></center></span>
                    <span className="hand"><center><img src="/images/pngwing.com (5).png" className="img2" alt="img2" /></center></span>
                    <span className="hand"><center><img src="/images/pngwing.com (4).png" className="img3" alt="img3" /></center></span>
                </div>
                <div className="barr">
                    <span><p>Transcending</p> Barriers,</span>
                    <span><p>Bridging</p> Worlds:</span>
                </div>
                <div className="logo-heading">
                    <span className="pri">V</span>ISIBLE<span className="pri">V</span>OICE.AI
                </div>
                <div className="barr2">
                    <span><p>Enabling</p>Communication</span>
                    <span><p>Beyond </p> Speech, One Sign</span>
                    <span><p>at a Time.</p></span>
                </div>
                <div className="imgs2">
                    <span className="hand2"><center><img src="/images/pngwing.com (3).png" className="img4" alt="img4" /></center></span>
                    <span className="hand2"><center><img src="/images/pngwing.com (2).png" className="img5" alt="img5" /></center></span>
                    <span className="hand2"><center><img src="/images/pngwing.com (1).png" className="img6" alt="img6" /></center></span>
                </div>
                <div className="getstart">
                    <button onClick={handleGetStarted} className="btn">GET STARTED →</button>

                </div>
            </section>
            <section id="about">
                <h2><pre>A B O U T  <span className='pri'>U S</span></pre></h2>
                <div className="content">
                    <div className="left">
                        <h3>VISIBLE<span className='pri'>VOICE</span>.AI</h3>
                        <p>At VisibleVoice.ai, we are passionate about revolutionizing communication accessibility through innovative technology. Our mission is to break down barriers and empower individuals to express themselves freely, regardless of their communication abilities.
                        </p>
                    </div>
                    <div class="right">
            <h3>OUR VISI<span class='pri'>ON</span></h3>
            <p>We envision a world where communication knows no bounds, where every voice is heard, and every gesture is understood. Through cutting-edge advancements in artificial intelligence and machine learning, we strive to make this vision a reality.
            </p>
        </div>
        <div class="left">
            <h3><span class="pri">WHAT </span>WE DO?
            </h3>
            <p>VisibleVoice.ai is a pioneering platform that leverages the power of sign language recognition to bridge the gap between the deaf and hearing communities. Our state-of-the-art sign language predictor records sign gestures in real-time and translates them into voice and text, enabling seamless communication for everyone.
            </p>
        </div>
        <div class="right">
            <h3>OUR <span class="pri">COMMIT</span>MENT</h3>
            <p>We are committed to pushing the boundaries of technology to create inclusive solutions that enhance accessibility and foster understanding. By harnessing the potential of AI, we aim to empower individuals with diverse communication needs and promote inclusivity on a global scale.
            </p>
        </div>
        <div class="left">
            <h3>JO<span class="pri">IN </span>US!
            </h3>
            <p>Join us on our journey to redefine communication and make the world a more inclusive place for all. Together, we can break down barriers and amplify voices - because every voice deserves to be visible.</p>
        </div>
       
                </div>
            </section>
            <section id="contact">
                <h2><pre><span className='pri'>M E E T  </span>T H E  T E A M</pre></h2>
                <div className="profile">
                    <img src="/images/profile.png" width="150px" alt="profile" />
                    <div className="detial">
                        <span>Sahil Murhekar</span>
                        <span>AI/ML Developer</span>
                        <span>sahil.murhekar2004@gmail.com</span>
                        <span>(+91) 9403078323</span>
                        <a href="https://portfolio-aiwithsahil.vercel.app/" target="_blank"><span className="pri">Portfolio</span></a>
                    </div>
                </div>
                <div className="profile">
                    <img src="/images/profile.png" width="150px" alt="profile" />
                    <div className="detial">
                        <span>Sahil Murhekar</span>
                        <span>AI/ML Developer</span>
                        <span>sahil.murhekar2004@gmail.com</span>
                        <span>(+91) 9403078323</span>
                        <a href="https://portfolio-aiwithsahil.vercel.app/" target="_blank"><span className="pri">Portfolio</span></a>
                    </div>
                </div>
                <div className="profile">
                    <img src="/images/profile.png" width="150px" alt="profile" />
                    <div className="detial">
                        <span>Sahil Murhekar</span>
                        <span>AI/ML Developer</span>
                        <span>sahil.murhekar2004@gmail.com</span>
                        <span>(+91) 9403078323</span>
                        <a href="https://portfolio-aiwithsahil.vercel.app/" target="_blank"><span className="pri">Portfolio</span></a>
                    </div>
                </div>
                <div className="profile">
                    <img src="/images/profile.png" width="150px" alt="profile" />
                    <div className="detial">
                        <span>Sahil Murhekar</span>
                        <span>AI/ML Developer</span>
                        <span>sahil.murhekar2004@gmail.com</span>
                        <span>(+91) 9403078323</span>
                        <a href="https://portfolio-aiwithsahil.vercel.app/" target="_blank"><span className="pri">Portfolio</span></a>
                    </div>
                </div>

            </section>
        </main>
    );
};

export default Main;
