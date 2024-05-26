// "use client";
// import React, { FunctionComponent } from "react";
// import World from "./globe-yes";

// // Dynamically import the World component

// interface WrapperProps {
//   siblingWidth?: number;
//   siblingHeight?: number;
// }

// const Wrapper: FunctionComponent<WrapperProps> = ({
//   siblingWidth,
//   siblingHeight,
// }) => {
//   if (typeof window === "undefined") {
//     return null; // Do not render the component if window is undefined
//   }

//   return <World siblingWidth={siblingWidth} siblingHeight={siblingHeight} />;
// };

// export default Wrapper;
