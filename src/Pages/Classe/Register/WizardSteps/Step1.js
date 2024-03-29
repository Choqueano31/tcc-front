import PropTypes from "prop-types";
import React from "react";
// @material-ui/icons
// import Face from "@material-ui/icons/Face";
// import RecordVoiceOver from "@material-ui/icons/RecordVoiceOver";
// import Email from "@material-ui/icons/Email";

// @material-ui/core components
import InputAdornment from "@material-ui/core/InputAdornment";
import withStyles from "@material-ui/core/styles/withStyles";
import "date-fns";

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
// import CustomInput from "components/CustomInput/CustomInput.js";
import { TextField } from "@material-ui/core";
import { Assignment } from "@material-ui/icons";

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

class Step1 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      nameState: "",
    };
  }
  cleanStates(){
    this.setState({
        name: ''

      })

    }
  sendState() {
    const dados = {
      name: this.state.name.toUpperCase(),
     // bloco: this.state.bloco,
    };
    setTimeout(() => {
      this.cleanStates()
    }, 1500);
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
   handleSimple (event) {
    this.setState({ [event.target.name]: event.target.value });
  }
  change(event, stateName, type, stateNameEqualTo) {
    switch (type) {
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
  handleSimple = (event) => {
    this.setState({ [event.target.name]: event.target.value });
    this.setState({ [event.target.name + "State"]: "success" });
  };
  isValidated() {
    if (
      this.state.nameState === "success"
    ) {
      return true;
    } else {
      if (this.state.nameState !== "success") {
        this.setState({ nameState: "error" });
      }

    }
    return false;
  }
  render = () => {
    const { classes } = this.props;
    return (
      <GridContainer justify="center">
        <GridItem xs={12} sm={12}>
          <h4 className={classes.infoText}>Preencha os campos abaixo</h4>
        </GridItem>
        <GridItem xs={12} sm={11}>
          <TextField
            style={{ marginTop: 10, width: "100%" }}
            formControlProps={{
              fullWidth: true,
            }}
            onChange={(event) => this.change(event, "name", "length", 2)}
            success={this.state.nameState === "success"}
            error={this.state.nameState === "error"}
            id="standard-basic"
            label={
              <span>
                Nome da sala
                {this.state.nameState === "error" ? (
                  <small> (obrigatorio)</small>
                ) : null}
              </span>
            }
            value={this.state.name}
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

Step1.propTypes = {
  classes: PropTypes.object,
};

export default withStyles(style)(Step1);
