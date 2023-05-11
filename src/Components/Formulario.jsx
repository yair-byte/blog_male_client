import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";

function Formulario(props) {

  const { onSubmitClick , objMalenaDescription , OnClickCancel } = props

  const [titulo, setTitulo] = useState("");

  const [texto, setTexto] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    const newObj = {
      titulo: titulo,
      texto: texto
    };
    onSubmitClick(newObj);
  };

  return (
    <Form onSubmit={handleSubmit} style={{ color: "white", fontSize: "2.5rem" }}>
      <Form.Group controlId="formTitulo">
        <Form.Label >Título de la descripción</Form.Label>
        <Form.Control
          type="text"
          maxLength={30}
          value={titulo}
          placeholder={objMalenaDescription.titulo}
          onChange={(e) => setTitulo(e.target.value)}
          required
        />
      </Form.Group>

      <Form.Group controlId="formTexto">
        <Form.Label>Descripción</Form.Label>
        <Form.Control
          as="textarea"
          maxLength={500}
          rows={5}
          value={texto}
          placeholder={objMalenaDescription.texto}
          onChange={(e) => setTexto(e.target.value)}
          required
        />
      </Form.Group>

      <Button variant="primary" type="submit" style={{ fontSize: "50%" }}>
        Guardar
      </Button>

      <Button variant="danger" onClick={OnClickCancel} style={{ fontSize: "50%" }}>
        Cancelar
      </Button>

    </Form>
  );
}

export default Formulario;
