import React, { useEffect, useState } from "react";
// react plugin for creating charts
// import ChartistGraph from "react-chartist";
// react plugin for creating vector maps
// import { VectorMap } from "react-jvectormap";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import Tooltip from "@material-ui/core/Tooltip";
// import Icon from "@material-ui/core/Icon";

// @material-ui/icons
// import ContentCopy from "@material-ui/icons/ContentCopy";
// import Store from "@material-ui/icons/Store";
// import InfoOutline from "@material-ui/icons/InfoOutline";
// import Warning from "@material-ui/icons/Warning";
import Check from "@material-ui/icons/Check";
import DateRange from "@material-ui/icons/DateRange";
import LocalOffer from "@material-ui/icons/LocalOffer";
import Update from "@material-ui/icons/Update";
// import ArrowUpward from "@material-ui/icons/ArrowUpward";
// import AccessTime from "@material-ui/icons/AccessTime";
// import Refresh from "@material-ui/icons/Refresh";
// import Edit from "@material-ui/icons/Edit";
// import Place from "@material-ui/icons/Place";
import ArtTrack from "@material-ui/icons/ArtTrack";
import People from "@material-ui/icons/People";
import {useHistory} from "react-router-dom"
// import Language from "@material-ui/icons/Language";

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
// import Table from "components/Table/Table.js";
import Button from "components/CustomButtons/Button.js";
// import Danger from "components/Typography/Danger.js";
import Success from "components/Typography/Success.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardIcon from "components/Card/CardIcon.js";
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";
import ReactLoading from 'react-loading';
//import PeopleAltIcon from '@material-ui/icons/PeopleAlt';

// import {
//   dailySalesChart,
//   emailsSubscriptionChart,
//   completedTasksChart
// } from "variables/charts";

import styles from "assets/jss/material-dashboard-pro-react/views/dashboardStyle.js";

import priceImage1 from "assets/img/register.png";
import priceImage2 from "assets/img/return.png";
import priceImage3 from "assets/img/delete.png";
import myApi from "Service/Api";
import { Class, School } from "@material-ui/icons";
// import { CircularProgress } from "@material-ui/core";

// const us_flag = require("assets/img/flags/US.png");
// const de_flag = require("assets/img/flags/DE.png");
// const au_flag = require("assets/img/flags/AU.png");
// const gb_flag = require("assets/img/flags/GB.png");
// const ro_flag = require("assets/img/flags/RO.png");
// const br_flag = require("assets/img/flags/BR.png");

// var mapData = {
//   AU: 760,
//   BR: 550,
//   CA: 120,
//   DE: 1300,
//   FR: 540,
//   GB: 690,
//   GE: 200,
//   IN: 200,
//   RO: 600,
//   RU: 300,
//   US: 2920
// };

const useStyles = makeStyles(styles);

