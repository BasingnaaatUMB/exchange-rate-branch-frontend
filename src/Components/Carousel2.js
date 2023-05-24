import React from 'react'
import Carousel from 'react-bootstrap/Carousel'

function Carousel2() {
  return (
    <div>  
        <div className='container-fluid' >  
            <Carousel>  
                <Carousel.Item style={{'height':"400px"}} >  
                    <img style={{'width':"600px"}}  
                        className="d-block w-100"  
                        src={'slideshow_imgs/image2.jpg'} alt="" />   
                </Carousel.Item  >  

                <Carousel.Item style={{'height':"400px"}}>  
                    <img style={{'width':"600px"}}  
                        className="d-block w-100"  
                        src={'slideshow_imgs/image1.jpg'}   alt=""/>  
                </Carousel.Item>  

                <Carousel.Item style={{'height':"400px"}}>  
                    <img style={{'width':"600px"}}  
                        className="d-block w-100"  
                        src={'slideshow_imgs/image3.jpg'}   alt=""/>  
                </Carousel.Item>  
            </Carousel>  
        </div>  
    </div>  
  )
}

export default Carousel2