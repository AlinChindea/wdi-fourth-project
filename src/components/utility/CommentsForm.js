import React from 'react';

function CommentsForm({ newComment, handleChange, handleSubmit }) {

  return(
    <div className="input-group">
      <textarea
        value={newComment.content}
        className="textarea margin-bottom"
        rows="1"
        placeholder="Comment"
        onChange={handleChange}
      >
      </textarea>
      <button className="btn btn-primary" onClick={handleSubmit} >Add comment</button>
    </div>
  );
}

export default CommentsForm;
