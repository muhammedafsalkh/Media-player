import React, { useEffect, useState } from 'react'
import VideoCard from './VideoCard'
import { Col, Row } from 'react-bootstrap'
import { getAlldVideos } from '../services/allAPI'

function View({uploadVideoServerResponse}) {
  const [allVideos,setAllVideos] = useState([])
  const [deleteVideoStatus,setDeleteVideoStatus] = useState(false)

  const getAllUploadedVideos = async()=>{
  const {data} = await  getAlldVideos()
    setAllVideos(data);
  }
  
  useEffect(()=>{
    setDeleteVideoStatus(false)
    getAllUploadedVideos()
  },[uploadVideoServerResponse,deleteVideoStatus])
  console.log(allVideos);
  return (
    <Row>
      {

        allVideos.length>0?
        allVideos.map(video=>( <Col sm={12} md={6} lg={4} xl={3}>
          <VideoCard displayData ={video} setDeleteVideoStatus ={setDeleteVideoStatus}/>
        </Col>
        ))
      :<p className='fw-bolder mt-3 fs-5 text-danger'>Nothing to display!!!</p>
     }
      
    </Row>
  )
}

export default View