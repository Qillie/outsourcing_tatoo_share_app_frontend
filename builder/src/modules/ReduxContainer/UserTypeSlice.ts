import {createSlice, PayloadAction} from '@reduxjs/toolkit'

export interface IUserTypeState {
    type: "user" | "tattooist"
}

export type TUserType = {
    type: "user" | "tattooist"
}

const initialState: IUserTypeState = {
    type: "user"
}

const UserTypeSlice = createSlice({
    name: "UserType",
    initialState,
    reducers: {
        setUserType: (state, action: PayloadAction<TUserType>) => {
            state.type = action.payload.type
        }
    }
})

export default UserTypeSlice