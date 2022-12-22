import React, { useState } from "react";
import { Chip, Typography } from "@mui/material";
import AvTimerIcon from "@mui/icons-material/AvTimer";
import Countdown from "react-countdown";

const font = "Unbounded";

function CustomTimer({ id }) {
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

export default CustomTimer;
