import ReactDOM from "react-dom";
import { QueryClientProvider, QueryClient } from "react-query";
import App from "./App";

const queryClient = new QueryClient();

ReactDOM.render(
  <QueryClientProvider client={queryClient}>
    <App />
  </QueryClientProvider>,
  document.getElementById("root")
);