export default function Dashboard() {
  const classes = useStyles();
const[listBloco, setListBloco] = useState(0)
const[listTeachers, setlistTeachers] = useState(0)
const[listDisciplinas, setlistDisciplinas] = useState(0)
  const history =  useHistory()
  async function searchAssociate() {
    const response = await myApi.get("/blocoCount");
    console.log(response.data.blocoCount)

      setListBloco(response.data.blocoCount)
      setlistDisciplinas(response.data.disciplinasCount)
      setlistTeachers(response.data.professoresCount)

    // console.log('PS', listPs);
  }
  useEffect(() => {
    searchAssociate();
  }, []);
  return (
    <div>
      <GridContainer>
        <GridItem xs={12} sm={6} md={6} lg={3}>
          <Card style={{ cursor: "pointer" }} onClick={(e) =>{
              /*   e.preventDefault()
                 if(listTeachers > 0){

                   history.push("/admin/listAssociates")
                 }
                  }} */
             }}   >
            <CardHeader color="warning" stats icon>
              <CardIcon color="warning">
                <School />
              </CardIcon>
              <p className={classes.cardCategory}>TOTAL</p>
              <h3 className={classes.cardTitle}>
                {listTeachers > 0 ? (
                  listTeachers
                ) : (
                  // <CircularProgress
                  //   style={{ width: 25, marginTop: 10, marginRight: 10 }}
                  // />
                  <ReactLoading type="spinningBubbles" color="#f8f8"  height={17} width={35} style={{marginLeft: 50, color: "#f8f8"}} />
                )}
              </h3>
            </CardHeader>
            <CardFooter stats>
              <div className={classes.stats}>

                  <People />

                  PROFESSORES
              </div>
            </CardFooter>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={6} md={6} lg={3}>
          <Card style={{ cursor: "pointer" }}>
            <CardHeader color="success" stats icon>
              <CardIcon color="success">
                <People />
              </CardIcon>
              <p className={classes.cardCategory}>TOTAL</p>
              <h3 className={classes.cardTitle}>{listDisciplinas > 0 ? (
                  listDisciplinas
                ) : (
                  <ReactLoading type="spinningBubbles" color="#f8f8"  height={17} width={35} style={{marginLeft: 50, color: "#f8f8"}} />
                  // <CircularProgress
                  //   style={{ width: 25, marginTop: 10, marginRight: 10 }}
                  // />
                )}</h3>
            </CardHeader>
            <CardFooter stats>
              <div className={classes.stats}>
                <DateRange />
              DISCIPLINAS
              </div>
            </CardFooter>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={6} md={6} lg={3}>
          <Card style={{ cursor: "pointer" }}>
            <CardHeader color="danger" stats icon>
              <CardIcon color="danger">
                <Class />
              </CardIcon>
              <p className={classes.cardCategory}>TOTAL</p>
              <h3 className={classes.cardTitle}>{listBloco > 0 ? (
                  listBloco
                ) : (
                  <ReactLoading type="spinningBubbles" color="#f8f8"  height={17} width={35} style={{marginLeft: 50, color: "#f8f8"}} />
                  // <CircularProgress
                  //   style={{ width: 25, marginTop: 10, marginRight: 10 }}
                  // />
                )}</h3>
            </CardHeader>
            <CardFooter stats>
              <div className={classes.stats}>
                <LocalOffer />
                BLOCOS
              </div>
            </CardFooter>
          </Card>
        </GridItem>
   { /*    <GridItem xs={12} sm={6} md={6} lg={3}>
          <Card style={{ cursor: "pointer" }}>
            <CardHeader color="info" stats icon>
              <CardIcon color="info">
                <FaUserSecret />
              </CardIcon>
              <p className={classes.cardCategory}>RESERVA</p>
              <h3 className={classes.cardTitle}>{listPS > 0 ? (
                  listPS
                ) : (
                  <ReactLoading type="spinningBubbles" color="#f8f8"  height={17} width={35} style={{marginLeft: 50, color: "#f8f8"}} />
                  // <CircularProgress
                  //   style={{ width: 25, marginTop: 10, marginRight: 10 }}
                  // />
                )}</h3>
            </CardHeader>
            <CardFooter stats>
              <div className={classes.stats}>
                <Update />
                Militares da reserva
              </div>
            </CardFooter>
          </Card>
        </GridItem>*/}
      </GridContainer>
      {/* <GridContainer>
        <GridItem xs={12}>
          <Card>
            <CardHeader color="success" icon>
              <CardIcon color="success">
                <Language />
              </CardIcon>
              <h4 className={classes.cardIconTitle}>
                Global Sales by Top Locations
              </h4>
            </CardHeader>
            <CardBody>
              <GridContainer justify="space-between">
                <GridItem xs={12} sm={12} md={5}>
                  <Table
                    tableData={[
                      [
                        <img src={us_flag} alt="us_flag" key={"flag"} />,
                        "USA",
                        "2.920",
                        "53.23%"
                      ],
                      [
                        <img src={de_flag} alt="us_flag" key={"flag"} />,
                        "Germany",
                        "1.300",
                        "20.43%"
                      ],
                      [
                        <img src={au_flag} alt="us_flag" key={"flag"} />,
                        "Australia",
                        "760",
                        "10.35%"
                      ],
                      [
                        <img src={gb_flag} alt="us_flag" key={"flag"} />,
                        "United Kingdom",
                        "690",
                        "7.87%"
                      ],
                      [
                        <img src={ro_flag} alt="us_flag" key={"flag"} />,
                        "Romania",
                        "600",
                        "5.94%"
                      ],
                      [
                        <img src={br_flag} alt="us_flag" key={"flag"} />,
                        "Brasil",
                        "550",
                        "4.34%"
                      ]
                    ]}
                  />
                </GridItem>
                <GridItem xs={12} sm={12} md={6}>
                  <VectorMap
                    map={"world_mill"}
                    backgroundColor="transparent"
                    zoomOnScroll={false}
                    containerStyle={{
                      width: "100%",
                      height: "280px"
                    }}
                    containerClassName="map"
                    regionStyle={{
                      initial: {
                        fill: "#e4e4e4",
                        "fill-opacity": 0.9,
                        stroke: "none",
                        "stroke-width": 0,
                        "stroke-opacity": 0
                      }
                    }}
                    series={{
                      regions: [
                        {
                          values: mapData,
                          scale: ["#AAAAAA", "#444444"],
                          normalizeFunction: "polynomial"
                        }
                      ]
                    }}
                  />
                </GridItem>
              </GridContainer>
            </CardBody>
          </Card>
        </GridItem>
      </GridContainer> */}
      {/* <GridContainer>
        <GridItem xs={12} sm={12} md={4}>
          <Card chart className={classes.cardHover}>
            <CardHeader color="info" className={classes.cardHeaderHover}>
              <ChartistGraph
                className="ct-chart-white-colors"
                data={dailySalesChart.data}
                type="Line"
                options={dailySalesChart.options}
                listener={dailySalesChart.animation}
              />
            </CardHeader>
            <CardBody>
              <div className={classes.cardHoverUnder}>
                <Tooltip
                  id="tooltip-top"
                  title="Refresh"
                  placement="bottom"
                  classes={{ tooltip: classes.tooltip }}
                >
                  <Button simple color="info" justIcon>
                    <Refresh className={classes.underChartIcons} />
                  </Button>
                </Tooltip>
                <Tooltip
                  id="tooltip-top"
                  title="Change Date"
                  placement="bottom"
                  classes={{ tooltip: classes.tooltip }}
                >
                  <Button color="transparent" simple justIcon>
                    <Edit className={classes.underChartIcons} />
                  </Button>
                </Tooltip>
              </div>
              <h4 className={classes.cardTitle}>Daily Sales</h4>
              <p className={classes.cardCategory}>
                <span className={classes.successText}>
                  <ArrowUpward className={classes.upArrowCardCategory} /> 55%
                </span>{" "}
                increase in today sales.
              </p>
            </CardBody>
            <CardFooter chart>
              <div className={classes.stats}>
                <AccessTime /> updated 4 minutes ago
              </div>
            </CardFooter>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={12} md={4}>
          <Card chart className={classes.cardHover}>
            <CardHeader color="warning" className={classes.cardHeaderHover}>
              <ChartistGraph
                className="ct-chart-white-colors"
                data={emailsSubscriptionChart.data}
                type="Bar"
                options={emailsSubscriptionChart.options}
                responsiveOptions={emailsSubscriptionChart.responsiveOptions}
                listener={emailsSubscriptionChart.animation}
              />
            </CardHeader>
            <CardBody>
              <div className={classes.cardHoverUnder}>
                <Tooltip
                  id="tooltip-top"
                  title="Refresh"
                  placement="bottom"
                  classes={{ tooltip: classes.tooltip }}
                >
                  <Button simple color="info" justIcon>
                    <Refresh className={classes.underChartIcons} />
                  </Button>
                </Tooltip>
                <Tooltip
                  id="tooltip-top"
                  title="Change Date"
                  placement="bottom"
                  classes={{ tooltip: classes.tooltip }}
                >
                  <Button color="transparent" simple justIcon>
                    <Edit className={classes.underChartIcons} />
                  </Button>
                </Tooltip>
              </div>
              <h4 className={classes.cardTitle}>Email Subscriptions</h4>
              <p className={classes.cardCategory}>Last Campaign Performance</p>
            </CardBody>
            <CardFooter chart>
              <div className={classes.stats}>
                <AccessTime /> campaign sent 2 days ago
              </div>
            </CardFooter>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={12} md={4}>
          <Card chart className={classes.cardHover}>
            <CardHeader color="danger" className={classes.cardHeaderHover}>
              <ChartistGraph
                className="ct-chart-white-colors"
                data={completedTasksChart.data}
                type="Line"
                options={completedTasksChart.options}
                listener={completedTasksChart.animation}
              />
            </CardHeader>
            <CardBody>
              <div className={classes.cardHoverUnder}>
                <Tooltip
                  id="tooltip-top"
                  title="Refresh"
                  placement="bottom"
                  classes={{ tooltip: classes.tooltip }}
                >
                  <Button simple color="info" justIcon>
                    <Refresh className={classes.underChartIcons} />
                  </Button>
                </Tooltip>
                <Tooltip
                  id="tooltip-top"
                  title="Change Date"
                  placement="bottom"
                  classes={{ tooltip: classes.tooltip }}
                >
                  <Button color="transparent" simple justIcon>
                    <Edit className={classes.underChartIcons} />
                  </Button>
                </Tooltip>
              </div>
              <h4 className={classes.cardTitle}>Completed Tasks</h4>
              <p className={classes.cardCategory}>Last Campaign Performance</p>
            </CardBody>
            <CardFooter chart>
              <div className={classes.stats}>
                <AccessTime /> campaign sent 2 days ago
              </div>
            </CardFooter>
          </Card>
        </GridItem>
      </GridContainer> */}
      <h4>ACESSO RÁPIDO</h4>
      <br />
      <GridContainer>
        <GridItem xs={12} sm={12} md={4}>
          <Card  onClick={(e) =>{
                 e.preventDefault()
                 history.push("/admin/listAssociates")
                  }} product className={classes.cardHover}>
            <CardHeader image className={classes.cardHeaderHover}>
              <a href="#pablo" onClick={(e) => e.preventDefault()}>
                <img src={priceImage1} alt="..." />
              </a>
            </CardHeader>
            <CardBody  >
              <div className={classes.cardHoverUnder}>
                <Tooltip

                  id="tooltip-top"
                  title="Abrir"
                  placement="bottom"
                  classes={{ tooltip: classes.tooltip }}
                >
                  <Button color="transparent" simple justIcon>
                    <ArtTrack   className={classes.underChartIcons} />
                  </Button>
                </Tooltip>
                {/* <Tooltip
                  id="tooltip-top"
                  title="Edit"
                  placement="bottom"
                  classes={{ tooltip: classes.tooltip }}
                >
                  <Button color="success" simple justIcon>
                    <Refresh className={classes.underChartIcons} />
                  </Button>
                </Tooltip>
                <Tooltip
                  id="tooltip-top"
                  title="Remove"
                  placement="bottom"
                  classes={{ tooltip: classes.tooltip }}
                >
                  <Button color="danger" simple justIcon>
                    <Edit className={classes.underChartIcons} />
                  </Button>
                </Tooltip> */}
              </div>
              <h4 className={classes.cardProductTitle}>
                <span  >
                   LISTAR GRADE ATUAL
                </span>
              </h4>
              <span className={classes.cardProductDesciprion}>
               Acesso rápido para a grade de disciplinas por bloco.
              </span>
            </CardBody>
            {/* <CardFooter product>
              <div className={classes.price}>
                <h4>$899/night</h4>
              </div>
              <div className={`${classes.stats} ${classes.productStats}`}>
                <Place /> Barcelona, Spain
              </div>
            </CardFooter> */}
          </Card>
        </GridItem>
        <GridItem xs={12} sm={12} md={4}>
          <Card
           onClick={(e) =>{
            e.preventDefault()
            history.push("/admin/timetable")
             }}
          product className={classes.cardHover}>
            <CardHeader image className={classes.cardHeaderHover}>
              <a href="#pablo" onClick={(e) => e.preventDefault()}>
                <img src={priceImage2} alt="..." />
              </a>
            </CardHeader>
            <CardBody>
              <div className={classes.cardHoverUnder}>
                <Tooltip
                  id="tooltip-top"
                  title="Abrir"
                  placement="bottom"
                  classes={{ tooltip: classes.tooltip }}
                >
                  <Button color="transparent" simple justIcon>
                    <ArtTrack className={classes.underChartIcons} />
                  </Button>
                </Tooltip>
                {/* <Tooltip
                  id="tooltip-top"
                  title="Edit"
                  placement="bottom"
                  classes={{ tooltip: classes.tooltip }}
                >
                  <Button color="success" simple justIcon>
                    <Refresh className={classes.underChartIcons} />
                  </Button>
                </Tooltip>
                <Tooltip
                  id="tooltip-top"
                  title="Remove"
                  placement="bottom"
                  classes={{ tooltip: classes.tooltip }}
                >
                  <Button color="danger" simple justIcon>
                    <Edit className={classes.underChartIcons} />
                  </Button>
                </Tooltip> */}
              </div>
              <h4 className={classes.cardProductTitle}>
                <span href="#pablo" onClick={(e) => e.preventDefault()}>
                  CRIAR HORARIO DE AULAS
                </span>
              </h4>
              <span className={classes.cardProductDesciprion}>
                Acesso rápido para criar horario de aulas de cada bloco.
              </span>
            </CardBody>
            {/* <CardFooter product>
              <div className={classes.price}>
                <h4>$1.119/night</h4>
              </div>
              <div className={`${classes.stats} ${classes.productStats}`}>
                <Place /> London, UK
              </div>
            </CardFooter> */}
          </Card>
        </GridItem>
        <GridItem xs={12} sm={12} md={4}>
          <Card
          onClick={(e) =>{
            e.preventDefault()
            history.push("/admin/ProfessorManagement")
             }}
          product className={classes.cardHover} >
            <CardHeader image className={classes.cardHeaderHover}>
              <a href="#pablo" onClick={(e) => e.preventDefault()}>
                <img src={priceImage3} alt="..." />
              </a>
            </CardHeader>
            <CardBody>
              <div className={classes.cardHoverUnder}>
                <Tooltip
                  id="tooltip-top"
                  title="Abrir"
                  placement="bottom"
                  classes={{ tooltip: classes.tooltip }}
                >
                  <Button color="transparent" simple justIcon>
                    <ArtTrack className={classes.underChartIcons} />
                  </Button>
                </Tooltip>
                {/* <Tooltip
                  id="tooltip-top"
                  title="Edit"
                  placement="bottom"
                  classes={{ tooltip: classes.tooltip }}
                >
                  <Button color="success" simple justIcon>
                    <Refresh className={classes.underChartIcons} />
                  </Button>
                </Tooltip>
                <Tooltip
                  id="tooltip-top"
                  title="Remove"
                  placement="bottom"
                  classes={{ tooltip: classes.tooltip }}
                >
                  <Button color="danger" simple justIcon>
                    <Edit className={classes.underChartIcons} />
                  </Button>
                </Tooltip> */}
              </div>
              <h4 className={classes.cardProductTitle}>
                <span href="#pablo" onClick={(e) => e.preventDefault()}>
                   LISTAR PROFESSORES
                </span>
              </h4>
              <span className={classes.cardProductDesciprion}>
                Acesso rápido para listar todos os professores.
              </span>
            </CardBody>
            {/* <CardFooter product>
              <div className={classes.price}>
                <h4>$459/night</h4>
              </div>
              <div className={`${classes.stats} ${classes.productStats}`}>
                <Place /> Milan, Italy
              </div>
            </CardFooter> */}
          </Card>
        </GridItem>
      </GridContainer>
    </div>
  );
}
