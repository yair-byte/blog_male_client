import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";

function FormularioNewItem(props) {

  const { OnClickCancel, onSubmitClick } = props;

  const [title, setTitle] = useState("");

  const [description, setDescription] = useState("");

  const [fullDescription, setFullDescription] = useState("");

  const [imageSrc, setImageSrc] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    const newItem = {
      title: title,
      description: description,
      fullDescription: fullDescription,
      imageSrc: imageSrc,
      imageAlt: `imagen de ${title}`,
    };
    onSubmitClick(newItem);
  };

  return (
    <>
      <div>
          <Form onSubmit={handleSubmit} style={{ color: "white", fontSize: "2rem" }}>
            <Form.Group controlId="formTitulo">
              <Form.Label >Título del Item</Form.Label>
              <Form.Control
                type="text"
                maxLength={30}
                value={title}
                placeholder="ingrese el título del artículo"
                onChange={(e) => setTitle(e.target.value)}
                required
              />
            </Form.Group>

            <Form.Group controlId="formTexto">
              <Form.Label>Breve descripción</Form.Label>
              <Form.Control
                as="textarea"
                maxLength={80}
                rows={4}
                value={description}
                placeholder="ingrese una breve descripción del artículo"
                onChange={(e) => setDescription(e.target.value)}
                required
              />
            </Form.Group>

            <Form.Group controlId="formTexto">
              <Form.Label>Descripción completa</Form.Label>
              <Form.Control
                as="textarea"
                maxLength={2000}
                rows={10}
                value={fullDescription}
                placeholder="ingrese la descripción completa del artículo"
                onChange={(e) => setFullDescription(e.target.value)}
                required
              />
            </Form.Group>

            <Form.Group controlId="formTexto">
              <Form.Label>URL de la imagen</Form.Label>
              <Form.Control
                type="text"
                maxLength={300}
                value={imageSrc}
                placeholder="URL de la imagen"
                onChange={(e) => setImageSrc(e.target.value)}
                required
              />
            </Form.Group>

            <Button variant="primary" type="submit" style={{ fontSize: "50%" }}>
              Guardar
            </Button>

          </Form>

        <Button variant="danger" onClick={OnClickCancel} style={{ fontSize: "100%", marginTop: "1rem" }}>
          Cancelar
        </Button>
      </div>
    </>
  );
}

export default FormularioNewItem;
