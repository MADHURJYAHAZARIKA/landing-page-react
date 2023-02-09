import React from 'react'
import vg from '../assets/2.webp'
import {AiFillGoogleCircle,AiFillAmazonCircle,AiFillYoutube,AiFillInstagram} from "react-icons/ai"


const Home = () => {
  return (
    <>
    <div className='Home'>
        <main>
             <h1>TechStar</h1>
             <p>Solution to all it solution</p>
        </main>
      
    </div>
    <div className="Home2">
      <img src={vg} alt="" srcset="" />
      <div> 
        <p> We are your one and only solution to the tech problems you face
            every day. We are leading tech company whose aim is to increase the
            problem solving ability in children.</p>
      </div>
    </div>
    <div className="Home3" id="about">
      <div>
        <h1>Who We Are?.</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate facilis alias enim voluptas consequ
          atur quibusdam maxime reprehenderit eum blanditiis neque earum inventore possimus vel cum quas laborum id,
           porro quisquam iusto dolore ex et expedita? Modi, praesentium quasi veniam perspiciatis aliquam veritatis
            placeat recusandae excepturi sunt hic quae quas, ipsum temporibus, sint explicabo optio alias maiores od
            io aperiam distinctio? Quo quae molestiae sit ab fugiat dolores dicta rem tempora possimus sapiente reic
            iendis tempore, quos, soluta voluptatum! Quos obcaecati repellat perferendis minima. Accusantium odio atq
            ue facere quia magni, possimus, quidem quas nihil vero dicta reprehenderit! Perspiciatis, ex laborum? Null
          

             </p>
      </div>
      

    </div>
    <div className="Home4" id="brands">
        <div>
          <h1>Brands</h1>
          <article>
            <div className='anime'>
              <AiFillGoogleCircle/>
              <p>Google</p>
            </div>
            <div className='anime'>
              <AiFillAmazonCircle/>
              <p>Amazon</p>
            </div>
            <div className='anime'>
              <AiFillYoutube/>
              <p>Youtube</p>
            </div>
            <div className='anime'>
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
