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

export const ModalAddVoiture = (args) => {
  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  return (
    <div>
      <Button color="primary" variant="contained" onClick={toggle}>
        Ajouter voitures
      </Button>
      <Modal style={{ marginTop: "140px" }} isOpen={modal} toggle={toggle} {...args}>
        <ModalHeader toggle={toggle}> Modifier voitures</ModalHeader>
        <ModalBody>
          <Form>
            <FormGroup>
              <Label for="exampleEmail">MARQUE</Label>
              <Input id="exampleEmail" name="email" placeholder="MARQUE" type="text" />
            </FormGroup>
            <FormGroup>
              <Label for="exampleEmail">00 TN 0000</Label>
              <Input id="exampleEmail" name="email" placeholder="00 TN 0000" type="text" />
            </FormGroup>
            <FormGroup>
              <Label for="exampleEmail">MODELE</Label>
              <Input id="exampleEmail" name="email" placeholder="MODELE" type="text" />
            </FormGroup>

            {/* <Button>Submit</Button> */}
          </Form>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={toggle}>
            Modifier la voiture
          </Button>{" "}
          <Button color="secondary" onClick={toggle}>
            ANNULER
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
};
