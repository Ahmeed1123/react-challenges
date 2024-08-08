import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import { alpha, styled } from "@mui/material/styles";
import { pink } from "@mui/material/colors";
import Switch from "@mui/material/Switch";
import { Container } from "@mui/material";
import Collapse from "@mui/material/Collapse";

const label = { inputProps: { "aria-label": "Color switch demo" } };

export default function Material() {
    const [checked, setChecked] = React.useState(true);

    // const handleChange = () => {
    //   setChecked((prev) => !prev);
    // };
  return (
   
    <Container maxWidth="md">
      <div>
        <Accordion>
          <AccordionSummary
            expandIcon={<ArrowDownwardIcon />}
            aria-controls="panel1-content"
            id="panel1-header"
          >
            <Typography>Accordion 1</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
              eget.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ArrowDownwardIcon />}
            aria-controls="panel2-content"
            id="panel2-header"
          >
            <Typography>Accordion 2</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              <Switch
                {...label}
                onChange={() => {
                    setChecked((prev) => !prev);
                }}
                value={checked}
                defaultChecked
                color="warning"
              />
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Collapse in={checked} collapsedSize={80}>
          <div
            style={{
              width: "100%",
              height: "400px",
              background: "orange",
              borderRadius: "15px",
            }}
          >
            <h1>Hello world</h1>
          </div>
        </Collapse>
      </div>
    </Container>
  );
}
