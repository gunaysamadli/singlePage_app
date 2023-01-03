import { userService } from "../../Apis/Services/service";
import { ActionTypes } from "../contants/actionTypes";

export const getAllUsers = () => async (dispatch) => {
  try {
    const res = await userService.getAllUsers();

    dispatch({
      type: ActionTypes.GET_USERS,
      payload: res.data,
    });
  } catch (err) {
    console.log(err);
  }
};


// export const createUser = (name, surname, balance, genderId, cart, date) => async (dispatch) => {
//     try {
//         const response = await userService.createNewUser({ name, surname, balance, genderId, cart, date })

//         dispatch({
//             type:CREATE_USER,
//             payload:response.data
//         });

//         return Promise.resolve(response.data);
//     }catch (err) {
//         return Promise.reject(err);
//     }
// }