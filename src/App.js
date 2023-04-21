import React, { useState } from "react";
import Header from "./components/header";
import Footer from "./components/footer";
import Note from "./components/notes";
import Form from "./components/form";

function App() {
  const [notes, setNotes] = useState([])

  // Add Note
  const addNote = (note) => {
    setNotes([...notes, note])
  }

  // Delete Note
  const deleteNote = (uniqueId) => {
    const newNotes = notes.filter((ele, idx) => {
      return idx !== uniqueId;
    })
    setNotes(newNotes);
  }

  return (
    <div className="wrapper">
      <Header />
      <div className="content-page">
        <Form addNote={addNote} />
      </div>
      <div className="modal fade" id="new-note1" tabindex="-1" role="dialog" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <div className="modal-body">
              <div className="popup text-left">
                <div className="media align-items-top justify-content-between">
                  <h3 className="mb-3">Weekly Planner</h3>
                  <div className="btn-cancel p-0" data-dismiss="modal"><i className="las la-times"></i></div>
                </div>
                <div className="content create-workform">
                  <p className="mb-4">Virtual Digital Marketing Course every week on Monday, Wednesday and
                    Saturday.Virtual Digital Marketing Course every week on Monday</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {notes.map((ele, idx) => {
        return <Note title={ele.title} content={ele.content} uniqueId={idx} key={idx} deleteNote={deleteNote} />
      })}
      <Footer />
    </div>
  );
}

export default App;
