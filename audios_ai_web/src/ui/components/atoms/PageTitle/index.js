import React from "react";

const PageTitle = ({ title }) => {
  return (
    <div className="row">
      <div className="col-12">
        <h4 className="text-left p-3">{title}</h4>
      </div>
    </div>
  );
};

export default PageTitle;
