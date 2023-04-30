import React from 'react'
import vg from "../assets/2.webp"
import { AiFillGoogleCircle, AiFillAmazonCircle, AiFillYoutube, AiFillInstagram } from "react-icons/ai"

const Home = () => {
    return (
        <>
            <div className='home' id='home'>
                <main>
                    <h1>Sarath Tech</h1>
                    <p>Solution For All Problems</p>
                </main>
            </div>
            <div className="home2">
                <img src={vg} alt="graphics" />
                <div>
                    <p>
                        Lorem ipsum dolor sit amet consectetur
                        adipisicing elit. Optio quo officia ex
                        velit dolorum eaque ipsum labore ipsa, aperiam
                        autem repellendus. Quisquam ratione
                    </p>
                </div>
            </div>

            <div className="home3" id='about'>
                <div>
                    <h1>Who Are we </h1>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dicta
                        sapiente eius, ullam laborum ipsa obcaecati officiis at illum iure
                        maxime, voluptate, totam unde earum. Officiis?
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore
                        epudiandae ut nostrum quasi eligendi itaque
                        s veniam provident dignissimos est laudantium nulla cum!
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiore
                        ritatis nisi quasi inventore perspiciatis, l
                        minima reprehenderit. Quod consequuntur at fugiat, libero veniam omnis.
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ducimus
                        s obcaecati eius nostrum fuga commodi expedi
                        uptate placeat pariatur quasi mollitia cumque sed quod.
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad illum
                        doloremque labore veritatis, dolore a, similique esse in sapiente
                        laboriosam eum perferendis omnis. Mollitia, commodi! Quasi, ipsa!
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, neque vitae?

                    </p>
                </div>
            </div>
            <div className="home4" id='brands'>
                <div>
                    <h1>Brands</h1>
                    <article>
                        <div style={{ animationDelay: "0.3s" }}>
                            <AiFillGoogleCircle />
                            <p>Google</p>
                        </div>
                        <div style={{ animationDelay: "0.5s" }}>
                            <AiFillAmazonCircle/>
                            <p>Amazon</p>
                        </div>
                        <div style={{ animationDelay: "0.7s" }}>
                            <AiFillYoutube/>
                            <p>youtube</p>
                        </div>
                        <div style={{ animationDelay: "1s" }}>
                            <AiFillInstagram/>
                            <p>Instagram</p>
                        </div>
                    </article>
                </div>
            </div>
        </>
    )
}

export default Home