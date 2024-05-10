import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { searchJobSpecificationApi } from "../services/jobService";

const namespace = 'search'

const initialState = {
    query: null,
    fresh: true,
    location: null,
    datePosted: null,
    jobType: null,
    preferenceType: null,
    experienceLevel: null,
    pageNumber: 1,
    data: {
        results: [],
        matches: 0,
        pagesNeeded: 0,
    }
}

export const fetchQueryResults = createAsyncThunk(`${namespace}/fetchQueryResults`, async(args) => {
    const res = await searchJobSpecificationApi(args, 1, true);
    return res;
})

export const fetchNextPageResults = createAsyncThunk(`${namespace}/fetchNextPageResults`, async() => {

})

const searchQuerySlice = createSlice({
    name: `${namespace}`,
    initialState,
    reducers: {
    },
    extraReducers: builder => {
        builder.addCase(fetchQueryResults.fulfilled, (state, {payload}) => {
            state.fresh = true;
            state.pageNumber = 1;
            state.data.pagesNeeded = payload.pagesNeeded;
            state.data.matches = payload.matches;
            state.data.results = payload.results;
        })
    }
});

export default searchQuerySlice.reducer;