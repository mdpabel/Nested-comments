/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import React from "react";
import { useMutation, useQueryClient } from "react-query";
import client from "../utils/api-client";

const Form = ({ parent = null, setOpen }) => {
  const queryClient = useQueryClient();

  const { mutate } = useMutation(
    (comment) => client("comment", { method: "POST", data: comment }),
    {
      onMutate: (values) => {
        console.log(values);
      },
      onSettled: () => {
        queryClient.invalidateQueries("Comments");
      },
    }
  );

  function handleSubmit(e) {
    e.preventDefault();
    const comment = e.target.comment.value;
    mutate({ body: comment, parent: parent });
    setOpen(null);
    e.target.comment.value = "";
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          css={css`
            width: 100%;
            padding: 0.5em;
          `}
          placeholder="Add a comment..."
          id="comment"
          type="text"
        ></input>
      </form>
    </div>
  );
};

export default Form;
