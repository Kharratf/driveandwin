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
              <Input id="exampleEmail" name="email" placeholder="with a placeholder" type="email" />
            </FormGroup>
            <FormGroup>
              <Label for="exampleEmail">Email</Label>
              <Input id="exampleEmail" name="email" placeholder="with a placeholder" type="email" />
            </FormGroup>
            <Label for="examplePassword">Mot de passe</Label>
            <Input
              id="examplePassword"
              name="password"
              placeholder="password placeholder"
              type="password"
            />
            <Label for="examplePassword">Vérifier mot de passe</Label>
            <Input
              id="examplePassword"
              name="password"
              placeholder="password placeholder"
              type="password"
            />
            <FormGroup>
              <Label for="exampleEmail">Numero de télèphone</Label>
              <Input id="exampleEmail" name="email" placeholder="with a placeholder" type="email" />
            </FormGroup>


            <FormGroup>
              <Label for="exampleSelectMulti">Select Multiple</Label>
              <Input id="exampleSelectMulti" multiple name="selectMulti" type="select">
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
              </Input>
            </FormGroup>
            <FormGroup>
              <Label for="exampleText">Text Area</Label>
              <Input id="exampleText" name="text" type="textarea" />
            </FormGroup>
            <FormGroup>
              <Label for="exampleFile">CIN </Label>
              <Input id="exampleFile" name="file" type="file" />

            </FormGroup>
            <FormGroup tag="fieldset">
              <legend>Radio Buttons</legend>
              <FormGroup check>
                <Input name="radio1" type="radio" />{" "}
                <Label check>Option one is this and that—be sure to include why it‘s great</Label>
              </FormGroup>
              <FormGroup check>
                <Input name="radio1" type="radio" />{" "}
                <Label check>
                  Option two can be something else and selecting it will deselect option one
                </Label>
              </FormGroup>
              <FormGroup check disabled>
                <Input disabled name="radio1" type="radio" />{" "}
                <Label check>Option three is disabled</Label>
              </FormGroup>
            </FormGroup>
            <FormGroup check>
              <Input type="checkbox" /> <Label check>Check me out</Label>
            </FormGroup>
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