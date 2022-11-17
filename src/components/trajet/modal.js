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

export const ModalAddTrajet = (args) => {
  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  return (
    <div>
      <Button color="primary" variant="contained" onClick={toggle}>
        Ajouter Trajets
      </Button>
      <Modal style={{ marginTop: "140px" }} isOpen={modal} toggle={toggle} {...args}>
        <ModalHeader toggle={toggle}> Ajouter Trajets</ModalHeader>
        <ModalBody>
          <Form>
            <FormGroup>
              <Label for="exampleEmail">Nom et Prénom Conducteur</Label>
              <Input id="exampleEmail" name="email" placeholder="Nom et Prenom" type="email" />
            </FormGroup>
            <FormGroup>
              <Label for="exampleEmail">Aderesse mail</Label>
              <Input id="exampleEmail" name="email" placeholder="Email" type="email" />
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

              <Label for="exampleEmail">Email</Label>
              <Input id="exampleEmail" name="email" placeholder="with a placeholder" type="email" />
            </FormGroup>
            <FormGroup>
              <Label for="examplePassword">Password</Label>
              <Input
                id="examplePassword"
                name="password"
                placeholder="password placeholder"
                type="password"
              />
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
              <Label for="exampleFile">CIN</Label>

              <Input id="exampleFile" name="file" type="file" />
              <FormText>
                This is some placeholder block-level help text for the above input. It‘s a bit
                lighter and easily wraps to a new line.
              </FormText>
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
            <Button>Submit</Button>
          </Form>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={toggle}>
            Do Something
          </Button>{" "}
          <Button color="secondary" onClick={toggle}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
};
