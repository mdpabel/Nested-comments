/**@jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import React from "react";
import { ReactQueryDevtools } from "react-query/devtools";
import Comments from "./components/Comments";

import "./styles";

const App = () => {
  return (
    <div
      css={css`
        display: flex;
        justify-content: center;
      `}
    >
      <Comments />
      <ReactQueryDevtools />
    </div>
  );
};

export default App;
