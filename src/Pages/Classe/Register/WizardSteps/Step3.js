import PropTypes from "prop-types";
import React from "react";
// @material-ui/icons
// import Face from "@material-ui/icons/Face";
// import RecordVoiceOver from "@material-ui/icons/RecordVoiceOver";
// import Email from "@material-ui/icons/Email";

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import "date-fns";

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
// import CustomInput from "components/CustomInput/CustomInput.js";
import { Checkbox } from 'primereact/checkbox';

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

    this.categories = [
      {name: '07:30 - 08:20', id: '1', day:'segunda-feira'},
      {name: '08:20 - 09:10', id: '2', day:'segunda-feira'},
      {name: '09:20 - 10:10', id: '3', day:'segunda-feira'},
      {name: '10:10 - 11:00', id: '4', day:'segunda-feira'},
      {name: '11:10 - 12:00', id: '5', day:'segunda-feira'},
      {name: '12:00 - 12:50', id: '6', day:'segunda-feira'},
      {name: '13:00 - 13:50', id: '7', day:'segunda-feira'},
      {name: '13:50 - 14:40', id: '8', day:'segunda-feira'},
      {name: '14:50 - 15:40', id: '9', day:'segunda-feira'},
      {name: '15:40 - 16:30', id: '10', day:'segunda-feira'},
      {name: '16:40 - 17:30', id: '11', day:'segunda-feira'},
      {name: '17:30 - 18:20', id: '12', day:'segunda-feira'},

      {name: '07:30 - 08:20', id: '13', day:'terça-feira'},
      {name: '08:20 - 09:10', id: '14', day:'terça-feira'},
      {name: '09:20 - 10:10', id: '15', day:'terça-feira'},
      {name: '10:10 - 11:00', id: '16', day:'terça-feira'},
      {name: '11:10 - 12:00', id: '17', day:'terça-feira'},
      {name: '12:00 - 12:50', id: '18', day:'terça-feira'},
      {name: '13:00 - 13:50', id: '19', day:'terça-feira'},
      {name: '13:50 - 14:40', id: '20', day:'terça-feira'},
      {name: '14:50 - 15:40', id: '21', day:'terça-feira'},
      {name: '15:40 - 16:30', id: '22', day:'terça-feira'},
      {name: '16:40 - 17:30', id: '23', day:'terça-feira'},
      {name: '17:30 - 18:20', id: '24', day:'terça-feira'},

      {name: '07:30 - 08:20', id: '25', day:'quarta-feira'},
      {name: '08:20 - 09:10', id: '26', day:'quarta-feira'},
      {name: '09:20 - 10:10', id: '27', day:'quarta-feira'},
      {name: '10:10 - 11:00', id: '28', day:'quarta-feira'},
      {name: '11:10 - 12:00', id: '29', day:'quarta-feira'},
      {name: '12:00 - 12:50', id: '30', day:'quarta-feira'},
      {name: '13:00 - 13:50', id: '31', day:'quarta-feira'},
      {name: '13:50 - 14:40', id: '32', day:'quarta-feira'},
      {name: '14:50 - 15:40', id: '33', day:'quarta-feira'},
      {name: '15:40 - 16:30', id: '34', day:'quarta-feira'},
      {name: '16:40 - 17:30', id: '35', day:'quarta-feira'},
      {name: '17:30 - 18:20', id: '36', day:'quarta-feira'},

      {name: '07:30 - 08:20', id: '37', day:'quinta-feira'},
      {name: '08:20 - 09:10', id: '38', day:'quinta-feira'},
      {name: '09:20 - 10:10', id: '39', day:'quinta-feira'},
      {name: '10:10 - 11:00', id: '40', day:'quinta-feira'},
      {name: '11:10 - 12:00', id: '41', day:'quinta-feira'},
      {name: '12:00 - 12:50', id: '42', day:'quinta-feira'},
      {name: '13:00 - 13:50', id: '43', day:'quinta-feira'},
      {name: '13:50 - 14:40', id: '44', day:'quinta-feira'},
      {name: '14:50 - 15:40', id: '45', day:'quinta-feira'},
      {name: '15:40 - 16:30', id: '46', day:'quinta-feira'},
      {name: '16:40 - 17:30', id: '47', day:'quinta-feira'},
      {name: '17:30 - 18:20', id: '48', day:'quinta-feira'},

      {name: '07:30 - 08:20', id: '49', day:'sexta-feira'},
      {name: '08:20 - 09:10', id: '50', day:'sexta-feira'},
      {name: '09:20 - 10:10', id: '51', day:'sexta-feira'},
      {name: '10:10 - 11:00', id: '52', day:'sexta-feira'},
      {name: '11:10 - 12:00', id: '53', day:'sexta-feira'},
      {name: '12:00 - 12:50', id: '54', day:'sexta-feira'},
      {name: '13:00 - 13:50', id: '55', day:'sexta-feira'},
      {name: '13:50 - 14:40', id: '56', day:'sexta-feira'},
      {name: '14:50 - 15:40', id: '57', day:'sexta-feira'},
      {name: '15:40 - 16:30', id: '58', day:'sexta-feira'},
      {name: '16:40 - 17:30', id: '59', day:'sexta-feira'},
      {name: '17:30 - 18:20', id: '60', day:'sexta-feira'},

        ];

    this.state = {
        checked: false,
        cities: [],
        segunda: this.categories.filter((item)=> item.day === 'segunda-feira'),
        terça: this.categories.filter((item)=> item.day === 'terça-feira'),
        quarta: this.categories.filter((item)=> item.day === 'quarta-feira'),
        quinta: this.categories.filter((item)=> item.day === 'quinta-feira'),
        sexta: this.categories.filter((item)=> item.day === 'sexta-feira'),

        selectedCategories: []
    };

    this.onCityChange = this.onCityChange.bind(this);
    this.onCategoryChange = this.onCategoryChange.bind(this);

  }
  onCategoryChange(e) {
    let selectedCategories = [...this.state.selectedCategories];

    if (e.checked) {
        selectedCategories.push(e.value);
    }
    else {
        for (let i = 0; i < selectedCategories.length; i++) {
            const selectedCategory = selectedCategories[i];

            if (selectedCategory.id === e.value.id) {
                selectedCategories.splice(i, 1);
                break;
            }
        }
    }

    this.setState({ selectedCategories });
}
onCityChange(e) {
  let selectedCities = [...this.state.cities];
  if (e.checked)
      selectedCities.push(e.value);
  else
      selectedCities.splice(selectedCities.indexOf(e.value), 1);

  this.setState({ cities: selectedCities });
}
  sendState() {
    const dados = {
      restrict: this.state.selectedCategories
    };
    return dados;
  }
  // function that returns true if value is email, false otherwise
  // function that verifies if a string has a given length or not



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
        <GridItem xs={12} sm={12}
        style={{
          display:'flex',
          flexDirection:'row',
          alignItems:'center',
          justifyContent:'center',
          width:'100%'}}>
          <div >
            <p>Segunda-Feira</p>
        {this.state.segunda.map((category) => {
          return(
             <div style={{marginBottom: 10}} key={category.id} className="field-checkbox">
              <Checkbox inputId={category.id} name="category" value={category} onChange={this.onCategoryChange} checked={this.state.selectedCategories.some((item) => item.id === category.id)}  />
              <label style={{marginLeft: 5}} htmlFor={category.id}>{category.name}</label>
               </div>
               )})}

          </div>
          <div style={{marginLeft:20}}>
          <p>Terça-Feira</p>
        {this.state.terça.map((category) => {
          return(
             <div style={{marginBottom: 10}} key={category.id} className="field-checkbox">
              <Checkbox inputId={category.id} name="category" value={category} onChange={this.onCategoryChange} checked={this.state.selectedCategories.some((item) => item.id === category.id)} disabled={category.id === 'R'} />
              <label style={{marginLeft: 5}} htmlFor={category.id}>{category.name}</label>
               </div>
               )})}

          </div>
          <div style={{marginLeft:20}}>
          <p>Quarta-Feira</p>
        {this.state.quarta.map((category) => {
          return(
             <div style={{marginBottom: 10}} key={category.id} className="field-checkbox">
              <Checkbox inputId={category.id} name="category" value={category} onChange={this.onCategoryChange} checked={this.state.selectedCategories.some((item) => item.id === category.id)} disabled={category.id === 'R'} />
              <label style={{marginLeft: 5}} htmlFor={category.id}>{category.name}</label>
               </div>
               )})}

          </div>
          <div style={{marginLeft:20}}>
          <p>Quinta-Feira</p>
        {this.state.quinta.map((category) => {
          return(
             <div style={{marginBottom: 10}} key={category.id} className="field-checkbox">
              <Checkbox inputId={category.id} name="category" value={category} onChange={this.onCategoryChange} checked={this.state.selectedCategories.some((item) => item.id === category.id)} disabled={category.id === 'R'} />
              <label style={{marginLeft: 5}} htmlFor={category.id}>{category.name}</label>
               </div>
               )})}

          </div>
          <div style={{marginLeft:20}}>
          <p>Sexta-Feira</p>
        {this.state.sexta.map((category) => {
          return(
             <div style={{marginBottom: 10}} key={category.id} className="field-checkbox">
              <Checkbox inputId={category.id} name="category" value={category} onChange={this.onCategoryChange} checked={this.state.selectedCategories.some((item) => item.id === category.id)} disabled={category.id === 'R'} />
              <label style={{marginLeft: 5}} htmlFor={category.id}>{category.name}</label>
               </div>
               )})}

          </div>

         </GridItem>
      </GridContainer>
    );
  };
}

Step3.propTypes = {
  classes: PropTypes.object,
};

export default withStyles(style)(Step3);
