import React from 'react';

const NewTabs = ({ children }) => {
  console.log(children);
  return (
    <div className="tabs">
      <ol className="tab-list">
        {/* {children} */}
        {children &&
          children.map((child, index) => <div key={index}>{child}</div>)}
      </ol>
      <div className="tab-content">
        {children &&
          children.map((child, index) => {
            // if (child.props.label !== activeTab) return undefined;
            return child.props.children;
          })}
      </div>
    </div>
  );
};

export default NewTabs;
