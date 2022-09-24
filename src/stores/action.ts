import { repoState } from "./reducer";

export const displayRepo = (data: repoState) => {
  return {
    type: "repoList/displayRepo",
    payload: data
  }
}