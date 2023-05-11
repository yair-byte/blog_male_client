import React, { useState } from 'react';

const CommentForm = (props) => {

  const { onSubmit , isAdmin } = props;

  const [name, setName] = useState('');

  const [comment, setComment] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit({ 
      name: name, 
      comment: comment, 
      isAdmin: isAdmin
    });
    setName('');
    setComment('');
  };

  return (
    <form className="d-flex flex-column align-items-center justify-content-center text-center" onSubmit={handleSubmit}>
      <div>
        <label style={{ color: "black", fontSize: "2rem" }} htmlFor="name">Nombre:</label><br/>
        <input maxLength={50} required type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} />
      </div>
      <div>
        <label style={{ color: "black", fontSize: "2rem" }} htmlFor="comment">Comentario:</label><br/>
        <textarea maxLength={250} required id="comment" value={comment} onChange={(e) => setComment(e.target.value)} />
      </div>
      <br/><button type="submit button" className="btn btn-lg btn-success">Comentar</button>
    </form>
  );
};

export default CommentForm;
