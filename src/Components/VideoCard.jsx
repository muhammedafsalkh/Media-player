import React,{useState} from 'react'
import { Card,Modal } from 'react-bootstrap'
import { addHistory, deleteAdVideo } from '../services/allAPI';
function VideoCard({displayData,setDeleteVideoStatus, insideCategory}) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = async () => {
    setShow(true);
    // get caption and link
    const {caption,embedlink} = displayData
    // generate time stamb
    let today =new Date()
    const timeStamp = new  Intl.DateTimeFormat("en-US",{year:'numeric',month:'2-digit',day:'2-digit',
    hour:'2-digit',minute:'2-digit',second:'2-digit'}).format(today)
    let reqBody ={
      caption,embedlink,timeStamp
    }
    // make api call
    await addHistory(reqBody)
  }
  
  // delete a video
  const removeVideo = async (id) =>{
  //  make api call
    const response = await deleteAdVideo(id)
    setDeleteVideoStatus(true)
  }

  const dragStaterted = (e,id)=>{
    console.log("Drag started");
    e.dataTransfer.setData("cardId",id)
  }
  return (
    <>
    {
      displayData &&
    <Card className='mb-3' draggable onDragStart={(e)=>dragStaterted(e,displayData?.id)}>
    <Card.Img onClick={handleShow} style={{height:"180px"}} variant="top" src={displayData?.url} />
      <Card.Body>
        <Card.Title className='d-flex justify-content-between align-items-center'>
          <h5>{displayData?.caption}</h5>
        {insideCategory?"":<button onClick={()=>removeVideo(displayData?.id)} className='btn'> <i className='fa-solid fa-trash text-danger'></i></button>}
        </Card.Title>
       </Card.Body>
    </Card>
    }

    <Modal show={show} onHide={handleClose}>
    <Modal.Header closeButton>
          <Modal.Title>{displayData?.caption}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <iframe width={"100%"} height={"400px"} src={`${displayData?.embedlink}?autoplay=1`} title={displayData?.caption} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
        </Modal.Body>
          
    </Modal>
    </>
  )
}

export default VideoCard