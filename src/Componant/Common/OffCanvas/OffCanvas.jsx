import React, {useState} from 'react'
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
const OffCanvas = ({buttonVariant = 'primary' , buttonText, placement, title, bodyContent, titleContent = {}, setToggle}) => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => { setShow(true)
         setToggle(true) }
  return (
    <div>
       <Button 
        variant={buttonVariant} 
        onClick={handleShow} 
        className="me-2  border-0 bg-white"
      >
        {buttonText}
      </Button>

      <Offcanvas show={show} onHide={handleClose} style={{width: '345px'}} placement={placement} className='bg-white'>
        <Offcanvas.Header closeButton className='justify-content-between'>
        {titleContent ? titleContent : <Offcanvas.Title>{title}</Offcanvas.Title>}
        </Offcanvas.Header>
        <Offcanvas.Body className=''>
          {bodyContent}
        </Offcanvas.Body>
      </Offcanvas>
    </div>
  )
}

export default OffCanvas
