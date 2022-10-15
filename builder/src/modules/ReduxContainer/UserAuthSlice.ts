import {createSlice, PayloadAction} from '@reduxjs/toolkit'

export interface IUserAuthState {
    accessToken?: string
    refreshToken?: string
}

export type TUserAuth = {
    accessToken?: string
    refreshToken?: string
}

const initialState: IUserAuthState = {
    accessToken: undefined,
    refreshToken: undefined
}

const UserAuthSlice = createSlice({
    name: "UserAuth",
    initialState,
    reducers: {
        setUserAuth: (state, action: PayloadAction<TUserAuth>) => {
            state.accessToken = action.payload.accessToken
            state.refreshToken = action.payload.refreshToken
        }
    }
})

export default UserAuthSlice