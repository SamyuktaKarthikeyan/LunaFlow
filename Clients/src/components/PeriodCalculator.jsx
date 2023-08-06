import React, { useState } from "react";
import {
  Container,
  Typography,
  TextField,
  Button,
  TableContainer,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Paper,
} from "@mui/material";

function PeriodCalculator() {
  const [firstDay, setFirstDay] = useState("");
  const [cycleLength, setCycleLength] = useState("");
  const [periodDuration, setPeriodDuration] = useState("");
  const [currentDate, setCurrentDate] = useState("");
  const [result, setResult] = useState([]);
  const [currentStage, setCurrentStage] = useState("");

  const handleCalculate = () => {
    if (!firstDay || !cycleLength || !periodDuration || !currentDate) {
      setResult([]);
      setCurrentStage("");
      return;
    }

    const today = new Date(currentDate);
    const cycleLengthInt = parseInt(cycleLength);
    const periodDurationInt = parseInt(periodDuration);
    const startDate = new Date(firstDay);

    const next6Cycles = [];
    let foundStage = false;
    for (let i = 0; i < 6; i++) {
      const date = new Date(startDate);
      date.setDate(date.getDate() + cycleLengthInt * i);

      const ovulationWindowStart = new Date(date);
      ovulationWindowStart.setDate(ovulationWindowStart.getDate() + 12); // Add 14 days to get ovulation start date

      const ovulationWindowEnd = new Date(date);
      ovulationWindowEnd.setDate(ovulationWindowEnd.getDate() + 16); // Add 18 days to get ovulation end date

      const periodStart = new Date(date);
      periodStart.setDate(periodStart.getDate());

      const periodEnd = new Date(date);
      periodEnd.setDate(periodEnd.getDate() + periodDurationInt - 1);

      next6Cycles.push({
        period: `${formattedDate(periodStart)} - ${formattedDate(periodEnd)}`,
        ovulation: `${formattedDate(ovulationWindowStart)} - ${formattedDate(
          ovulationWindowEnd
        )}`,
      });

      // Check current stage
      if (!foundStage) {
        if (today >= periodStart && today <= periodEnd) {
          setCurrentStage(
            `You are in your period from ${formattedDate(
              periodStart
            )} to ${formattedDate(periodEnd)}`
          );
          foundStage = true;
        } else if (
          today >= ovulationWindowStart &&
          today <= ovulationWindowEnd
        ) {
          setCurrentStage(
            `You are in your ovulation window from ${formattedDate(
              ovulationWindowStart
            )} to ${formattedDate(ovulationWindowEnd)}`
          );
          foundStage = true;
        } else {
          setCurrentStage("You are in your regular cycle.");
        }
      }
    }

    setResult(next6Cycles);
  };

  const formattedDate = (date) => {
    const monthNames = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];
    const day = date.getDate();
    const month = monthNames[date.getMonth()];
    return `${month}. ${day}`;
  };

  return (
    <div
      style={{
        backgroundImage:
          "url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhuB8xGzbllOAl_cDCHP49uwmnsvZr5S1bY-AuHy8xUHYE4lWa2g4O1_5_XNz66qxYs1k&usqp=CAU)",
        paddingTop: "10vh",
        height: "180vh",
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
          marginTop: 0,
        }}
      >
        <Typography variant="h5" sx={{ mt: 2 }} gutterBottom>
          Period Calculator
        </Typography>
        <TextField
          fullWidth
          label="First Day of Your Last Period"
          type="date"
          value={firstDay}
          onChange={(e) => setFirstDay(e.target.value)}
          sx={{ mt: 2 }}
        />
        <TextField
          fullWidth
          label="Average Length of Cycles"
          type="number"
          value={cycleLength}
          onChange={(e) => setCycleLength(e.target.value)}
          sx={{ mt: 2 }}
        />
        <TextField
          fullWidth
          label="How long did it last? (Duration of Last Period)"
          type="number"
          value={periodDuration}
          onChange={(e) => setPeriodDuration(e.target.value)}
          sx={{ mt: 2 }}
        />
        <TextField
          fullWidth
          label="Current Date"
          type="date"
          value={currentDate}
          onChange={(e) => setCurrentDate(e.target.value)}
          sx={{ mt: 2 }}
        />
        <Button
          variant="contained"
          color="primary"
          onClick={handleCalculate}
          sx={{ mt: 2 }}
        >
          Calculate
        </Button>

        {result.length > 0 && (
          <TableContainer component={Paper} sx={{ mt: 4 }}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Period</TableCell>
                  <TableCell>Most Probable Ovulation Days</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {result.map((item, index) => (
                  <TableRow key={index}>
                    <TableCell>{item.period}</TableCell>
                    <TableCell>{item.ovulation}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        )}
        {currentStage && (
          <Typography variant="body1" sx={{ mt: 4 }}>
            Current Stage: {currentStage}
          </Typography>
        )}
      </Container>
    </div>
  );
}

export default PeriodCalculator;
