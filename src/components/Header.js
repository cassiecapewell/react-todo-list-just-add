import React from "react";

const Header = (props) => {
  return (
    <header>
      <h1 style={headerStyle}>{props.title}</h1>
    </header>
  );
};
// functional component with the original way to do props
// inside the h1 we're using two things: headerStyle: object w font size and decoration, and props.title: pulling the title property off of the props parameter
// the prop and it's properties come from the header component in App.js

const headerStyle = {
  fontSize: "40px",
  textDecoration: "underline",
};
// camelCase because this is JSX not css

export default Header;
