import { format } from "date-fns";
import { v4 as uuid } from "uuid";
import PerfectScrollbar from "react-perfect-scrollbar";
import {
  Box,
  Button,
  Card,
  CardHeader,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  TableSortLabel,
<<<<<<< HEAD
  Tooltip,
} from "@mui/material";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import { SeverityPill } from "../severity-pill";
import { useEffect, useState } from "react";
import Modal from "react-bootstrap/Modal";
=======
  Tooltip
} from '@mui/material';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import { SeverityPill } from '../severity-pill';
import { useEffect, useState } from 'react';
import Modal from 'react-bootstrap/Modal';
>>>>>>> 483ac16068e59059a9323f60d03d47eff1558108
const orders = [

  {
    id: uuid(),
<<<<<<< HEAD
    matricule: "124 TN 5456",
    carburant: 1.44,
    depart: "Sfax",
    arrivee: "Sfax",
    date: "11/09/2022",
    distance: 18,
  },
  {
    id: uuid(),
    matricule: "124 TN 5456",
    carburant: 11.09,
    depart: "Sfax",
    arrivee: "Sousse",
    date: "10/09/2022",
    distance: 138.6,
  },
  {
    id: uuid(),
    matricule: "124 TN 5456",
    carburant: 12.2,
    depart: "Sousse",
    arrivee: "Tunis",
    date: "08/09/2022",
    distance: 152.4,
  },
  {
    id: uuid(),
    matricule: "124 TN 5456",
    carburant: 21.5,
    depart: "Tunis",
    arrivee: "Sfax",
    date: "07/09/2022",
    distance: 268.2,
  },
];

