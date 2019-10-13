import React from "react";

const SearchBar = () => {
  return (
    <nav style={{ marginBottom: "30px" }} className="purple">
      <div className="nav-wrapper">
        <form>
          <div className="input-field">
            <input id="search" type="search" />
            <label className="label-icon" htmlFor="search">
              <i className="material-icons">close</i>
            </label>
          </div>
        </form>
      </div>
    </nav>
  );
};

export default SearchBar;
