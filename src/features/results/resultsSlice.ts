import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import { Results } from "../../interfaces/Results";

interface ResultState {
    results: Results[] | null;
    loading: boolean; 
    singleResults: Results | null;
    errors:any;
}

const initialState: ResultState = {
    results: [],
    singleResults: null,
    loading: false,
    errors: null
}

// actions are processes that get data from backend
export const getResults = createAsyncThunk<Results[]>(
    "Results/getResults",
    async (_, thunkAPI) => {
        try {
            const response = await axios.get("http://localhost:8080/api/Results");
            return response.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error);
        }
    }
);

export const getResultsById = createAsyncThunk<Results, string>(
    "Results/getResultsById",
    async (id, thunkAPI) => {
        try {
            const response = await axios.get(`http://localhost:8080/api/Results/Results/${id}`)
            return response.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error);
        }
    }
)

export const createResults = createAsyncThunk<Results, Object>(
    "results/createResults",
    async (data, thunkAPI) => {
        try {
            const response = await axios.post("http://localhost:8080/api/Results/Results", data);
            thunkAPI.dispatch(getResults());
            return response.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error);
        }
    }
)

export const updateResults = createAsyncThunk<Results, Object|any>(
    "results/updateResults",
    async (data, thunkAPI) => {
        try {
            const response = await axios.put(`http://localhost:8080/api/Results/Results/${data._id}`, data)
            return response.data
        } catch (error) {
            return thunkAPI.rejectWithValue(error);
        }
    }
)

export const deleteResults = createAsyncThunk<string,string>(
    "results/deleteResults",
    async (id, thunkAPI) => {
        try {
            const response = await axios.delete(`http://localhost:8080/api/Results/Results/${id}`);
            thunkAPI.dispatch(getResults());
            return response.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error);
        }
    }
) 

// reducers -> reduce to a specific state -> changes state
export const ResultSlice = createSlice({
    name: "results",
    initialState,
    reducers: {
        setResults: (state, action: PayloadAction<Results[]>) => {
            state.results = action.payload
        },
        filterResults: (state, action) => {
            state.results = state.results?.filter(result => result._id !== action.payload)!;
        }
    },
    extraReducers: (builder) => {
        builder.addCase(getResults.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(getResults.fulfilled, (state, action) => {
            state.results = action.payload;
            state.loading = false;
        });
        builder.addCase(getResults.rejected, (state, action) => {
            state.loading = false;
            state.errors = action.payload;
        });
        builder.addCase(getResultsById.pending, (state) => {
            state.loading = true;            
        });
        builder.addCase(getResultsById.fulfilled, (state, action) => {
            state.singleResults = action.payload;
            state.loading = false;
        });
        builder.addCase(updateResults.fulfilled, (state, action) => { 
            state.singleResults = action.payload;
        });
        // builder.addCase(deleteResults.fulfilled, (state, action) => {
        //     state.message
        // })
    }
})

export default ResultSlice.reducer;
export const { setResults, filterResults } = ResultSlice.actions;