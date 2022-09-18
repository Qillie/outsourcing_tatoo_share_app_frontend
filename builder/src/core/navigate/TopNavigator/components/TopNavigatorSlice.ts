import {createSlice, PayloadAction} from '@reduxjs/toolkit'

export interface ITopNavigatorState {
    label: string
}

export type TTopNavigator = {
    label: string
}

const initialState: ITopNavigatorState = {
    label: "asd"
}

const TopNavigatorSlice = createSlice({
    name: "TopNavigator",
    initialState,
    reducers: {
        setLabel: (state, action: PayloadAction<TTopNavigator>) => {
            state.label = action.payload.label
        }
    }
})

export default TopNavigatorSlice