import React,{useState} from 'react'
import { Modal,Button,Form } from 'react-bootstrap';
import { uploadVideo } from '../services/allAPI';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Add({setUploadVideoServerResponse}) {
const[video,setVideo]=useState({
  id:"",caption:"",url:"",embedlink:""
})

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const extractUrl = (e)=>{
    const {value} = e.target
   if(value){
    const embedData = `https://www.youtube.com/watch?v=EsRyyJmO-u8/${value.slice(-11)}`
    setVideo({...video,embedlink:embedData})
   }else{
    setVideo({...video,embedlink:""})
   }
  }
const handleUpload =async ()=>{
  const {id, caption,url,embedlink} = video

  if(!id || !caption || !url || !embedlink){
    toast.warning("please fill the form completely")
  }else{

    const response = await uploadVideo(video)

    if(response.status>=200 && response.status<300){
      setUploadVideoServerResponse(response.data)
      toast.success(`"${response.data.caption}" video uploaded successfully`)
      setUploadVideoServerResponse(response.data)
      setVideo({id:"",caption:"",url:"",embedlink:""})
      handleClose()
    }else{
      console.log(response);
     toast.error("please provide unique id for uploading video!!!")
    }
  }
}


  return (
    <>
    <div className='d-flex align-items-center'>
      <h5>Upload New Video</h5>
      <button onClick={handleShow} className='btn'><i className='fa-solid fa-circle-plus fs-5'></i></button>
    </div>
    <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Upload A Video</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <p>Please Fill the following details !!!</p>
        <Form className='border border-secondary p-3 rounded'>
        <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Control type="text" placeholder="Enter Video ID" onChange={(e)=>setVideo({...video,id:e.target.value})}/>
       </Form.Group>
       <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Control type="text" placeholder="Enter Video Caption"  onChange={(e)=>setVideo({...video,caption:e.target.value})}/>
       </Form.Group>
       <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Control type="text" placeholder="Enter Video Image URL"  onChange={(e)=>setVideo({...video,url:e.target.value})}/>
       </Form.Group>
       <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Control type="email" placeholder="Enter Youtub Video Link" onChange={extractUrl}/>
       </Form.Group>
        </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleUpload}>Upload</Button>
        </Modal.Footer>
      </Modal>

      <ToastContainer 
      position='top-center'
      theme='colored'
      autoClose={2000}
      
      />
    </>
  )
}

export default Add

// <iframe width="1266" height="712" src="https://www.youtube.com/embed/dg9MrOCPuYI" title="How to start coding? | How to learn | What is Brototype | @BrototypeMalayalam" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

// https://youtu.be/NqWP-pl1CfQ

// https://www.youtube.com/watch?v=EsRyyJmO-u8