import React from "react";
import PropTypes from "prop-types";
// @material-ui/icons
// import Face from "@material-ui/icons/Face";
// import RecordVoiceOver from "@material-ui/icons/RecordVoiceOver";
// import Email from "@material-ui/icons/Email";

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import InputAdornment from "@material-ui/core/InputAdornment";
import "date-fns";

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
// import CustomInput from "components/CustomInput/CustomInput.js";
import { Assignment, Check } from "@material-ui/icons";
import { Checkbox, FormControlLabel, TextField } from "@material-ui/core";

const style = {
  infoText: {
    fontWeight: "300",
    margin: "10px 0 30px",
    textAlign: "center",
  },
  inputAdornmentIcon: {
    color: "#555",
  },
  inputAdornment: {
    position: "relative",
  },
};

class Step3 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      obs: "",
      obsState: "",
      occurrency: "",
      occurrencyState: "",
      checked:[24, 22]
    };
  }

  sendState() {
    const dados = {
      obs: this.state.obs,
      occurrency: this.state.occurrency,
    };
    return dados;
  }
  // function that returns true if value is email, false otherwise
  // function that verifies if a string has a given length or not
  verifyLength(value, length) {
    if (value.length >= length) {
      return true;
    }
    return false;
  }
  change(event, stateName, type, stateNameEqualTo) {
    switch (type) {
      case "email":
        if (this.verifyEmail(event.target.value)) {
          this.setState({ [stateName + "State"]: "success" });
        } else {
          this.setState({ [stateName + "State"]: "error" });
        }
        break;

      case "length":
        if (this.verifyLength(event.target.value, stateNameEqualTo)) {
          this.setState({ [stateName + "State"]: "success" });
        } else {
          this.setState({ [stateName + "State"]: "error" });
        }
        break;
      default:
        break;
    }
    this.setState({ [stateName]: event.target.value });
  }
  handleToggle = value => {
    const currentIndex = this.state.checked.indexOf(value);
    const newChecked = [...this.state.checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }
    //setChecked(newChecked);
    this.setState({checked:newChecked})
  };
  handleSimple = (event) => {
    this.setState({ [event.target.name]: event.target.value });
    this.setState({ [event.target.name + "State"]: "success" });
  };
  isValidated() {
    return true;
  }
  render = () => {
    const { classes } = this.props;
    return (
      <GridContainer justify="center">
        <GridItem xs={12} sm={12}>
          <h4 className={classes.infoText}>Preencha os horarios/dias com restrição (caso houver)</h4>
        </GridItem>
        <GridItem xs={12} sm={11}>
          <TextField
            style={{ marginTop: 10, width: "100%" }}
            formControlProps={{
              fullWidth: true,
            }}
            onChange={(event) => this.change(event, "obs", "length", 2)}
            success={this.state.obsState === "success"}
            error={this.state.obsState === "error"}
            id="standard-basic"
            label={
              <span>
                Observações
                {this.state.obsState === "error" ? (
                  <small> (obrigatorio)</small>
                ) : null}
              </span>
            }
            value={this.state.obs}
            InputProps={{
              endAdornment: (
                <InputAdornment position="start">
                  <Assignment />
                </InputAdornment>
              ),
            }}
          />
        </GridItem>
        <GridItem xs={12} sm={11}>
          <TextField
            style={{ marginTop: 10, width: "100%" }}
            formControlProps={{
              fullWidth: true,
            }}
            onChange={(event) => this.change(event, "occurrency", "length", 2)}
            success={this.state.occurrencyState === "success"}
            error={this.state.occurrencyState === "error"}
            id="standard-basic"
            label={
              <span>
                Descrição
                {this.state.occurrencyState === "error" ? (
                  <small> (obrigatorio)</small>
                ) : null}
              </span>
            }
            value={this.state.occurrency}
            InputProps={{
              endAdornment: (
                <InputAdornment position="start">
                  <Assignment />
                </InputAdornment>
              ),
            }}
          />
        </GridItem>
      </GridContainer>
    );
  };
}

Step3.propTypes = {
  classes: PropTypes.object,
};

export default withStyles(style)(Step3);
