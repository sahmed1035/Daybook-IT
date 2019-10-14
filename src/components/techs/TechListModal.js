// fetch it from the backend from the component for now then we will move it to redux.
import React, { useState, useEffect } from "react";
import TechItem from "./TechItem";

/**
 * make the request in the useEffect hook.
 * setLogs to change the state. an empty array by default
 * loading. since we are making a request to get the data
 */
const TechListModal = () => {
  // initializing our state for techs and loading.
  const [techs, setTechs] = useState([]);
  const [loading, setLoading] = useState(false);

  // calling getLogs function in the useEffect
  useEffect(() => {
    getTechs();
    // eslint-disable-next-line
  }, []); // passing an empty array becuase we want it to run only once.

  // getLogs function to make the request to backend
  const getTechs = async () => {
    setLoading(true);
    //making request through fetch API which returns a promise
    const res = await fetch("/techs"); // don't need to write localhost/:5000 because we added proxy.
    // formating data as json. it doesn't return json data like axios.
    const data = await res.json();

    // setting the techs to the data
    setTechs(data);
    setLoading(false);
  };

  return (
    <div id="tech-list-modal" className="modal">
      <div className="modal-content">
        <h4>Technicians List</h4>
        <ul className="collection">
          {/* before looping through each item make sure loading is done. */}
          {!loading &&
            techs.map(tech => <TechItem tech={tech} key={tech.id} />)}
        </ul>
      </div>
    </div>

    /**
     * we should have access to logs here.
     * using collection class.
     * Looping through logs and outputting a list item
     * putting expressing with a condition.
     * if not loading and logs.length is zero then show a paragraph saying No logs to show.
     * else logs.map and for each log display a log item
     */
  );
};

export default TechListModal;
