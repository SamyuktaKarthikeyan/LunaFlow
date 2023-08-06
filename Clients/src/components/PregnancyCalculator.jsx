import React, { useState } from "react";
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Button,
  Container,
  Typography,
  TextField,
} from "@mui/material";

function PregnancyCalculator() {
  const [basedOn, setBasedOn] = useState(0);
  const [dueDate, setDueDate] = useState("");
  const [firstDay, setFirstDay] = useState("");
  const [avgCyclesLength, setAvgCyclesLength] = useState("");
  const [ultrasoundDate, setUltrasoundDate] = useState("");
  const [pregnancyWeeks, setPregnancyWeeks] = useState("");
  const [pregnancyDays, setPregnancyDays] = useState("");
  const [conceptionDate, setConceptionDate] = useState("");
  const [transferDate, setTransferDate] = useState("");
  const [embryoAge, setEmbryoAge] = useState("");
  const [result, setResult] = useState("");

  const calculate = () => {
    const basedOnValue = parseInt(basedOn);

    if (basedOnValue === 0) {
      if (!dueDate) {
        setResult("Please enter a due date");
      } else {
        const date = new Date(dueDate);
        const startDate = new Date(dueDate);
        startDate.setDate(date.getDate() - 280);
        const daysDiff = dateDiff(startDate, new Date());
        showResult(daysDiff);
      }
    } else if (basedOnValue === 1) {
      if (!firstDay) {
        setResult("Please enter a first day");
      } else {
        const date = new Date(firstDay);
        const startDate = new Date(firstDay);
        const cycleDays = Number(avgCyclesLength) + 22;
        startDate.setDate(date.getDate() + cycleDays);
        const daysDiff = dateDiff(startDate, new Date());
        showResult(daysDiff);
      }
    } else if (basedOnValue === 2) {
      if (!ultrasoundDate) {
        setResult("Please enter an ultrasound date");
      } else if (!pregnancyWeeks) {
        setResult("Please enter the length of pregnancy at the time");
      } else {
        const date = new Date(ultrasoundDate);
        const days = Number(pregnancyWeeks) * 7 + Number(pregnancyDays);
        const startDate = new Date(ultrasoundDate);
        startDate.setDate(date.getDate() - days);
        const daysDiff = dateDiff(startDate, new Date());
        showResult(daysDiff);
      }
    } else if (basedOnValue === 3) {
      if (!conceptionDate) {
        setResult("Please enter a conception date");
      } else {
        const date = new Date(conceptionDate);
        const startDate = new Date(conceptionDate);
        startDate.setDate(date.getDate() - 14);
        const daysDiff = dateDiff(startDate, new Date());
        showResult(daysDiff);
      }
    } else if (basedOnValue === 4) {
      if (!transferDate) {
        setResult("Please enter an IVF transfer date");
      } else {
        const date = new Date(transferDate);
        const startDate = new Date(transferDate);
        const embryoAgeInDays = embryoAge === "Day 3" ? 3 : 5;
        startDate.setDate(date.getDate() - embryoAgeInDays - 14);
        const daysDiff = dateDiff(startDate, new Date());
        showResult(daysDiff);
      }
    }
  };

  const dateDiff = (startingDate, endDate) => {
    if (!startingDate || !endDate) {
      return false;
    }
    return Math.floor(
      (endDate.getTime() - startingDate.getTime()) / (1000 * 3600 * 24)
    );
  };

  const showResult = (days) => {
    if (days < 0 || days > 300) {
      setResult("You probably are not pregnant yet.");
    } else {
      setResult(
        `Week #${Math.floor(days / 7) + 1} (${Math.floor(
          days / 7
        )} weeks ${Math.floor(days % 7)} days or ${Math.floor(
          days / 30.41
        )} months ${Math.floor(days % 30.41)} days) of pregnancy.`
      );
    }
  };

  const handleCalculate = () => {
    calculate();
  };

  const plural = (number, label) => {
    if (number === 0) return "";

    if (label === "d") return number === 1 ? number + " day" : number + " days";
    if (label === "w")
      return number === 1 ? number + " week" : number + " weeks";
    if (label === "m")
      return number === 1 ? number + " month" : number + " months";
    if (label === "y")
      return number === 1 ? number + " year" : number + " years";

    return "";
  };
  return (
    <div
      style={{
        backgroundImage:
          "url(https://as2.ftcdn.net/v2/jpg/04/48/52/39/1000_F_448523917_3SIHvOJSKWg6v0OaXInLxLSM7BjiGTxT.jpg)",
        paddingTop: "10vh",
        height: "150vh",
      }}
    >
      <Container
        maxWidth="sm"
        sx={{
          mt: 4,
          p: 2,
          bgcolor: "background.paper",
          boxShadow: 10,
          borderRadius: 2,
        }}
      >
        <div>
          <FormControl fullWidth variant="outlined" sx={{ mb: 2 }}>
            <InputLabel id="basedOn-label">Calculate Based On</InputLabel>
            <Select
              labelId="basedOn-label"
              value={basedOn}
              label="Calculate Based On"
              onChange={(e) => setBasedOn(e.target.value)}
            >
              <MenuItem value={0}>Due Date</MenuItem>
              <MenuItem value={1}>Last Period</MenuItem>
              <MenuItem value={2}>Ultrasound</MenuItem>
              <MenuItem value={3}>Conception Date</MenuItem>
              <MenuItem value={4}>IVF Transfer Date</MenuItem>
            </Select>
          </FormControl>
        </div>
        {basedOn === 0 && (
          <div>
            <TextField
              fullWidth
              label="Due Date"
              type="date"
              value={dueDate || ""}
              onChange={(e) => setDueDate(e.target.value)}
              sx={{ mb: 2 }}
            />
          </div>
        )}
        {basedOn === 1 && (
          <div>
            <TextField
              fullWidth
              label="First Day of Last Period"
              type="date"
              value={firstDay || ""}
              onChange={(e) => setFirstDay(e.target.value)}
              sx={{ mb: 2 }}
            />
            <FormControl fullWidth variant="outlined" sx={{ mb: 2 }}>
              <TextField
                type="number"
                label="Average Cycle Length"
                value={avgCyclesLength}
                onChange={(e) => setAvgCyclesLength(e.target.value)}
              />
            </FormControl>
          </div>
        )}
        {basedOn === 2 && (
          <div>
            <TextField
              fullWidth
              label="Ultrasound Date"
              type="date"
              value={ultrasoundDate || ""}
              onChange={(e) => setUltrasoundDate(e.target.value)}
              sx={{ mb: 2 }}
            />
            <FormControl fullWidth variant="outlined" sx={{ mb: 2 }}>
              <TextField
                type="number"
                label="Pregnancy Weeks"
                value={pregnancyWeeks}
                onChange={(e) => setPregnancyWeeks(e.target.value)}
              />
            </FormControl>
            <FormControl fullWidth variant="outlined" sx={{ mb: 2 }}>
              <TextField
                type="number"
                label="Pregnancy Days"
                value={pregnancyDays}
                onChange={(e) => setPregnancyDays(e.target.value)}
              />
            </FormControl>
          </div>
        )}
        {basedOn === 3 && (
          <div>
            <TextField
              fullWidth
              label="Conception Date"
              type="date"
              value={conceptionDate || ""}
              onChange={(e) => setConceptionDate(e.target.value)}
              sx={{ mb: 2 }}
            />
          </div>
        )}
        {basedOn === 4 && (
          <div>
            <TextField
              fullWidth
              label="IVF Transfer Date"
              type="date"
              value={transferDate || ""}
              onChange={(e) => setTransferDate(e.target.value)}
              sx={{ mb: 2 }}
            />
            <FormControl fullWidth variant="outlined" sx={{ mb: 2 }}>
              <InputLabel>Embryo Age</InputLabel>
              <Select
                value={embryoAge}
                onChange={(e) => setEmbryoAge(e.target.value)}
              >
                <MenuItem value="Day 5">Day 5</MenuItem>
                <MenuItem value="Day 3">Day 3</MenuItem>
              </Select>
            </FormControl>
          </div>
        )}
        <Button
          variant="contained"
          color="primary"
          onClick={handleCalculate}
          sx={{ mt: 2 }}
        >
          Calculate
        </Button>
        <Typography variant="body1" sx={{ mt: 2 }}>
          {result}
        </Typography>
      </Container>
    </div>
  );
}

export default PregnancyCalculator;
