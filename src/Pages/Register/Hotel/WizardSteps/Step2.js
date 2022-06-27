import React from "react";
import PropTypes from "prop-types";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
// import Select from "@material-ui/core/Select";
// import MenuItem from "@material-ui/core/MenuItem";
// import InputLabel from "@material-ui/core/InputLabel";
// import FormControl from "@material-ui/core/FormControl";
// import Checkbox from "@material-ui/core/Checkbox";

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import "date-fns";
import { ptBR } from "date-fns/esm/locale";
import DateFnsUtils from "@date-io/date-fns";

import customSelectStyle from "assets/jss/material-dashboard-pro-react/customSelectStyle.js";
import customCheckboxRadioSwitch from "assets/jss/material-dashboard-pro-react/customCheckboxRadioSwitch.js";
import {
  KeyboardDatePicker,
  MuiPickersUtilsProvider,
} from "@material-ui/pickers";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Paper,
} from "@material-ui/core";
import myApi from "Service/Api";
import { toast } from "react-toastify";

const style = {
  infoText: {
    fontWeight: "300",
    margin: "10px 0 30px",
    textAlign: "center",
  },
  inputAdornmentIcon: {
    color: "#555",
  },
  choiche: {
    textAlign: "center",
    cursor: "pointer",
    marginTop: "20px",
  },
  ...customSelectStyle,
  ...customCheckboxRadioSwitch,
};

