import React from "react";
import {
  AppBar,
  Link,
  Container,
  Toolbar,
  Typography,
} from "@material-ui/core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithubSquare } from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
  return (
    <AppBar position="static" color="primary">
      <Container maxWidth="md">
        <Toolbar style={{ justifyContent: "center", flexDirection: "column" }}>
          <Typography variant="body1" color="inherit">
            Powered by Chua Te Web
          </Typography>
          <Typography
            variant="body1"
            color="inherit"
            style={{ display: "flex", alignItems: "center" }}
          >
            View My source
            <Link href="https://github.com/khmt-khapro/covidTracking" style={{marginLeft: 10 }}>
              <FontAwesomeIcon
                icon={faGithubSquare}
                style={{ fontSize: 30, color: 'white'}}
              />
            </Link>
          </Typography>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
