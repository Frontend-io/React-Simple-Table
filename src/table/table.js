import React from "react";
import Proptypes from "prop-types";

import randomImage from "../images";
import { SimpleTable } from "./style";

const Table = React.forwardRef((props, ref) => {
  const { data, manage, userImage = true } = props || {};
  const { trigger, collectData } = manage || {};

  // Append button to fields and return the value and manage data
  const ActionWrapper = (props) => {
    return (
      <span
        onClick={() => {
          collectData(props);
        }}
      >
        {" "}
        {trigger}{" "}
      </span>
    );
  };

  data &&
    manage &&
    data.body.map((user) => {
      return (user["action"] = <ActionWrapper {...user} />);
    });

  return (
    <React.Fragment>
      {data ? (
        <SimpleTable {...ref} {...props}>
          <thead>
            {data.head.map((th, index) => {
              return <th key={index}>{th}</th>;
            })}
          </thead>
          <tbody>
            {data.body.map((tr, index) => {
              const tds = Object.values(tr);

              return (
                <tr key={index}>
                  {tds.map((td, index) => {
                    const { name, avatar } = td || {};
                    return (
                      <td key={index + 1}>
                        {td.name ? (
                          <div
                            style={{ alignItems: "center", display: "flex " }}
                          >
                            {userImage ? (
                              <img src={avatar || randomImage()} alt={name} />
                            ) : null}
                            <p my="0">{name}</p>
                          </div>
                        ) : (
                          td
                        )}
                      </td>
                    );
                  })}
                </tr>
              );
            })}
          </tbody>
        </SimpleTable>
      ) : null}
    </React.Fragment>
  );
});

Table.prototype = {
  data: Proptypes.array.isRequired
};

export default Table;
