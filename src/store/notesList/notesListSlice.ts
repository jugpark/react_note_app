import {createSlice} from "@reduxjs/toolkit";
import {Note} from "../../types/note";

interface NoteState {
    mainNote: Note[],
    archiveNotes: Note[],
    trashNotes: Note[],
    editNote: null | Note[],
}

const initialState: NoteState = {
    mainNote: [],
    archiveNotes: [],
    trashNotes: [],
    editNote: null
}

const noteSlice = createSlice({
    name: "notesList",
    initialState,
    reducers: {}
})

export default noteSlice.reducer;