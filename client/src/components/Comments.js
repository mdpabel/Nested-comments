/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import React, { useState } from "react";
import { useComment } from "../hooks/useComment";
import Comment from "./Comment";
import Form from "./Form";

const Comments = () => {
  const [open, setOpen] = useState(null);
  const { isLoading, isSuccess, rootComments, getReplies } = useComment();

  return (
    <div
      css={css`
        max-width: 900px;
        width: 90%;
        margin-top: 3em;
        background: #fff;
        padding: 3em;
        border-radius: 4px;
        box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
        display: flex;
        flex-direction: column;
        gap: 1em;
      `}
    >
      <Form />
      {isLoading && <h2>Loading...</h2>}
      {isSuccess &&
        rootComments.map((comment) => (
          <Comment
            open={open}
            setOpen={setOpen}
            comment={comment}
            key={comment._id}
            replies={getReplies(comment._id)}
          />
        ))}
    </div>
  );
};

export default Comments;
