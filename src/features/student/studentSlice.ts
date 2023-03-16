import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import { Student } from "../../interfaces/Student";

interface StudentState {
    students: Student[] ;
    loading: boolean;
    student: Student | null;
    errors: any;
}

const initialState: StudentState = {
    students: [],
    student: null,
    loading: false,
    errors: null
}

// actions are processes that get data from backend
export const getStudents = createAsyncThunk<Student[]>(
    "students/getStudents",
    async (_, thunkAPI) => {
        try {
            const response = await axios.get("http://localhost:8080/api/student");
            return response.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error);
        }
    }
);

export const getStudentById = createAsyncThunk<Student, string>(
    "Students/getStudentById",
    async (id, thunkAPI) => {
        try {
            const response = await axios.get(`http://localhost:8080/api/student/student/${id}`)
            return response.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error);
        }
    }
)

export const createStudent = createAsyncThunk<Student, Object>(
    "Students/createStudent",
    async (data, thunkAPI) => {
        try {
            const response: any = await axios.post("http://localhost:8080/api/student/student", data);
            thunkAPI.dispatch(getStudents());
            return response.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error);
        }
    }
)

export const updateStudent = createAsyncThunk<Student, Object | any>(
    "Students/updateStudent",
    async (data, thunkAPI) => {
        try {
            const response = await axios.put(`http://localhost:8080/api/student/student/${data._id}`, data)
            return response.data
        } catch (error) {
            return thunkAPI.rejectWithValue(error);
        }
    }
)

export const deleteStudent = createAsyncThunk<string, string>(
    "Students/deleteStudent",
    async (id, thunkAPI) => {
        try {
            const response = await axios.delete(`http://localhost:8080/api/student/student/${id}`);
            thunkAPI.dispatch(getStudents());
            return response.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error);
        }
    }
)

// reducers -> reduce to a specific state -> changes state
export const StudentSlice = createSlice({
    name: "Students",
    initialState,
    reducers: {
        setStudents: (state, action: PayloadAction<Student[]>) => {
            state.students = action.payload
        },
        filterStudent: (state, action) => {
            state.students = state.students?.filter(student => student._id !== action.payload)!;
        }
    },
    extraReducers: (builder) => {
        builder.addCase(getStudents.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(getStudents.fulfilled, (state, action) => {
            state.students = action.payload;
            state.loading = false;
        });
        builder.addCase(getStudents.rejected, (state, action) => {
            state.loading = false;
            state.errors = action.payload;
        });
        builder.addCase(getStudentById.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(getStudentById.fulfilled, (state, action) => {
            state.student = action.payload;
            state.loading = false;
        });
        builder.addCase(updateStudent.fulfilled, (state, action) => {
            state.student = action.payload;
        });
        // builder.addCase(deleteStudent.fulfilled, (state, action) => {
        //     state.message
        // })
    }
})

export default StudentSlice.reducer;
export const { setStudents, filterStudent } = StudentSlice.actions;