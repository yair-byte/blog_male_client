import React from 'react';

const CommentList = (props) => {

  const { comments , isAdmin , handleDeleteComment } = props

  const handleDelete = (indx) => {
    handleDeleteComment(indx);
  };

  return (
    <>
      {comments.map((comment, index) => (
        <div key={index} style={{ fontSize:"1.6rem" , color:"black"}} className='container d-flex flex-column justify-content-left align-items-start w-50 '>
          {comment.isAdmin ? (<p style={{maxWidth: "100%" , overflowWrap: "break-word"}} ><strong style={{ fontSize:"1.8rem" , color:"green"}}>{comment.name}(ADMIN)</strong></p> ) : (<p style={{maxWidth: "100%" , overflowWrap: "break-word"}} ><strong style={{ fontSize:"1.8rem"}}>{comment.name}</strong></p> )}
          {isAdmin ? (
            <button onClick={() => handleDelete(comment._id)} type="button" className="btn btn-lg btn-danger">
              <i className="bi bi-trash3"></i>
            </button>
          ) : (
            <></>
          )}
          <p >{(new Date(comment.date)).toLocaleDateString()}</p>
          <p style={{maxWidth: "100%" , overflowWrap: "break-word"}} >{comment.comment}</p>
          <br/>
        </div> 
      ))}
    </>
  );
};

export default CommentList;
