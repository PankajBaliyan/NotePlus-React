import React from "react";
import DeleteIcon from '@mui/icons-material/Delete';

const Note = (props) => {

    // Delete note Handler
    const noteDeleteHandler = (e) => {
        props.deleteNote(props.uniqueId);
    }

return (
    <>
        <div>
            <div>{props.title}</div>
            <div>{props.content}</div>
            <DeleteIcon onClick={noteDeleteHandler} />
        </div>
    </>
);
};

export default Note;
