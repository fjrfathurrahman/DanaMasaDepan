// import React, { CSSProperties } from "react";

// export const Cube = () => {
//   const styleWithCustomVars = (vars: {
//     [key: string]: string | number;
//   }): CSSProperties => vars as CSSProperties;

//   return (
//     <div className="parentCube">
//       {[1, 2, 3].map((item) => (
//         <div key={item} className="cube">
//           <div style={styleWithCustomVars({ "--x": -1, "--y": 0 })}>
//             <span style={styleWithCustomVars({ "--i": 3 })}></span>
//             <span style={styleWithCustomVars({ "--i": 2 })}></span>
//             <span style={styleWithCustomVars({ "--i": 1 })}></span>
//           </div>
//           <div style={styleWithCustomVars({ "--x": -1, "--y": 0 })}>
//             <span style={styleWithCustomVars({ "--i": 3 })}></span>
//             <span style={styleWithCustomVars({ "--i": 2 })}></span>
//             <span style={styleWithCustomVars({ "--i": 1 })}></span>
//           </div>
//           <div style={styleWithCustomVars({ "--x": -1, "--y": 0 })}>
//             <span style={styleWithCustomVars({ "--i": 3 })}></span>
//             <span style={styleWithCustomVars({ "--i": 2 })}></span>
//             <span style={styleWithCustomVars({ "--i": 1 })}></span>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };
