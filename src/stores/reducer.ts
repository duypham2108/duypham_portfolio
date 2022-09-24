import { createSlice } from "@reduxjs/toolkit"

export type repoState = {
  id: number | string,
  url: string,
  name: string,
  description: string,
  language: string
}

const initState = {
  repoList: [
    {
      id: 0,
      url: "https://github.com/BiomedicalMachineLearning/stLearn",
      name: "stLearn",
      description: "Downstream analysis toolkit for spatial transcriptomics data",
      language: "Python",
      product: "git",
    },
    {
      id: 1,
      url: "https://github.com/BiomedicalMachineLearning/stlearn_interactive",
      name: "i-stLearn",
      description: "Interactive web application for spatial transcriptomics analysis",
      language: "Python",
      product: "git",
    },
    {
      id: 2,
      url: "https://github.com/BiomedicalMachineLearning/VGP",
      name: "PRSUP",
      description: "Scalable PRSUP framework to run the transfer PRS from large population to under-representative population",
      language: "Python",
      product: "git",
    },
    {
      id: 3,
      url: "http://cellfateexplorer.d24h.hk/",
      name: "CellFateExplorer",
      description: "CellFateExplorer dashboard for research content presentation",
      language: "Javascript",
      product: "web",
    },
    {
      id: 4,
      url: "https://sccmultiomics.web.app//",
      name: "Skin cancer atlas - skInteractive",
      description: "An spatial multi-omics atlas for skin cancer",
      language: "Javascript",
      product: "web",
    },

  ]

}

export const repoSlice = createSlice({
  name: "repo",
  initialState: initState,
  reducers: {
    display: (state) => state
  }
})

export default repoSlice;

export const { display } = repoSlice.actions;