import React from "react";
import { Grid } from "@material-ui/core";
import HighlightCard from "./HighlightCard";

export default function Highlight({ report }) {
  // kiem tra co du lieu hay khong
  const data = report && report.length ? report[report.length - 1] : [];
  const summary = [
    {
      title: "Số ca nhiễm",
      count: data.Confirmed,
      type: "confirmed",
    },
    {
      title: "Số ca tử vong",
      count: data.Deaths,
      type: "deadths",
    },
  ];
  return (
    <Grid container spacing={3} style={{ marginTop: 10, marginBottom: 20 }}>
      {summary.map((item, index) => (
        <Grid key={index} item sm={4} xs={12}>
          <HighlightCard
            title={item.title}
            count={item.count}
            type={item.type}
          />
        </Grid>
      ))}
    </Grid>
  );
}
