import React, { useState } from "react";
import { Chip, Typography } from "@mui/material";
import AvTimerIcon from "@mui/icons-material/AvTimer";
import Countdown from "react-countdown";

const font = "Unbounded";

function CustomTimer2({ id }) {
  const [date, setDate] = useState(Date.now() + 120000);
  const keyFromLocalStorage = localStorage.getItem("key");

  const setStorageKey = () => {
    return localStorage.setItem(
      "key",
      keyFromLocalStorage < 3 ? +keyFromLocalStorage + 1 : 0
    );
  };
  function autostart(params) {
    setDate(Date.now() + 120000);
    setStorageKey();
  }

  console.log("rerender ", keyFromLocalStorage);
  return (
    <Chip
      label={
        <Typography fontSize="20px" fontFamily={font}>
          <Countdown key={date} date={date} onComplete={autostart} />
        </Typography>
      }
      color="error"
      icon={<AvTimerIcon />}
      sx={{
        display: id == keyFromLocalStorage ? "inline-flex" : "none",
        py: 3,
        fontSize: 24,
        opacity: "0.7",
        width: 200,
      }}
    />
  );
}

export default CustomTimer2;

// export default class CustomTimer extends Component {
//   state = { date: Date.now() + 5000 };

//   autostart = () => {
//     this.setState({ date: Date.now() + 5000 });
//     setStorageKey();
//   };

//   render() {
//     return (
//       <Chip
//         label={
//           <Typography fontSize="20px" fontFamily={font}>
//             <Countdown
//               key={this.state.date}
//               date={this.state.date}
//               onComplete={this.autostart}
//             />
//           </Typography>
//         }
//         color="error"
//         icon={<AvTimerIcon />}
//         sx={{
//           py: 3,
//           fontSize: 24,
//           opacity: "0.7",
//           width: 200,
//         }}
//       />
//     );
//   }
// }
