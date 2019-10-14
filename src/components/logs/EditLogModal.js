import React, { useState } from "react";
//brining in materialize js for toast alert msg.
import M from "materialize-css/dist/js/materialize.min.js";

/**
 * A form. so it has component level state.
 * useState hook and useEffect to call it.
 */

const EditLogModal = () => {
  // declearing initial states
  const [message, setMessage] = useState("");
  const [attention, seAttention] = useState(false);
  const [tech, setTech] = useState("");

  //onSubmit Method
  const onSubmit = () => {
    // error checking
    if (message === "" || tech === "") {
      M.toast({ html: "Please enter a message and tech." });
    } else {
      console.log(message, tech, attention);

      // Clear fields
      setMessage("");
      setTech("");
      seAttention(false);
    }
  };

  return (
    <div id="edit-log-modal" className="modal" style={modalStyle}>
      {/* modal content. heading. a row with input field with the value and onChange method calling setMessage to set whatever we type in.*/}
      <div className="modal-content">
        <h4>Edit System Log</h4>
        {/* fisrt row */}
        <div className="row">
          <div className="input-field">
            <input
              type="text"
              name="message"
              value={message}
              onChange={e => setMessage(e.target.value)}
            />
            {/* materialize way of putting lable */}
            <label htmlFor="message" className="active">
              Log Message
            </label>
          </div>
        </div>

        {/* second row. value is tech from the state */}
        <div className="row">
          <div className="input-field purple">
            <select
              name="tech"
              value={tech}
              className="browser-default"
              onChange={e => setTech(e.target.value)}
            >
              <option value="" disabled>
                Select Technician
              </option>
              <option value="John Doe"> John Doe</option>
              <option value="Syeda Ahmed"> Syeda Ahmed</option>
              <option value="Will Fort"> Will Fort</option>
              <option value="Sam Smith"> Sam Smith</option>
            </select>
          </div>
        </div>

        {/* third row for attention box. if attention is true then checked.  onChange change the value to NOT what it is right now*/}
        <div className="row">
          <div className="input-field ">
            <p>
              <label>
                <input
                  type="checkbox"
                  className="filled-in "
                  checked={attention}
                  value={attention}
                  onChange={e => seAttention(!attention)}
                />
                <span>Needs Attention</span>
              </label>
            </p>
          </div>
        </div>
      </div>
      {/* modal content ends */}
      {/* modal footer starts. Enter button */}
      <div className="modal-footer">
        <a
          href="#!"
          onClick={onSubmit}
          className="modal-close waves-effect wave-light green darken-4 btn"
        >
          Enter
        </a>
      </div>
    </div>
  );
};

const modalStyle = {
  width: "75%",
  height: "75%"
};

export default EditLogModal;
