import React, { useState } from "react";
import Note from "../components/notes";

const Form = (props) => {
    const [notes, setNotes] = useState([]);

    // Add Note
    const addNote = (note) => {
        setNotes([...notes, note]);
    };

    // Delete Note
    const deleteNote = (uniqueId) => {
        const newNotes = notes.filter((ele, idx) => {
            return idx !== uniqueId;
        });
        setNotes(newNotes);
    };

    // Send data to upper level component to view in view modal box
    const modalData = (dataArray) => {
        props.getData(dataArray)
    }

    const [formData, setFormData] = useState({
        title: "",
        content: "",
    });

    // Submit Form Data
    const formSubmitHandler = (e) => {
        // props.addNote(formData);
        if(formData.title !== '' && formData.content !== ''){
            addNote(formData);
        }
        setFormData({
            title: "",
            content: "",
        });
        e.preventDefault();
    };

    // Form Input Change Handler
    const formInputChangeHandler = (e) => {
        const newValue = e.target.value;
        const inputName = e.target.name;
        if (inputName === "title") {
            setFormData({
                ...formData,
                title: newValue,
            });
        } else if (inputName === "content") {
            setFormData({
                ...formData,
                content: newValue,
            });
        }
    };

    return (
        <>
            <div className="container-fluid note-details">
                <div className="desktop-header">
                    <div className="card card-block topnav-left">
                        <div className="card-body write-card">
                            <div className="d-flex align-items-center justify-content-between">
                                <div className="iq-note-callapse-menu">
                                    <a
                                        className="iq-note-callapse-btn show-note-button"
                                        data-toggle="collapse"
                                        href="#collapseMenu"
                                        role="button"
                                        data-extra-toggle="toggle"
                                        data-extra-class-show=".hide-note-button"
                                        data-extra-class-hide=".show-note-button"
                                        aria-expanded="false"
                                    >
                                        <i className="las la-pencil-alt pr-2"></i>Write Your Note
                                    </a>
                                    <span className="hide-note-button d-none">
                                        <i className="las la-folder pr-2"></i>Add note below
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card topnav-right">
                        <div className="card-body card-content-right">
                            <ul className="list-inline m-0 p-0 d-flex align-items-center justify-content-around">
                                Total Note's : {notes.length}
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12">
                        <div className="collapse" id="collapseMenu">
                            <div className="card card-block card-stretch">
                                <div className="card-body write-card">
                                    <div className="container-fluid collapse-fluid">
                                        <div className="row">
                                            <div className="col-md-12 col-lg-12 p-0">
                                                <div className="card card-transparent card-block card-stretch event-note">
                                                    <div className="card-body px-0 bukmark">
                                                        <div class="form-group">
                                                            <label for="note-title">Note title 👇</label>
                                                            <input type="text" name="title" class="form-control" id="note-title" aria-describedby="noteHelp" placeholder="Title Here" onChange={formInputChangeHandler} value={formData.title} required/>
                                                            <small id="noteHelp" class="form-text text-muted">Please provide a concise and descriptive title for your note.</small>
                                                        </div>
                                                        <div class="form-group">
                                                            <label for="note-content">Note content 👇</label>
                                                            <textarea class="form-control" id="note-content" rows="3" name="content" onChange={formInputChangeHandler} value={formData.content} placeholder="Please input the content for your note here."></textarea>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-12 p-0 d-flex justify-content-end">
                                                <button
                                                    className="btn btn-outline-primary"
                                                    data-extra-toggle="toggle"
                                                    data-extra-class-show=".show-note-button"
                                                    data-extra-class-hide=".hide-note-button"
                                                >
                                                    Close
                                                </button>
                                                <button
                                                    className="btn btn-primary ml-2"
                                                    data-extra-toggle="toggle"
                                                    data-extra-class-show=".show-note-button"
                                                    data-extra-class-hide=".hide-note-button"
                                                    onClick={formSubmitHandler}
                                                >
                                                    Save
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-12">
                        <div className="card card-block card-stretch">
                            <div className="card-body custom-notes-space">
                                <h3 className="">Your Notes</h3>
                                <div className="iq-tab-content">
                                    <div className="note-content tab-content">
                                        {/* <!-- note box --> */}
                                        <div id="note1" className="tab-pane fade active show">
                                            <div className="icon active animate__animated animate__fadeIn i-grid">
                                                <div className="row">
                                                    {/* loop start from here  */}
                                                    {notes.map((ele, idx) => {
                                                        return (
                                                            <Note
                                                                title={ele.title}
                                                                content={ele.content}
                                                                uniqueId={idx}
                                                                key={idx}
                                                                deleteNote={deleteNote}
                                                                modalData={modalData}
                                                            />
                                                        );
                                                    })}
                                                    {/* loop end here  */}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Form;
