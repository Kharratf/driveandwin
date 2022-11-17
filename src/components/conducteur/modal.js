import React, { useState } from "react";
import {
  FormGroup,
  Form,
  Label,
  Input,
  FormText,
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from "reactstrap";

export const ModalAddConducteur = (args) => {
  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  return (
    <div>
      <Button color="primary" variant="contained" onClick={toggle}>
        Ajouter Conducteurs
      </Button>
      <Modal style={{ marginTop: "140px" }} isOpen={modal} toggle={toggle} {...args}>
        <ModalHeader toggle={toggle}> Ajouter Conducteurs</ModalHeader>
        <ModalBody>
          <Form>
            <FormGroup>
              <Label for="exampleEmail">Nom et Prénom Conducteur</Label>
              <Input id="exampleEmail" name="email" placeholder="Nom et Prénom " type="text" />
            </FormGroup>
            <FormGroup>
              <Label for="exampleEmail">Adresse mail</Label>
              <Input id="exampleEmail" name="email" placeholder="Email" type="email" />
            </FormGroup>
            <Label for="examplePassword">Mot de passe</Label>
            <Input
              id="examplePassword"
              name="password"
              placeholder="mot de passe"
              type="password"
            />
            <Label for="examplePassword">Vérifier mot de passe</Label>
            <Input
              id="examplePassword"
              name="password"
              placeholder="mot de passe"
              type="password"
            />
            <FormGroup>
              <Label for="exampleEmail">Numero de télèphone</Label>
              <Input id="exampleEmail" name="email" placeholder="+216" type="email" />
            </FormGroup>
            <FormGroup tag="fieldset">
              <legend>Voiture Attribuée</legend>
              <FormGroup check>
                <Input name="radio1" type="radio" />
                <Label check>Renault megane 73 TN 3294</Label>
              </FormGroup>
              <FormGroup check disabled>
                <Input disabled name="radio1" type="radio" />
                <Label check>Renault clio 124 TN 5456</Label>
              </FormGroup>
              <FormGroup check>
                <Input name="radio1" type="radio" /> <Label check>Peugeot 124 TN 5456</Label>
              </FormGroup>
              <FormGroup check disabled>
                <Input disabled name="radio1" type="radio" /> <Label check>Dacia 185 TN 8585</Label>
              </FormGroup>
            </FormGroup>
            <FormGroup>
              <Label for="exampleFile">CIN </Label>
              <Input id="exampleFile" name="file" type="file" />
            </FormGroup>
            <FormGroup tag="fieldset">
              <legend>Adresse</legend>
              <FormGroup check>
                <Input name="radio1" type="radio" /> <Label check>Tunis,Tunisie</Label>
              </FormGroup>
              <FormGroup check>
                <Input name="radio1" type="radio" /> <Label check>Sfax,Tunisie </Label>
              </FormGroup>
              <FormGroup check disabled>
                <Input disabled name="radio1" type="radio" /> <Label check>Sousse,Tunisie</Label>
              </FormGroup>
              <FormGroup check disabled>
                <Input disabled name="radio1" type="radio" /> <Label check>Gabes,Tunisie</Label>
              </FormGroup>
              <FormGroup check disabled>
                <Input disabled name="radio1" type="radio" /> <Label check>Nabeul,Tunisie</Label>
              </FormGroup>
            </FormGroup>
            {/* <FormGroup check>
              <Input type="checkbox" /> <Label check>Check me out</Label>
            </FormGroup> */}
            {/* <Button>Submit</Button> */}
          </Form>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={toggle}>
            Créer un compte
          </Button>{" "}
          <Button color="secondary" onClick={toggle}>
            Annuler le saisie
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
};
