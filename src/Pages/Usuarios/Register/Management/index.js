// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
// import Assignment from "@material-ui/icons/Assignment";
import { Create, PermContactCalendar } from '@material-ui/icons';
import Close from "@material-ui/icons/Close";
import Dvr from "@material-ui/icons/Dvr";
import Favorite from "@material-ui/icons/Favorite";
// import { dataTable } from "variables/general.js";
import { cardTitle } from "assets/jss/material-dashboard-pro-react.js";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import CardHeader from "components/Card/CardHeader.js";
import CardIcon from "components/Card/CardIcon.js";
import Button from "components/CustomButtons/Button.js";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import React, { useEffect, useState } from "react";
// react component for creating dynamic tables
import ReactTable from "react-table";
import myApi from "Service/Api";
// import AssociateUpdate from "../../UpdateAll/Associate/index";
// import { CircularProgress } from "@material-ui/core";
import ReactLoading from 'react-loading';
import UpdateBloco from "./UserUpdate";
import { toast } from "react-toastify";

const styles = {
  cardIconTitle: {
    ...cardTitle,
    marginTop: "15px",
    marginBottom: "0px",
    fontWeight: "bold",
  },
};

const useStyles = makeStyles(styles);

export default function UserManagement() {
  const [list, setList] = useState([]);
  // const [listAss, setListAss] = useState([]);
  // const [listAss1, setListAss1] = useState([]);
  const [open, setOpen] = useState(false)
  const [infoUpadte, setInfoUpdate] = useState(null)
  function ModalOpen(){
    setOpen(true)
  }
  function ModalClose(){

    listBlocos()
    setOpen(false)
  }

  async function listBlocos() {
    const response = await myApi.get("/users");
    const response2 = response.data;
    setList(
      response2.map((item, index) => {
        // const list = item;
        const dados= {
          _id: item._id,
          usuario: item.usuario,
          senha: ''
        }
        return {
          id: index ,
          nome: item.usuario,
          actions: (
            <div className="actions-center">
              <Button

                justIcon
                round
                simple
                onClick={() => {
                  // console.log(item)
                  setInfoUpdate(dados)
                  ModalOpen()

                }}
                color="warning"
                className="edit"
              >
                <Create />
              </Button>{" "}
              {/* use this button to remove the data row */}
              <Button
                justIcon
                round
                simple
                onClick={() => {
                  removeAssociate(item._id)

                }}
                color="danger"
                className="remove"
              >
                <Close />
              </Button>{" "}
            </div>
          ),
        };
      })
    );
  }

  async function removeAssociate(id){

    await myApi.delete(`/user/${id}`)
   // listAssociates()
   listBlocos()
   return toast.success('Usuário excluido com sucesso')
 }

  useEffect(() => {
    // getAssociate();
    listBlocos();
  }, []);
  const [data, setData] = React.useState(
    list.map((prop, key) => {
      // console.log(prop);
      return {
        id: key,
        nome: prop.nome,
        code: prop.code,

        actions: (
          // we've added some custom button actions
          <div className="actions-right">
            {/* use this button to add a like kind of action */}
            <Button
              justIcon
              round
              simple
              onClick={() => {
                let obj = data.find((o) => o.id === key);
                alert(
                  "You've clicked LIKE button on \n{ \nName: " +
                    obj.name +
                    ", \ncpf: " +
                    obj.cpf +
                    ", \noffice: " +
                    obj.office +
                    ", \nage: " +
                    obj.age +
                    "\n}."
                );
              }}
              color="info"
              className="like"
            >
              <Favorite />
            </Button>{" "}
            {/* use this button to add a edit kind of action */}
            <Button
              justIcon
              round
              simple
              onClick={() => {
                let obj = data.find((o) => o.id === key);
                alert(
                  "You've clicked EDIT button on \n{ \nName: " +
                    obj.name +
                    ", \nposition: " +
                    obj.position +
                    ", \noffice: " +
                    obj.office +
                    ", \nage: " +
                    obj.age +
                    "\n}."
                );
              }}
              color="warning"
              className="edit"
            >
              <Dvr />
            </Button>{" "}
            {/* use this button to remove the data row */}
            <Button
              justIcon
              round
              simple
              onClick={() => {
                var newData = data;
                newData.find((o, i) => {
                  if (o.id === key) {
                    // here you should add some custom code so you can delete the data
                    // from this component and from your server as well
                    newData.splice(i, 1);
                    return true;
                  }
                  return false;
                });
                setData([...newData]);
              }}
              color="danger"
              className="remove"
            >
              <Close />
            </Button>{" "}
          </div>
        ),
      };
    })
  );
  const classes = useStyles();
  return (
    <GridContainer>
     {open ? (

        <UpdateBloco ModalClose={ModalClose} info={infoUpadte}   />
     ):(


      <GridItem xs={12}>
        <Card>
          <CardHeader color="primary" icon>
            <CardIcon color="warning">
              <PermContactCalendar />
            </CardIcon>
            <div style={{justifyContent: 'space-between', display: 'flex'}}>
            <h4 className={classes.cardIconTitle}>USUARIOS</h4>
            <h4 className={classes.cardIconTitle}>TOTAL:
            {list.length >= 0 ? (
                  <span style={{color: 'orange'}}>{list.length}</span>
                 ) : (
                  <ReactLoading type="spinningBubbles" color="#f8f8"  height={17} width={25} style={{marginLeft: 60, color: "#f8f8", marginTop: -35}} />
                  // <CircularProgress
                  //   style={{ width: 25, marginTop: 10, marginRight: 10 }}
                  // />
                )}
              </h4>
            </div>
          </CardHeader>
          <CardBody>
            {list.length >= 0 ? (

            <ReactTable
              style={{
                display: "flex",
                textAlign: "left",
              }}
              data={list}
              filterable
              columns={[
                {
                  Header: "POS",
                  accessor: "id",
                },
                {
                  Header: "USUARIO",
                  accessor: "nome",
                },
                {
                  // eslint-disable-next-line react/display-name
                  Header: () => (
                    <div
                      style={{
                        textAlign: "center",
                      }}
                    >
                      AÇÕES
                    </div>
                  ),
                  accessor: "actions",
                  sortable: false,
                  filterable: false,
                },
              ]}
              defaultPageSize={20}
              // showPaginationTop
              showPaginationBottom={true}
              className="-striped -highlight"
            />
             ) : (
              <ReactLoading type="spinningBubbles" color="#f8f8" style={{ color: "#f8f8", width: "5%"}} />
            //   <CircularProgress
            //   style={{ width: 25, marginTop: 10, marginRight: 10 }}
            // />
            )}
          </CardBody>
        </Card>
      </GridItem>
      )}
    </GridContainer>
  );
}
