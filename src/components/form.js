import React, { useState } from "react";
import AddIcon from "@mui/icons-material/Add";

const Form = (props) => {
    const [formData, setFormData] = useState({
        title: "",
        content: "",
    });

    // Submit Form Data
    const formSubmitHandler = (e) => {
        props.addNote(formData);
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
            {/* <div>
                <form>
                    <input type="text" name='title' onChange={formInputChangeHandler} value={formData.title} placeholder='Enter title' />
                    <textarea name="content" cols="30" rows="2" onChange={formInputChangeHandler} value={formData.content} placeholder='Enter content'></textarea>
                    <AddIcon onClick={formSubmitHandler}/>

                </form>
            </div> */}
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
                                Total Note's
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
                                            {/* <form> */}
                                            <div className="col-md-12 col-lg-12 p-0">
                                                <div className="card card-transparent card-block card-stretch event-note">
                                                    <div className="card-body px-0 bukmark">
                                                        <h1 className="mb-3" contentEditable>
                                                            Note title
                                                        </h1>
                                                        <p>Enter Note content.</p>
                                                        <input
                                                            type="text"
                                                            name="title"
                                                            onChange={formInputChangeHandler}
                                                            value={formData.title}
                                                            placeholder="Enter title"
                                                        />
                                                        <textarea
                                                            name="content"
                                                            cols="30"
                                                            rows="2"
                                                            onChange={formInputChangeHandler}
                                                            value={formData.content}
                                                            placeholder="Enter content"
                                                        ></textarea>
                                                        <AddIcon onClick={formSubmitHandler} />
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
                                            {/* </form> */}
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
                                                    <div className="col-lg-4 col-md-6">
                                                        <div className="card card-block card-stretch card-height card-bottom-border-info note-detail">
                                                            <div className="card-header d-flex justify-content-between pb-1">
                                                                <div className="icon iq-icon-box-2 icon-border-info rounded">
                                                                    <svg
                                                                        width="23"
                                                                        height="23"
                                                                        className="svg-icon"
                                                                        id="iq-main-01"
                                                                        xmlns="http://www.w3.org/2000/svg"
                                                                        fill="none"
                                                                        viewBox="0 0 24 24"
                                                                        stroke="currentColor"
                                                                    >
                                                                        <path
                                                                            stroke-linecap="round"
                                                                            stroke-linejoin="round"
                                                                            stroke-width="2"
                                                                            d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                                                                        />
                                                                    </svg>
                                                                </div>
                                                                <div className="card-header-toolbar d-flex align-items-center">
                                                                    <div className="dropdown">
                                                                        <span
                                                                            className="dropdown-toggle dropdown-bg"
                                                                            id="note-dropdownMenuButton4"
                                                                            data-toggle="dropdown"
                                                                            aria-expanded="false"
                                                                            role="button"
                                                                        >
                                                                            <i className="ri-more-fill"></i>
                                                                        </span>
                                                                        <div
                                                                            className="dropdown-menu dropdown-menu-right"
                                                                            aria-labelledby="note-dropdownMenuButton4"
                                                                        >
                                                                            <a
                                                                                href="#"
                                                                                className="dropdown-item new-note1"
                                                                                data-toggle="modal"
                                                                                data-target="#new-note1"
                                                                            >
                                                                                <i className="las la-eye mr-3"></i>View
                                                                            </a>
                                                                            <a
                                                                                href="#"
                                                                                className="dropdown-item edit-note1"
                                                                                data-toggle="modal"
                                                                                data-target="#edit-note1"
                                                                            >
                                                                                <i className="las la-pen mr-3"></i>Edit
                                                                            </a>
                                                                            <a
                                                                                className="dropdown-item"
                                                                                data-extra-toggle="delete"
                                                                                data-closest-elem=".card"
                                                                                href="#"
                                                                            >
                                                                                <i className="las la-trash-alt mr-3"></i>
                                                                                Delete
                                                                            </a>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>

                                                            <div className="card-body rounded">
                                                                <h4 className="card-title">Weekly Planner</h4>
                                                                <p className="mb-3 card-description short">
                                                                    Virtual Digital Marketing Course every week on
                                                                    Monday, Wednesday and Saturday.Virtual Digital
                                                                    Marketing Course every week on Monday
                                                                </p>
                                                            </div>
                                                            <div className="card-footer">
                                                                <div className="d-flex align-items-center justify-content-between note-text note-text-info">
                                                                    <a href="#" className="">
                                                                        <i className="las la-user-friends mr-2 font-size-20"></i>
                                                                        03 share
                                                                    </a>
                                                                    <a href="#" className="">
                                                                        <i className="las la-calendar mr-2 font-size-20"></i>
                                                                        12 Jan 2021
                                                                    </a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
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