const TrajetsDetailsModal = (props) => {
=======
    matricule:"124 TN 5456",
    carburant: 1.44,
    depart:"Sfax",
    arrivee:"Sfax",
    date: "11/09/2022",
    distance: 18
  },
  {
    id: uuid(),
    matricule:"124 TN 5456",
    carburant: 11.09,
    depart:"Sfax",
    arrivee:"Sousse",
    date: "10/09/2022",
    distance: 138.6
     

  },
  {
    id: uuid(),
    matricule:"124 TN 5456",
    carburant: 12.2,
    depart:"Sousse",
    arrivee:"Tunis",
    date: "08/09/2022",
    distance: 152.4

  },
  {
    id: uuid(),
    matricule:"124 TN 5456",
    carburant: 21.5,
    depart:"Tunis",
    arrivee:"Sfax",
    date: "07/09/2022",
    distance: 268.2

  },

];

 const TrajetsDetailsModal = (props) => {
>>>>>>> 483ac16068e59059a9323f60d03d47eff1558108
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  // const handleShow = () => setShow(true);
<<<<<<< HEAD
  useEffect(() => {
    if (props.showModal) {
      setShow(true);
    }
  }, [props.showModal]);

  return (
    <Modal
      show={show}
      onHide={handleClose}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title>Détails du trajet</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div style={{ marginLeft: "25%" }}>
          <strong>Matricule</strong> &ensp;&ensp;&ensp;&ensp;
          <span style={{ float: "right", marginRight: "35%" }}>124 TN 5456 </span>
        </div>
        <div style={{ marginLeft: "25%" }}>
          <strong>Départ</strong> &ensp;&ensp;&ensp;&ensp;
          <span style={{ float: "right", marginRight: "35%" }}>Sfax </span>
        </div>

        <div style={{ marginLeft: "25%" }}>
          <strong>Arrivée</strong> &ensp;&ensp;&ensp;&ensp;
          <span style={{ float: "right", marginRight: "35%" }}>Sousse </span>
        </div>
        <div style={{ marginLeft: "25%" }}>
          <strong>Date</strong> &ensp;&ensp;&ensp;&ensp;
          <span style={{ float: "right", marginRight: "35%" }}>10/09/2022</span>
        </div>
        <div style={{ marginLeft: "25%" }}>
          <strong>Distance</strong> &ensp;&ensp;&ensp;&ensp;
          <span style={{ float: "right", marginRight: "35%" }}>138.6 km</span>
        </div>
        <div style={{ marginLeft: "25%" }}>
          <strong>Carburant</strong> &ensp;&ensp;&ensp;&ensp;
          <span style={{ float: "right", marginRight: "35%" }}>11.09 L</span>
        </div>

        <div style={{ marginLeft: "25%" }}>
          <strong>Vitesse maximale</strong>&ensp;&ensp;&ensp;&ensp;
          <span style={{ float: "right", marginRight: "35%" }}>128 km/h </span>
        </div>
        <div style={{ marginLeft: "25%" }}>
          <strong>Température Ext</strong>&ensp;&ensp;&ensp;&ensp;{" "}
          <span style={{ float: "right", marginRight: "35%" }}>31 °C</span>
        </div>
        <div style={{ marginLeft: "25%" }}>
          <strong>Taux initial du carburant</strong>&ensp;&ensp;&ensp;&ensp;{" "}
          <span style={{ float: "right", marginRight: "35%" }}>83%</span>
        </div>
        <div style={{ marginLeft: "25%" }}>
          <strong>Taux final du carburant</strong>&ensp;&ensp;&ensp;&ensp;{" "}
          <span style={{ float: "right", marginRight: "35%" }}>23%</span>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Fermer
        </Button>
      </Modal.Footer>
    </Modal>
  );
};
export const MesTrajets = (props) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <TrajetsDetailsModal showModal={showModal} />
      <Card {...props}>
        <CardHeader title="Mes trajets" />
        <PerfectScrollbar>
          <Box sx={{ minWidth: 800 }}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Matricule</TableCell>
                  <TableCell>Depart</TableCell>
                  <TableCell>Arrivée</TableCell>
                  <TableCell>Distance (en km)</TableCell>
                  <TableCell>Carburant (en L)</TableCell>
                  <TableCell>Date</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {orders.map((order) => (
                  <TableRow hover key={order.id} onClick={() => setShowModal(true)}>
                    <TableCell>{order.matricule}</TableCell>
                    <TableCell>{order.depart}</TableCell>
                    <TableCell>{order.arrivee}</TableCell>
                    <TableCell>{order.distance}</TableCell>
                    <TableCell>{order.carburant}</TableCell>
                    <TableCell>{order.date}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </Box>
        </PerfectScrollbar>
        <Box
          sx={{
            display: "flex",
            justifyContent: "flex-end",
            p: 2,
          }}
        >
          <Button
            color="primary"
            endIcon={<ArrowRightIcon fontSize="small" />}
            size="small"
            variant="text"
          >
            View all
          </Button>
        </Box>
      </Card>
    </>
  );
};
=======
  useEffect(()=>{
if(props.showModal){
  setShow(true)
}
  },[props.showModal])

  return(

 
  <Modal show={show} onHide={handleClose}
  size="lg"
  aria-labelledby="contained-modal-title-vcenter"
  centered
>
  <Modal.Header closeButton>
    <Modal.Title>Détails du trajet</Modal.Title>
  </Modal.Header>
  <Modal.Body>
    <div style={{marginLeft:"25%"}}>
      <strong>Matricule</strong> &ensp;&ensp;&ensp;&ensp;<span style={{float:"right",marginRight:"35%"}}>124 TN 5456	</span>
    </div>
    <div style={{marginLeft:"25%"}}>

      <strong>Départ</strong> &ensp;&ensp;&ensp;&ensp;<span style={{float:"right",marginRight:"35%"}}>Sfax </span>
    </div>
    
    <div style={{marginLeft:"25%"}}>
      <strong>Arrivée</strong> &ensp;&ensp;&ensp;&ensp;<span style={{float:"right",marginRight:"35%"}}>Sousse  </span>
    </div> 
    <div style={{marginLeft:"25%"}}>
      <strong>Date</strong> &ensp;&ensp;&ensp;&ensp;<span style={{float:"right",marginRight:"35%"}}>10/09/2022</span>
    </div>
    <div style={{marginLeft:"25%"}}>
      <strong>Distance</strong> &ensp;&ensp;&ensp;&ensp;<span style={{float:"right",marginRight:"35%"}}>138.6 km</span>
    </div>
    <div style={{marginLeft:"25%"}}>
      <strong>Carburant</strong> &ensp;&ensp;&ensp;&ensp;<span style={{float:"right",marginRight:"35%"}}>11.09 L</span>
    </div>

    <div style={{marginLeft:"25%"}}>
      <strong>Vitesse maximale</strong>&ensp;&ensp;&ensp;&ensp;<span style={{float:"right",marginRight:"35%"}}>128 km/h </span>
    </div>
    <div style={{marginLeft:"25%"}}>
      <strong>Température Ext</strong>&ensp;&ensp;&ensp;&ensp;  <span style={{float:"right",marginRight:"35%"}}>31 °C</span>
    </div>
    <div style={{marginLeft:"25%"}}>
      <strong>Taux initial du carburant</strong>&ensp;&ensp;&ensp;&ensp; <span style={{float:"right",marginRight:"35%"}}>83%</span>
    </div>
    <div style={{marginLeft:"25%"}}>
      <strong>Taux final du carburant</strong>&ensp;&ensp;&ensp;&ensp; <span style={{float:"right",marginRight:"35%"}}>23%</span>
    </div>
  </Modal.Body>
  <Modal.Footer>
    <Button variant="secondary" onClick={handleClose}>
      Fermer
    </Button>

  </Modal.Footer>
</Modal>
)};
export const MesTrajets = (props) => {
  const [showModal, setShowModal] = useState(false);

  return(
<>
  <TrajetsDetailsModal showModal={showModal} />
  <Card {...props}>
    <CardHeader title="Mes trajets" />
    <PerfectScrollbar>
      <Box sx={{ minWidth: 800 }}>
        <Table>
          <TableHead>
            <TableRow>
            <TableCell>
                Matricule
              </TableCell>
              <TableCell>
                Depart
              </TableCell>
              <TableCell>
                Arrivée
              </TableCell>
              <TableCell>
                Distance (en km)
              </TableCell>
              <TableCell>
                Carburant (en L)    
              </TableCell>
              <TableCell>
                Date  
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {orders.map((order) => (
              <TableRow
                hover
                key={order.id}
                onClick={()=>setShowModal(true)}
              >
                
           <TableCell>
                  {order.matricule}
                </TableCell>
                <TableCell>
                  {order.depart}
                </TableCell>
                <TableCell>
                  {order.arrivee}
                </TableCell>
                <TableCell>
                  {order.distance}
                </TableCell>
                <TableCell>
                {order.carburant}

                </TableCell>
                <TableCell>
              { order.date}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Box>
    </PerfectScrollbar>
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'flex-end',
        p: 2
      }}
    >
      <Button
        color="primary"
        endIcon={<ArrowRightIcon fontSize="small" />}
        size="small"
        variant="text"
      >
        View all
      </Button>
    </Box>
  </Card>
  </>
)};
>>>>>>> 483ac16068e59059a9323f60d03d47eff1558108
