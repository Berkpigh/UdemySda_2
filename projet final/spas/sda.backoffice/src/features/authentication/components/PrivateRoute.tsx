import { Navigate } from "react-router-dom";
import { PropswithChildren } from "../../../core/custom-type";
import { getUserFromLocalDb } from "../services/localstorage.infrastructure";

export const PrivateRoute = (props: PropswithChildren) => {
    const user = getUserFromLocalDb()
    if (user === null || !(user.accessToken)) {
        return <Navigate to='/login' replace></Navigate>
    }
    return props.children
}