import { useQuery } from "react-query";
import client from "../utils/api-client";

export function useComment() {
  const { data, isLoading, isSuccess } = useQuery(
    "Comments",
    () => client("comments"),
    {
      refetchOnWindowFocus: false,
    }
  );

  const rootComments = data?.filter((comment) => comment.parent === null);

  function getReplies(commentId) {
    return data?.filter((comment) => comment.parent === commentId.toString());
  }
  return { data, isLoading, isSuccess, rootComments, getReplies };
}
