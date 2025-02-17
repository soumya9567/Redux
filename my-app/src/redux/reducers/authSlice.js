import { createSlice } from "@reduxjs/toolkit";



const currentlyActiveUser = JSON.parse(localStorage.getItem("currentlyAcitiveUser")) || null;

const authSlice = createSlice({
    name: "auth",
    initialState: {
        user: JSON.parse(localStorage.getItem("user")) || [],
        currentUser: currentlyActiveUser,
        isAutheticated: currentlyActiveUser ? true : false,
    },

    reducers: {
        registerUser: (state, action) => {
            const existingUser = state.user.find((user) => {
                return user?.email == action.payload?.email;
            })


            if (existingUser) {
                console.log("user already exist")
            } else {
                state.user = [...state.user, action.payload];
                localStorage.setItem("user", JSON.stringify(state.user))
                localStorage.setItem("currentlyActiveUser", JSON.stringify(action.payload))

            }
        },
        login: (state, action) => {
            console.log(action.payload, "inside the login function");
            const emailExist = state.user.find((user) => {
              return user?.email === action.payload?.email;
            });
            if (emailExist) {
              const isPasswordCorrect = state.user.find((user) => {
                return user?.password === action.payload?.password;
              });
              if (isPasswordCorrect) {
                state.isAuthenticated = true;
                const authenticatedUser = state.user.find((user) => {
                 return user.email === action.payload.email;
                });
                console.log(authenticatedUser,'auth user')
                localStorage.setItem(
                  "currentlyActiveUser",
                  JSON.stringify(authenticatedUser)
                );
              } else {
                console.log("password is incorrect");
              }
            } else {
              console.log("email is incorrect");
            }
          },
        logout: (state) => {
            state.user = []
            state.isAutheticated = false
            localStorage.removeItem("currentlyActiveUser")
        },



    }
})
export const { registerUser, login, logout } = authSlice.actions;
export default authSlice.reducer;