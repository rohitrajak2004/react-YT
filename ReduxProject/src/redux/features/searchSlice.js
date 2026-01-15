import { createSlice } from "@reduxjs/toolkit";

export const searchSlice = createSlice({
    name:'search',
    initialState:{
        query:'',
        activeTab:'photo',
        results:[],
        resultsVideo:[],
        loading:false,
        error:null
    },
    reducers:{
        setQuery(state,actions){
            state.query = actions.payload
        },
         setActiveTab(state,actions){
            state.activeTab = actions.payload
        },
         setResults(state,actions){
            state.results = actions.payload
            state.loading = false
        },
        setResultsVideo(state,actions){
            state.resultsVideo = actions.payload
            state.loading = false
        },
         setLoading(state){
            state.loading = true
            state.error = null
        },
         setError(state,actions){
            state.error = actions.payload
            state.loading = false
        },
        clearResults(state){
            state.results = []
            state.resultsVideo = []
        }
    }
})

export const{setActiveTab,setError,setLoading,setQuery,setResults,clearResults,setResultsVideo} = searchSlice.actions

export default searchSlice.reducer;