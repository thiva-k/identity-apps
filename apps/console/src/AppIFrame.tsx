import { AppConstants } from '@wso2is/common';
import React, { useState } from 'react';
import {Router, Link, Route, Switch } from 'react-router-dom';
import { history } from "@wso2is/features/core";

const Modal = ({ isOpen, onClose, url }) => {
  const modalContentStyle = {
    width: '80%', // Adjust the width as needed
    height: '80%', // Adjust the height as needed
    margin: 'auto', // Center the modal content horizontally
    marginTop: '50px' // Adjust the top margin as needed
  };

  return (
    isOpen && (
      <div className="modal-overlay" style={{ display: isOpen ? 'block' : 'none' }}>
        <div className="modal-content" style={modalContentStyle}>
          <button className="close-button" onClick={onClose}>Close</button>
          <iframe src={url} title="External Website" style={{ width: '100%', height: '100%' }}  />
        </div>
      </div>
    )
  );
};

const PopupOpener = () => {
  const [isOpenModal1, setIsOpenModal1] = useState(false);
  const [isOpenModal2, setIsOpenModal2] = useState(false);
  const [modal1Url, setModal1Url] = useState(`${window['AppUtils'].getConfig().clientOriginWithTenant}/console/applications`);
  const [modal2Url, setModal2Url] = useState(`${window['AppUtils'].getConfig().clientOriginWithTenant}/console/connections`);

  const openModal1 = () => {
    window.sessionStorage.setItem("auth_callback_url_console", "/t/wso2.com/console/applications");
    setIsOpenModal1(true);
  };

  const openModal2 = () => {
    window.sessionStorage.setItem("auth_callback_url_console", "/t/wso2.com/console/connections");
    setIsOpenModal2(true);
  };
  
  const closeModal1 = () => {
    setIsOpenModal1(false);
  };

  const closeModal2 = () => {
    setIsOpenModal2(false);
  };

  return (
  <>
    <button onClick={openModal1}>Open Applications</button>
    <button onClick={openModal2}>Open Connections</button>
    
    <Router history={history}>
      <div>
      <div> 
        <nav>
          <ul>
            <li>
              <Link to="/applications">Open Applications</Link>
            </li>
            <li>
              <Link to ={AppConstants.getPaths().get("APPLICATIONS")}>Applications Console</Link>
            </li>
            <li>
              <Link to="/connections">Open Connections</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route path="/applications">
            <Applications />
          </Route>
          <Route path="/connections">
            <Connections />
          </Route>
        </Switch>
      </div>
      <Modal isOpen={isOpenModal1} onClose={closeModal1} url={modal1Url} />
      <Modal isOpen={isOpenModal2} onClose={closeModal2} url={modal2Url} />
      </div>
    </Router>
    </> 
  );
};

const Applications = () => {
  return <h2>Applications Component</h2>;
};

const Connections = () => {
  return <h2>Connections Component</h2>;
};

export default PopupOpener;
