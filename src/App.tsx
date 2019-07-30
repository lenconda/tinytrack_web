import React from 'react';
import { ToastContainer } from 'react-toastify';
import Button from './components/button/Button';
import './App.scss';

const App = (): JSX.Element => {
  return (
    <>
      <header className="container-fluid tl-header">
        asdasd
      </header>
      <div className="container-fluid h-100 d-flex justify-content-center align-items-center">
        <div className="w-100 d-flex flex-column justify-content-center align-items-center">
          <img className="index-logo" src="/assets/img/logo.svg" alt="site-logo" />
          <div className="index-input d-flex justify-content-center align-items-center row w-100">
            <div className="col-12 col-sm-12 col-md-6 col-lg-4 col-xl-3 box-item-wrapper">
              <input type="text" className="zi-input w-100 box-item" />
            </div>
          </div>
          <div className="index-button d-flex justify-content-center align-items-center row w-100">
            <div className="col-12 col-sm-12 col-md-6 col-lg-4 col-xl-3 box-item-wrapper">
              <Button className="w-100 box-item" type="primary" shadow={true}>Continue</Button>
            </div>
          </div>
          <div className="index-button d-flex justify-content-center align-items-center row w-100">
            <div className="col-12 col-sm-12 col-md-6 col-lg-4 col-xl-3 box-item-wrapper">
              <Button className="w-100 box-item" type="success" shadow={true}>Create</Button>
            </div>
          </div>
        </div>
      </div>
      <footer className="container footer">
        <span className="font-weight-light">Copyright (c) {new Date().getFullYear()} TraceLink, Inc. All rights reserved.</span>
      </footer>
      <ToastContainer />
    </>
  );
};

export default App;