class Step2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data_entry: null,
      data_entryState: "",
      data_exit: null,
      data_exitState: "",
      id_apt: null,
      id_aptState: "",
      aptlist: [],

      open: false,
      info: {},

      simpleSelect: "",
      desgin: false,
      code: false,
      develop: false,
    };
  }
  async list() {
    try {
      const response = await myApi.get("/bedroomslist");
      this.setState({ aptlist: response.data });
    } catch {
      toast.error("não foi possível encontrar quartos disponíveis");
    }
  }

  componentDidMount() {
    this.list();
  }
  sendState() {
    const dados = {
      data_entry: this.state.data_entry,
      data_exit: this.state.data_exit,
      id_apt: this.state.id_apt,
    };
    return dados;
  }
  handleSimple = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };
  handleChange = (name) => (event) => {
    this.setState({ [name]: event.target.checked });
  };
  isValidated() {
    if (
      this.state.data_entryState === "success" &&
      this.state.data_exitState === "success" &&
      this.state.id_aptState === "success"
    ) {
      return true;
    } else {
      if (this.state.data_entryState !== "success") {
        this.setState({ data_entryState: "error" });
      }
      if (this.state.data_exitState !== "success") {
        this.setState({ data_exitState: "error" });
      }
      if (this.state.id_aptState !== "success") {
        this.setState({ id_aptState: "error" });
      }
    }
    return false;
  }
  openModal(item) {
    this.setState({ info: item });
    this.setState({ open: true });
  }
  closeModal() {
    this.setState({ open: false });
  }
  confirmedAp() {
    this.setState({
      open: false,
      id_apt: this.state.info.id,
      id_aptState: "success",
    });
  }
  render() {
    const { classes } = this.props;
    return (
      <div>
        <Dialog
          open={this.state.open}
          fullWidth
          onClose={() => this.closeModal()}
        >
          <DialogTitle>Você selecionou: {this.state.info?.name} </DialogTitle>
          <DialogContent>
            <GridContainer justify="center">
              <GridItem xs={12} sm={12} md={12} lg={10}>
                <p style={{ fontSize: 17 }}>
                  <b>Descrição</b>: {this.state.info.description}{" "}
                </p>
              </GridItem>
            </GridContainer>
          </DialogContent>
          <DialogActions>
            <Button onClick={() => this.closeModal()} color="primary">
              Cancelar
            </Button>
            <Button onClick={() => this.confirmedAp()} color="primary">
              Confirmar Ocupação
            </Button>
          </DialogActions>
        </Dialog>
        {/* <h4 className={classes.infoText}>What are you doing? (checkboxes)</h4> */}
        <GridContainer justify="center">
          <GridItem xs={12} sm={12} md={12} lg={10}>
            <GridContainer>
              <GridItem xs={12} sm={6}>
                <MuiPickersUtilsProvider utils={DateFnsUtils} locale={ptBR}>
                  <KeyboardDatePicker
                    success={this.state.data_entryState === "success"}
                    error={this.state.data_entryState === "error"}
                    margin="normal"
                    id="date-picker-dialog"
                    label={`Data de Entrada ${
                      this.state.data_entryState === "error"
                        ? "(Obrigatório)"
                        : ""
                    }`}
                    format="dd/MM/yyyy"
                    value={this.state.data_entry}
                    onChange={(e) =>
                      this.setState({ data_entry: e }) +
                      this.setState({ data_entryState: "success" })
                    }
                    KeyboardButtonProps={{
                      "aria-label": "change date",
                      "color-label": "red",
                    }}
                  />
                </MuiPickersUtilsProvider>
              </GridItem>
              <GridItem xs={12} sm={6}>
                <MuiPickersUtilsProvider utils={DateFnsUtils} locale={ptBR}>
                  <KeyboardDatePicker
                    success={this.state.data_exitState === "success"}
                    error={this.state.data_exitState === "error"}
                    margin="normal"
                    id="date-picker-dialog"
                    label={`Data de Saída ${
                      this.state.data_exitState === "error"
                        ? "(Obrigatório)"
                        : ""
                    }`}
                    format="dd/MM/yyyy"
                    value={this.state.data_exit}
                    onChange={(e) =>
                      this.setState({ data_exit: e }) +
                      this.setState({ data_exitState: "success" })
                    }
                    KeyboardButtonProps={{
                      "aria-label": "change date",
                      "color-label": "red",
                    }}
                  />
                </MuiPickersUtilsProvider>
              </GridItem>
              <GridItem xs={12} sm={12}>
                <h4
                  className={classes.infoText}
                  style={{ fontWeight: "bold", marginTop: 10 }}
                >
                  Escolha o Quarto do Hospede{" "}
                  {this.state.id_aptState === "error" ? (
                    <b style={{ color: "red" }}> Obrigatório </b>
                  ) : (
                    ""
                  )}
                </h4>
              </GridItem>

              {this.state.aptlist.map((item) => {
                return (
                  <GridItem key={item.id} xs={12} sm={3}>
                    <div style={{ height: 50 }}>
                      <Paper
                        onClick={() => {
                          // item.status !== 2
                          //   ? this.openModal(item)
                          //   : {}
                        }}
                        key={item.id}
                        elevation={3}
                        style={{
                          display: "flex",
                          cursor: "pointer",
                          height: 30,
                          textAlign: "center",
                          fontWeight: "bold",
                          justifyContent: "center",
                          alignItems: "center",
                        }}
                      >
                        {item.status !== 2 ? (
                          <>
                            {item.name}{" "}
                            {this.state.id_apt === item.id ? (
                              <p
                                style={{
                                  color: "red",
                                  display: "flex",
                                  alignItems: "center",
                                  justifyContent: "center",
                                  marginLeft: 5,
                                  marginTop: 10,
                                }}
                              >
                                {" "}
                                RESERVADO{" "}
                              </p>
                            ) : null}
                          </>
                        ) : (
                          <>
                            <p
                              style={{
                                color: "gray",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                marginLeft: 5,
                                marginTop: 10,
                              }}
                            >
                              {item.name} (Ocupado)
                            </p>
                          </>
                        )}
                      </Paper>
                    </div>
                  </GridItem>
                );
              })}

              {/* <GridItem xs={12} sm={4}>
                <div className={classes.choiche}>
                  <Checkbox
                    tabIndex={-1}
                    onClick={this.handleChange("develop")}
                    checkedIcon={
                      <i
                        className={"fas fa-laptop " + classes.iconCheckboxIcon}
                      />
                    }
                    icon={
                      <i
                        className={"fas fa-laptop " + classes.iconCheckboxIcon}
                      />
                    }
                    classes={{
                      checked: classes.iconCheckboxChecked,
                      root: classes.iconCheckbox,
                    }}
                  />
                  <h6>Develop</h6>
                </div>
                <FormControl fullWidth className={classes.selectFormControl}>
                  <InputLabel
                    htmlFor="simple-select"
                    className={classes.selectLabel}
                  >
                    Choose City
                  </InputLabel>
                  <Select
                    MenuProps={{
                      className: classes.selectMenu,
                    }}
                    classes={{
                      select: classes.select,
                    }}
                    value={this.state.simpleSelect}
                    onChange={this.handleSimple}
                    inputProps={{
                      name: "simpleSelect",
                      id: "simple-select",
                    }}
                  >
                    <MenuItem
                      disabled
                      classes={{
                        root: classes.selectMenuItem,
                      }}
                    >
                      Choose City
                    </MenuItem>
                    <MenuItem
                      classes={{
                        root: classes.selectMenuItem,
                        selected: classes.selectMenuItemSelected,
                      }}
                      value="2"
                    >
                      Paris
                    </MenuItem>
                    <MenuItem
                      classes={{
                        root: classes.selectMenuItem,
                        selected: classes.selectMenuItemSelected,
                      }}
                      value="3"
                    >
                      Bucharest
                    </MenuItem>
                  </Select>
                </FormControl>
              </GridItem> */}
            </GridContainer>
          </GridItem>
        </GridContainer>
      </div>
    );
  }
}

Step2.propTypes = {
  classes: PropTypes.object,
};

export default withStyles(style)(Step2);
