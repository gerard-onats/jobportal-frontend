import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    searchQuery: null,
    isNewSearch: true,
    location: null,
    datePosted: null,
    jobType: null,
    preferenceType: null,
    pageNumber: 1,
    pagesNeeded: 0,
    experienceLevel: null,
    results: [],
    resultMatch: 0,
}

const searchQuerySlice = createSlice({
    name: 'search',
    initialState,
    reducers: {
        setSearchResults: (state, action) => {
            state.isNewSearch = true;
            state.pageNumber = 1;
            state.pagesNeeded = action.payload.pagesNeeded;
            state.resultMatch = action.payload.resultMatch;
            state.results = action.payload.results;
        },
        setResultsNextPage: (state, action) => {
            state.pageNumber = action.payload.pageNumber;
            state.results = action.payload.results;
        },
        setSearchParams: (state, action) => {
            /* TODO: add other states like location, jobtype, etc. */
            state.searchQuery = action.payload.searchQuery;
        },
        setPageNumber: (state, action) => {
            state.isNewSearch = false;
            state.pageNumber = action.payload.pageNumber;
        },
    }
});

export const { setSearchResults, setResultsNextPage, setSearchParams, setPageNumber } = searchQuerySlice.actions;
export default searchQuerySlice.reducer;