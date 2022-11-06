import React from 'react'
import vg from "../assets/2.webp"
import {AiFillGoogleCircle,AiFillAmazonCircle,AiFillYoutube,AiFillInstagram} from "react-icons/ai"

function Home() {
  return (
    <>
    <div className='home' id="home">
        <main>
            <h1>tech Staa</h1>
            <p>this is ok</p>
        </main>
    </div>

    <div className='home2' >
        <img src={vg} alt="Graphics"/>
        <div>
            <p> 
                We are one and only solution to the tech problems you face everyday.We are leading tech company whose aimis to increase the problem solving ability in children.
            </p>
        </div>
    </div>
    <div className='home3' id="about">
        <div>
            <h1>Who we are</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla animi doloremque debitis, rerum corporis, recusandae repellat nisi illo eligendi nobis eos commodi praesentium repudiandae. Quia ex rerum, laboriosam, reiciendis explicabo architecto, corporis consequuntur nesciunt repellat rem harum consectetur est voluptates asperiores nam natus. Fuga, doloribus repellat ut recusandae delectus consectetur!</p>
        </div>
    </div>
    <div className='home4' id="brands">
        <div className='nice'>
            <h1>Brands</h1>
            <article>
                <div className='okk' style={{animationDelay:"0.3s"}}>
                    <AiFillGoogleCircle/>
                    <p>Google</p>
                </div>
                <div className='okk' style={{animationDelay:"0.5s"}}>
                    <AiFillAmazonCircle/>
                    <p>Amazon</p>
                </div>
                <div  className='okk'style={{animationDelay:"0.7s"}}>
                    <AiFillYoutube/>
                    <p>YouTube</p>
                </div>
                <div className='okk' style={{animationDelay:"1s"}}>
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