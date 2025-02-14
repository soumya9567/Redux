import { createSlice } from "@reduxjs/toolkit";



const currentlyActiveUser = JSON.parse(localStorage.getItem("currentlyAcitiveUser"))||null;

const authSlice = createSlice({
    name :"auth",
    initialState:{
        user:JSON.parse(localStorage.getItem("user"))||[],
        currentUser: currentlyActiveUser,
        isAutheticated: currentlyActiveUser ? true : false,
    },

    reducers:{
        registerUser:(state,action) =>{
            const existingUser = state.user.find((user)=>{
                return user?.email == action.payload?.email;
            })


            if(existingUser){
                console.log("user already exist")
            }else{
                state.user = [...state.user,action.payload];
                localStorage.setItem("user",JSON.stringify(state.user))
                localStorage.setItem("currentlyActiveUser",JSON.stringify(action.payload))

            }
        },

        login:(state,action)=>{
            console.log(action.payload,"inside the login function")
            const emailExist = state.action.find((user)=>{
                return user?.email = action.payload?.email
            });
            if(emailExist){
                state.isAutheticated == true;
                const autheticatedUser = state.user.find((user)=>{
                    return user.email === action.payload.email
                })

                console.log(autheticatedUser,'auth user')
                localStorage.setItem(
                    "currentlyActiveUser",JSON.stringify(autheticatedUser)
                )

            }else{
                console.log("password incorrect")
            }

        },
        logout:(state) =>{
            state.user = []
            state.isAutheticated = false
            localStorage.removeItem("currentlyActiveUser")
        },


       
    }
})
export const {registerUser,login,logout} = authSlice.actions
export default authSlice.reducer;