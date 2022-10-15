//* Import libraries
import { configureStore } from "@reduxjs/toolkit"
import TopNavigatorSlice from '../../navigate/TopNavigator/components/TopNavigatorSlice';
import UserTypeSlice from "../../../modules/ReduxContainer/UserTypeSlice";

const ReduxStore = configureStore({
    reducer: {
        topNavigator: TopNavigatorSlice.reducer,
        userType: UserTypeSlice.reducer
    }
})

export default ReduxStore

export type TReduxRootState = ReturnType<typeof ReduxStore.getState>
export type TReduxDispatch = typeof ReduxStore.dispatch