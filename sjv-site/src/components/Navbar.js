import React, { useState } from 'react';
import logo from "../assets/logo.svg";
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';

function OffCanvasExample({ name, ...props }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const toggleShow = () => setShow((s) => !s);

  return (
    <>
    <nav className='navbar'>
      <div className='container-fluid'>
        <a href="https://www.google.com/">
              <img src={logo} className="logo animate fadeIn" alt="logo" />
        </a>
        <div className="nav-wrap" onClick={toggleShow}>
          <i class="bi bi-list animate fadeIn" style={{ fontSize: 40 }}></i>
        </div>
        <Offcanvas show={show} onHide={handleClose} {...props}>
          <Offcanvas.Header closeButton>
            <Offcanvas.Title>Offcanvas</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            Some text as placeholder. In real life you can have the elements you
            have chosen. Like, text, images, lists, etc.
          </Offcanvas.Body>
        </Offcanvas>
      </div>
    </nav>
    </>
  );
}

const Navbar = () => {

  return (
    <>
    {['end',].map((placement, idx,) => (
        <OffCanvasExample key={idx} placement={placement} />
      ))}
    </>
  )
}

export default Navbar