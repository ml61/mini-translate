import React from "react";
import LanguageContext from "../contexts/LanguageContext";

class Field extends React.Component {
  static contextType = LanguageContext; //contextType - have to be named only like that

  render() {
    const text = this.context.language === "english" ? "Name" : `Ім'я`;
    return (
      <div className="ui field">
        <label>{text}</label>
        <input />
      </div>
    );
  }
}

export default Field;
