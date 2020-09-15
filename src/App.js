import React, { useState } from "react";
import "./styles.css";
import Table from "../table/table";
import tableData from "../mock";

export default function App() {
  const styleProps = {
    container: {
      marginTop: 100,
      padding: 20,
      overflowX: "scroll"
    },
    button: {
      padding: "8px 15px",
      border: "none",
      background: "teal",
      color: "white",
      borderRadius: "3px"
    }
  };

  // Hold the data from the field selected in the table
  const [user, setUser] = useState(null);

  // Handle the events from the table
  const managePayload = (payload) => {
    setUser({
      ...payload
    });
  };

  const ActionButton = ({ handleEvent }) => {
    return (
      <button style={styleProps.button} onClick={handleEvent}>
        View
      </button>
    );
  };

  // Pass the event handler to the table
  // Trigger === the button to cause the event
  // CollectData === function to handle the event
  const manageActions = {
    trigger: <ActionButton />,
    collectData: managePayload
  };

  return (
    <div className="App">
      <h1>Simple React Table </h1>
      <p>Hi, checkout this simple and dynamic ;) table </p>
      <p>
        Follow me on{" "}
        <a _target="blank" href="https://twitter.com/@frontend_io">
          {" "}
          Twitter{" "}
        </a>
      </p>
      <div
        style={{
          textTransform: "capitalize",
          background: "#f2f2f2",
          textAlign: "left",
          padding: 20
        }}
      >
        {user ? <h3>Selected User: </h3> : <h3>Select a user</h3>}

        {user
          ? Object.entries(user).map((field, index) => {
              const [name, value] = field;

              return (
                <React.Fragment key={index}>
                  {typeof value !== "object" ? (
                    <p className="name">
                      {" "}
                      {name}: {value}{" "}
                    </p>
                  ) : (
                    <p className="name">
                      {" "}
                      {name}: {value.name}{" "}
                    </p>
                  )}
                </React.Fragment>
              );
            })
          : null}
      </div>

      <div style={styleProps.container}>
        <Table manage={manageActions} data={tableData} />
      </div>
    </div>
  );
}
