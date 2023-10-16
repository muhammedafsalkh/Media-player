import React from 'react';
import {Row, Col, Card} from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';


function LandingPage() {
  const navigateByUrl =useNavigate()

  const navigate=()=>{
    navigateByUrl('/home')
  }
  return (
    <>
    <Row className='mt-5 mb-5 align-items-center justify-content-between'>
      
    <Col className='ms-5'>
     <h3 className='mb-3'>Welcome to <span className='text-warning'>Media player</span></h3>
     <p style={{textAlign:"justify"}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam possimus quisquam rerum deserunt ratione error repellendus rem! Facere possimus, eius illo quisquam magni incidunt aperiam eaque recusandae. Eum, cum placeat!</p>
     <button onClick={navigate} className='btn btn-info mt-3 fw-bolder'>Get Started</button>
    </Col>
     
     <Col></Col>

    <Col className='ps-5 me-5'>
       <img className='img-fluid me-5 ps-5' src="https://media.tenor.com/lhlDEs5fNNEAAAAC/music-beat.gif" alt="landig" />
    </Col>
      
    </Row>

    <div className="container mt-5 mb-5 d-flex justify-content-center align-items-center flex-column">
      <h3>Fetures</h3>
      <div className="cards d-flex justify-content-between align-items-center w-100">
      <Card className='p-3' style={{ width: '22rem' }}>
      <Card.Img height={'300px'} variant="top" src="https://www.garagemusaffah.com/gallery_gen/50efb5367fb0f1bf6f999bd738e0c78c.gif" />
      <Card.Body>
        <Card.Title>Managing Videos</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        
      </Card.Body>
    </Card>

    <Card className='p-3' style={{ width: '22rem' }}>
      <Card.Img height={'300px'} variant="top" src="https://i.pinimg.com/originals/5a/c3/65/5ac3659684140aa60ceca491b48b8bb2.gif" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        
      </Card.Body>
    </Card>

    <Card className='p-3' style={{ width: '22rem' }}>
      <Card.Img height={'300px'} variant="top" src="https://64.media.tumblr.com/016eb687807e1f2351ace929abf3e628/tumblr_mi0b7ytCwH1s5afm7o1_400.gif" />
      <Card.Body>
        <Card.Title>Watch History</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        
      </Card.Body>
    </Card>
      </div>
    </div>


    <div className="container mt-5 mb-5 d-flex justify-content-between w-100 border p-5 border-secondory rounded align-items-center">

      <div className='content'>
        <h3 className='text-warning mb-5'>Simble, Fast and powerful</h3>
        <h6> <span className='fs-5 fw-bolder'>play everithing</span>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus aperiam recusandae qui eius, veniam vel illo. Eveniet explicabo voluptate eius reiciendis, ex optio fugit repellendus ullam consectetur unde facere hic.</h6>
        <h6 className='mt-4'> <span className='fs-5 fw-bolder'>play everithing</span>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus aperiam recusandae qui eius, veniam vel illo. Eveniet explicabo voluptate eius reiciendis, ex optio fugit repellendus ullam consectetur unde facere hic.</h6>
        <h6 className='mt-4'> <span className='fs-5 fw-bolder'>play everithing</span>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus aperiam recusandae qui eius, veniam vel illo. Eveniet explicabo voluptate eius reiciendis, ex optio fugit repellendus ullam consectetur unde facere hic.</h6>
      </div>

      <div className='video ms-5'>
      <iframe width="689" height="387" src="https://www.youtube.com/embed/IqwIOlhfCak?si=7-wNRe1dIlAe5knM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
      </div>

    </div>

    
    
    </>
  )
}


export default LandingPage