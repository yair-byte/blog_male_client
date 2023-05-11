import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";

function FormularioItems(props) {

  const { items, OnClickCancel, onSubmitClick , onDeleteClick } = props;

  const [itemSelected, setItemSelect] = useState(null);

  const [title, setTitle] = useState("");

  const [description, setDescription] = useState("");

  const [fullDescription, setFullDescription] = useState("");

  const [imageSrc, setImageSrc] = useState("");

  const handleItemClick = (itemID) => {
    const index = items.findIndex(item => item._id === itemID);
    setItemSelect(index);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const newItem = {
      title: title,
      description: description,
      fullDescription: fullDescription,
      imageSrc: imageSrc,
      imageAlt: `imagen de ${title}`,
    };
    onSubmitClick(newItem, items[itemSelected]._id);
  };

  const handleResetClick = () => {
    setTitle(items[itemSelected].title);
    setDescription(items[itemSelected].description);
    setFullDescription(items[itemSelected].fullDescription);
    setImageSrc(items[itemSelected].imageSrc);
  };

  const handleBorrarClick = () => {
    onDeleteClick(items[itemSelected]._id);
  };

  return (
    <>
      <div className="dropdown">
        <a className="btn btn-lg btn-primary dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
          Item N°
        </a>

        <ul className="dropdown-menu">
          {items.map((element) => (
            <li key={element._id} onClick={() => handleItemClick(element._id)}>
              <a className="dropdown-item" href="#">{element.title}</a>
            </li>
          ))}
        </ul>
      </div>

      <div>
        {itemSelected != null && (
          <Form onSubmit={handleSubmit} style={{ color: "white", fontSize: "2rem" }}>
            <Form.Group controlId="formTitulo">
              <Form.Label >Título del Item</Form.Label>
              <Form.Control
                type="text"
                maxLength={30}
                value={title}
                placeholder={items[itemSelected].title}
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
                placeholder={items[itemSelected].description}
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
                placeholder={items[itemSelected].fullDescription}
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
                placeholder={items[itemSelected].imageSrc}
                onChange={(e) => setImageSrc(e.target.value)}
                required
              />
            </Form.Group>

            <Button variant="primary" type="submit" style={{ fontSize: "50%" }}>
              Guardar
            </Button>

            <Button variant="secondary" onClick={handleResetClick} style={{ fontSize: "50%" }}>
              Restablecer
            </Button>

            <Button variant="warning" onClick={handleBorrarClick} style={{ fontSize: "50%" }}>
              Borrar
            </Button>

          </Form>
        )}
        <Button variant="danger" onClick={OnClickCancel} style={{ fontSize: "100%", marginTop: "1rem" }}>
          Cancelar
        </Button>
      </div>
    </>
  );
}

export default FormularioItems;
