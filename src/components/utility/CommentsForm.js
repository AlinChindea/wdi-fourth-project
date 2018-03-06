import React from 'react';

function CommentsForm({ newComment, handleCommentChange, handleCommentSubmit }) {

  return(
    <section>
      <div className="row">
        <div className="col-12">
          <div className="input-group">
            <textarea
              value={newComment.content}
              className="comments-box"
              rows="1"
              placeholder="Add a comment"
              onChange={handleCommentChange}
            >
            </textarea>
          </div>
        </div>
      </div>
      <br />
      <div className="row">
        <div className="col-md-3">
          <div className="input-group">
            <button className="btn btn-outline-secondary btn-sm" onClick={handleCommentSubmit}>Add comment</button>

          </div>
        </div>
      </div>
    </section>
  );
}

export default CommentsForm;
