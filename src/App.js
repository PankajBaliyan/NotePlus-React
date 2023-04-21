import React, { useState } from "react";
import Header from "./components/header";
import Footer from "./components/footer";
import Form from "./components/form";

function App() {
  const [currentData, setData] = useState([])
  const getData = (e) => {
    setData(e);
  }
  return (
    <div className="wrapper">
      <Header />
      <div className="content-page">
        <Form getData={getData}/>
        <div className="modal fade" id="new-note1" tabindex="-1" role="dialog" aria-hidden="true">
          <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content">
              <div className="modal-body">
                <div className="popup text-left">
                  <div className="media align-items-top justify-content-between">
                    <h3 className="mb-3">{currentData[0]}</h3>
                    <div className="btn-cancel p-0" data-dismiss="modal"><i className="las la-times"></i></div>
                  </div>
                  <div className="content create-workform">
                    <p className="mb-4">{currentData[1]}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
