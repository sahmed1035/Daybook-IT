import React, { useState, useEffect } from "react";
import LogItem from "./LogItem";
import Preloader from "../layout/Preloader";
/**
 * make the request in the useEffect hook.
 * setLogs to change the state. an empty array by default
 * loading. since we are making a request to get the data
 */
const Logs = () => {
  // initializing our state for logs and loading.
  const [logs, setLogs] = useState([]);
  const [loading, setLoading] = useState(false);

  // calling getLogs function in the useEffect
  useEffect(() => {
    getLogs();
    // eslint-disable-next-line
  }, []); // passing an empty array becuase we want it to run only once.

  // getLogs function to make the request to backend
  const getLogs = async () => {
    setLoading(true);
    //making request through fetch API which returns a promise
    const res = await fetch("/logs"); // don't need to write localhost/:5000 because we added proxy.
    // formating data as json. it doesn't return json data like axios.
    const data = await res.json();

    // setting the logs to the data
    setLogs(data);
    setLoading(false);

    if (loading) {
      return <Preloader />;
    }
  };

  return (
    /**
     * we should have access to logs here.
     * using collection class.
     * Looping through logs and outputting a list item
     * putting expressing with a condition.
     * if not loading and logs.length is zero then show a paragraph saying No logs to show.
     * else logs.map and for each log display a log item
     */

    <ul className="collection with-header">
      <li className="collection-header">
        <h4 className="center">System Logs</h4>
      </li>

      {!loading && logs.length === 0 ? (
        <p className="center">No logs to show...</p>
      ) : (
        logs.map(log => <LogItem log={log} key={log.id} />) // will display LogItem Component here.
        //passing in current log as a prop.
      )}
    </ul>
  );
};

export default Logs;
