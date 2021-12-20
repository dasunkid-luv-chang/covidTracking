import React from "react";
import {Card, CardContent, Typography, makeStyles } from "@material-ui/core";
import CountUp from 'react-countup'

// makeStyle
const useStyles = makeStyles({
    wrapper: (props) => {
        if(props.type === 'confirmed') return {borderLeft: '5px solid #faeb16'}
        if(props.type === 'deadths') return {borderLeft: '5px solid #c9302c'}
    },
    title: {
        fontSize: 20,
        marginBottom: 5
    },
    count: {
        fontWeight: "bold",
        fontSize: 20
    }
})

export default function HighlightCard({title, count, type}) {
const style = useStyles({type})
  return (
    <Card className={style.wrapper} style={{backgroundColor: '#c4c4c4'}}>
      <CardContent>
        <Typography variant="body2" component="p" className={style.title}>
          {title}
        </Typography>
        <Typography variant="body2" component="span" className={style.count}> 
          <CountUp end={count} duration={1} separator=" " />
        </Typography>
      </CardContent>
    </Card>
  );
}
