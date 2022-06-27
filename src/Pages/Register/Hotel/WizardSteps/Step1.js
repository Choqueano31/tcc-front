import { TextField } from "@material-ui/core";
import InputAdornment from "@material-ui/core/InputAdornment";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import { MarkunreadMailbox } from "@material-ui/icons";
// @material-ui/icons
import Face from "@material-ui/icons/Face";
import defaultImage from "assets/img/default-avatar.png";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import PropTypes from "prop-types";
import React from "react";
import myApi from "Service/Api";

// import InputMask from "react-input-mask";
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
      usuario_id: null,
      cpf: "",
      cpfState: "",
      name: "",
      nameState: "",
      name_guerra: "",
      address: "",
      lastname: "",
      lastnameState: "",
      email: "",
      emailState: "",
    };
  }
  sendState() {
    return this.state;
  }
  async searchAssociate(cpf) {
    const response = await myApi.get(`/associadosteamindividual/${cpf}`);
    this.setState({
      usuario_id: response.data.id,
      name: response.data.nome,
      address: response.data.endereco_logradouro
        ? response.data.endereco_logradouro
        : "Nenhum endereço cadastrado",
      name_guerra: response.data.nome_funcional,
    });
    // console.log(response.data);
  }
  // function that returns true if value is email, false otherwise
  verifyEmail(value) {
    var emailRex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
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
  verifyLengthCpf(value, length) {
    if (value.length >= length) {
      return true;
    }
    return false;
  }
  change(event, stateName, type, stateNameEqualTo) {
    switch (type) {
      case "cpf":
        if (this.verifyLengthCpf(event.target.value, stateNameEqualTo)) {
          this.setState({ [stateName + "State"]: "success" });
          this.searchAssociate(event.target.value);
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
  isValidated() {
    if (this.state.cpfState === "success") {
      return true;
    } else {
      if (this.state.cpfState !== "success") {
        this.setState({ cpfState: "error" });
      }
      // if (this.state.lastnameState !== "success") {
      //   this.setState({ lastnameState: "error" });
      // }
      // if (this.state.emailState !== "success") {
      //   this.setState({ emailState: "error" });
      // }
    }
    return false;
  }
  render() {
    const { classes } = this.props;
    return (
      <GridContainer justify="center">
        <GridItem xs={12} sm={12}>
          <h4 className={classes.infoText}></h4>
        </GridItem>
        <GridItem xs={12} sm={4}>
          <div className="picture-container">
            <div className="picture">
              <img src={defaultImage} className="picture-src" alt="..." />
            </div>
            <h6 className="description"></h6>
          </div>
          {/* <PictureUpload /> */}
        </GridItem>
        <GridItem xs={12} sm={6}>
          {/* <InputMask
            mask="999.999.999-99"
            maskPlaceholder=""
            onChange={(event) =>
              this.change(event, "cpf", "length", 14) +
              console.log(parseInt(event.target.value))
            }
            value={this.state.cpf}
          > */}

          <TextField
            style={{ marginTop: 10, width: "100%" }}
            formControlProps={{
              fullWidth: true,
            }}
            success={this.state.cpfState === "success"}
            error={this.state.cpfState === "error"}
            onChange={(event) => this.change(event, "cpf", "cpf", 11)}
            value={this.state.cpf}
            id="standard-basic"
            label={
              <span>
                CPF{" "}
                {this.state.cpfState === "error" ? (
                  <small>(obrigatório)</small>
                ) : null}
              </span>
            }
            InputProps={{
              endAdornment: (
                <InputAdornment position="start">
                  <Face />
                </InputAdornment>
              ),
            }}
          />

          {/* <CustomInput
            success={this.state.cpfState === "success"}
            error={this.state.cpfState === "error"}
            labelText={
              <span>
                Digite o CPF <small>(required)</small>
              </span>
            }
            id="cpf"
            formControlProps={{
              fullWidth: true,
            }}
            inputProps={{
              onChange: (event) => this.change(event, "cpf", "length", 3),
              endAdornment: (
                <InputAdornment
                  position="end"
                  className={classes.inputAdornment}
                >
                  <Face className={classes.inputAdornmentIcon} />
                </InputAdornment>
              ),
            }}
          /> */}
          <TextField
            style={{ marginTop: 10, width: "100%" }}
            formControlProps={{
              fullWidth: true,
            }}
            // success={this.state.cpfState === "success"}
            // error={this.state.cpfState === "error"}
            // onChange={(event) => this.change(event, "cpf", "cpf", 11)}
            value={this.state.name}
            id="standard-basic"
            label={<span>Nome Completo</span>}
            // disabled
            InputProps={{
              endAdornment: (
                <InputAdornment position="start">
                  <Face />
                </InputAdornment>
              ),
            }}
          />
          <TextField
            style={{ marginTop: 10, width: "100%" }}
            formControlProps={{
              fullWidth: true,
            }}
            // success={this.state.cpfState === "success"}
            // error={this.state.cpfState === "error"}
            // onChange={(event) => this.change(event, "cpf", "cpf", 11)}
            value={this.state.name_guerra}
            id="standard-basic"
            label={<span>Nome de guerra</span>}
            // disabled
            InputProps={{
              endAdornment: (
                <InputAdornment position="start">
                  <Face />
                </InputAdornment>
              ),
            }}
          />
        </GridItem>
        <GridItem xs={12} sm={12} md={12} lg={10}>
          <TextField
            style={{ marginTop: 10, width: "100%" }}
            formControlProps={{
              fullWidth: true,
            }}
            // success={this.state.cpfState === "success"}
            // error={this.state.cpfState === "error"}
            // onChange={(event) => this.change(event, "cpf", "cpf", 11)}
            value={this.state.address}
            id="standard-basic"
            label={<span>Endereço</span>}
            // disabled
            InputProps={{
              endAdornment: (
                <InputAdornment position="start">
                  <MarkunreadMailbox />
                </InputAdornment>
              ),
            }}
          />
        </GridItem>
      </GridContainer>
    );
  }
}

Step1.propTypes = {
  classes: PropTypes.object,
};

export default withStyles(style)(Step1);
