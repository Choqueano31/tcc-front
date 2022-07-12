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
import { Assignment } from "@material-ui/icons";
import { FormControl, InputLabel, MenuItem, Select, TextField } from "@material-ui/core";
import myApi from "Service/Api";

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
      description: "",
      descriptionState: "",
      bloco:"",
      blocoState:"",

      blocoList: []
    };
  }

  sendState() {
    const dados = {
      name: this.state.name,
      bloco: this.state.bloco,
    };
    return dados;
  }
  // function that returns true if value is email, false otherwise
 async blocoLists(){
    const response = await myApi.get("/bloco")
    this.setState({ blocoList: response.data });
  }
  componentDidMount(){
    this.blocoLists()
  }
  verifyEmail(value) {
    var emailRex =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (emailRex.test(value)) {
      return true;
    }
    return false;
  }
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
        <GridItem xs={12} sm={11}>
        <FormControl
        
                        fullWidth
                        className={classes.selectFormControl}
                      >
                        <InputLabel
                          htmlFor="simple-select"
                          className={classes.selectLabel}
                        >
                          Escolha o bloco
                        </InputLabel>
                        <Select
                       
                          MenuProps={{
                            className: classes.selectMenu
                          }}
                          classes={{
                            select: classes.select
                          }}
                          value={this.state.bloco}
                          onChange={this.handleSimple}
                          inputProps={{
                            name: "bloco",
                            id: "bloco"
                          }}
                        >
                          <MenuItem
                            disabled
                            classes={{
                              root: classes.selectMenuItem
                            }}
                          >
                            Escolha o bloco
                          </MenuItem>
                          {this.state.blocoList.map((item)=>{
                            return(

                          <MenuItem
                          key={item.id}
                            classes={{
                              root: classes.selectMenuItem,
                              selected: classes.selectMenuItemSelected
                            }}
                            value={item.id}
                          >
                            {item.nome}
                          </MenuItem>
                            )
                          })}

                        </Select>
                      </FormControl>
        </GridItem>
      </GridContainer>
    );
  };
}

Step1.propTypes = {
  classes: PropTypes.object,
};

export default withStyles(style)(Step1);
