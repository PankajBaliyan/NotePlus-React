import React from "react";

const Note = (props) => {

    // Delete note Handler
    const noteDeleteHandler = (e) => {
        props.deleteNote(props.uniqueId);
    }

    const setModalData = (e) => {
        const dataArray = [];
        dataArray.push(props.title)
        dataArray.push(props.content)
        // console.log(dataArray)
        props.modalData(dataArray)
    }

    const currentDate = new Date().toDateString()

    return (
        <>
            <div className="col-lg-4 col-md-6 note-box">
                <div className="card card-block card-stretch card-height card-bottom-border-info note-detail">
                    <div className="card-header d-flex justify-content-between pb-1">
                        <div className="icon iq-icon-box-2 icon-border-info rounded">
                            <svg width="23" height="23" className="svg-icon" id="iq-main-01" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/>
                            </svg>
                        </div>
                        <div className="card-header-toolbar d-flex align-items-center">
                            <div className="dropdown">
                                <span className="dropdown-toggle dropdown-bg" id="note-dropdownMenuButton4" data-toggle="dropdown" aria-expanded="false" role="button">
                                    <i className="ri-more-fill"></i>
                                </span>
                                <div className="dropdown-menu dropdown-menu-right" aria-labelledby="note-dropdownMenuButton4" >
                                    <a href="#" className="dropdown-item new-note1" data-toggle="modal" data-target="#new-note1" onClick={setModalData}>
                                        <i className="las la-eye mr-3"></i>View
                                    </a>
                                    {/* <a href="#" className="dropdown-item edit-note1" data-toggle="modal" data-target="#edit-note1" >
                                        <i className="las la-pen mr-3"></i>Edit
                                    </a> */}
                                    <a className="dropdown-item" data-extra-toggle="delete" data-closest-elem=".card" href="#" onClick={noteDeleteHandler}>
                                        <i className="las la-trash-alt mr-3"></i>
                                        Delete
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="card-body rounded" data-toggle="modal" data-target="#new-note1" onClick={setModalData}>
                        <h4 className="card-title search-title">{props.title}</h4>
                        <p className="mb-3 card-description short">{props.content}</p>
                    </div>
                    <div className="card-footer">
                        <div className="d-flex align-items-center justify-content-between note-text note-text-info">
                            <a href="#" className="">
                                <i className="las la-user mr-2 font-size-20"></i>
                                Only You
                            </a>
                            <a href="#" className="">
                                <i className="las la-calendar mr-2 font-size-20"></i>
                                {currentDate}
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Note;
