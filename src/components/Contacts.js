import React from "react";
import "./Contacts.css";

export default function Contact(props) {
  return (
    <div className="Contact">
      <div className={props.status ? "shadow-online" : "shadow-offline"}>
        <img className="avatar" src={props.avatar} alt="" />
        <div>
          <h3 className="name">{props.name}</h3>
          <div className="status">
            <span
              className={props.status ? "status-online" : "status-offline"}
            ></span>
            <div className={"status-text"}>
              {props.status ? "online" : "offline"}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const element = (
  <div>
    <Contact />
  </div>
);