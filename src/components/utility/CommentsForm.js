import React from 'react';

function CommentsForm({ newComment, handleCommentChange, handleCommentSubmit }) {

  return(
    <div className="input-group">
      <textarea
        value={newComment.content}
        className="textarea margin-bottom"
        rows="1"
        placeholder="Comment"
        onChange={handleCommentChange}
      >
      </textarea>
      <button className="btn btn-outline-secondary btn-sm" onClick={handleCommentSubmit} >Add comment</button>
    </div>
  );
}

export default CommentsForm;
