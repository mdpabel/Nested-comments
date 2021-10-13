/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import React from "react";
import { useComment } from "../hooks/useComment";
import Form from "./Form";
import { Link } from "./lib";

const Comment = ({ comment, replies = [], open, setOpen }) => {
  const { getReplies } = useComment();

  function handleReply() {
    setOpen((prev) => !prev);
  }

  return (
    <div
      css={css`
        display: grid;
        grid-template-columns: 10% 90%;
      `}
    >
      <img width="100%" src={comment.avatar} alt={comment.author} />
      <div>
        <h4
          css={css`
            color: #2432bf;
          `}
        >
          {comment.author}
        </h4>
        <p
          css={css`
            font-size: 14px;
          `}
        >
          {comment.body}
        </p>
        <div
          css={css`
            display: flex;
            gap: 0.5em;
          `}
        >
          <Link>Like</Link>
          <Link onClick={handleReply}>Reply</Link>
          <div
            css={css`
              font-size: 10px;
              color: rgba(0, 0, 0, 0.9);
            `}
          >
            {comment.created_at}
          </div>
        </div>
        {open && <Form setOpen={setOpen} parent={comment._id} />}
        {replies?.map((comment) => (
          <Comment
            open={open}
            setOpen={setOpen}
            key={comment._id}
            comment={comment}
            replies={getReplies(comment._id)}
          />
        ))}
      </div>
    </div>
  );
};

export default Comment;
