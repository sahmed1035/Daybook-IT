import React from "react";

/**
 * using materialize classes.
 * an a-tag with the href to a modal.
 * floating button with the sub buttons for add a tech and stuff.
 * Add a log. Add a Tech. View all the Techs in our database.
 *
 */

const AddBtn = () => {
  return (
    <div className="fixed-action-btn">
      <a
        href="#add-log-modal"
        className="btn-floating btn-large purple darken-2 scale-transition modal-trigger"
      >
        <i className="large material-icons">add</i>
      </a>
      <ul>
        {/* list item for the tech list modal */}
        <li>
          <a
            href="#tech-list-modal"
            className="btn-floating green modal-trigger"
          >
            <i className="material-icons">person</i>
          </a>
        </li>
        {/* list item for the tech modal */}
        <li>
          <a href="#add-tech-modal" className="btn-floating blue modal-trigger">
            <i className="material-icons">person_add</i>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default AddBtn;
