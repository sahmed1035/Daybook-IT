//racfp p will bring the propstypes.
import React from "react";
import Moment from "react-moment";
import PropTypes from "prop-types";

// will pass in log as a prop. condition if attention needed red-text
const LogItem = ({ log }) => {
  return (
    <li className="collection-item">
      <div>
        {/* log.message */}
        <a
          href="#edit-log-modal"
          className={`modal-trigger ${
            log.attention ? "red-text" : "blue-text"
          }`}
        >
          {log.message}
        </a>
        <br />
        {/* id date and tech */}
        <span className="grey-text">
          <span className="black-text">ID # {log.id}</span> last updated by{" "}
          <span className="black-text">{log.tech}</span> on{" "}
          <Moment format="MMMM Do YYYY, h:mm:ss a">{log.date}</Moment>
        </span>
        {/* delete button */}
        <a href="#!" className="secondary-content">
          <i className="material-icons grey-text">delete</i>
        </a>
      </div>
    </li>
  );
};

LogItem.propTypes = {
  //ptor
  log: PropTypes.object.isRequired
};

export default LogItem;
