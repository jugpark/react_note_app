import {createSlice} from "@reduxjs/toolkit";

interface ModalState {
    viewEditTagsModal: boolean,
    viewAddTagsModal: boolean,
    viewCreateNoteModal: boolean,
    viewFiltersModal: boolean
}

const initialState: ModalState = {
    viewEditTagsModal: false,
    viewAddTagsModal: false,
    viewCreateNoteModal: false,
    viewFiltersModal: false
}

const modalSLice = createSlice({
    name: 'modal',
    initialState,
    reducers: {}
})


export default modalSLice.reducer;
