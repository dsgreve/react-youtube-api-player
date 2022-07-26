import React, { useState} from "react";

const SeachBar = ({ onFormSubmit }) => {
  const [term, setTerm] = useState("");
   // moved to Inline
  // const onInputChange = (event) => {
  //   setTerm(event.target.value);
  // };

  const onSubmit = (event) => {
    event.preventDefault();
    onFormSubmit(term);
  };

  return (
    <div className="search-bar ui segment">
      <form onSubmit={onSubmit} className="ui form">
        <div className="field">
          <label>Search Videos</label>
          <input
            type="text"
            value={term}
            onChange={(event) => setTerm(event.target.value)}
          />
        </div>
      </form>
    </div>
  );
};

export default SeachBar;