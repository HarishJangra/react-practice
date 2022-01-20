import React, { useEffect, useReducer, useRef, useState } from 'react'


export const mountRef = React.createRef()

const reducer = (state, action) => {

    return {...state, [action.type] : action.value}

    // return Object.assign({}, state, {
    //         [action.type]: action.value
    //     })
    

    // if(action.type === "username"){
    //     return Object.assign({}, state, {
    //         [action.type]: action.value
    //     })
    // }

    // if(action.type === "password"){
    //     return Object.assign({}, state, {
    //         password: action.value
    //     })
    // }
}

export const LoginRoute = props => {

  const [inputData, dispatchDataChange] = useReducer(reducer, {
      username: "",
      password: ""
  })
    


    const _handleChange = (e) => {
        dispatchDataChange({type: "username" , value: e.target.value})

        // setUsername(e.target.value)
    }


    const _handleChangePassword = (e) => {
        dispatchDataChange({type: "password" , value: e.target.value})
    }

    


    useEffect(() => {
       console.log("This will  console only first time")
        dispatchDataChange({type: "username" , value: "Rahul"})
       //    setUsername("Rahul") 
    },[])



    // useEffect(() => {
    //     if(mountRef.current){
    //         console.log("check on every username change")
    //         if(username === "Harish"){
    //             // setPassword("Harish")
    //         }else if(username === "auto"){
    //             passRef.current.focus()
    //         }
    //     }else{
    //         mountRef.current = true
    //     }

    // },[username])


    const userRef = useRef()
    const passRef = useRef()

    // console.log({userRef, passRef})

console.log({inputData, dispatchDataChange})
    return (
        <div style={{
            display: "flex",
            alignItems: 'center',
            justifyContent: 'center',
            height: "100vh"
        }}>
            <div>
                <h1>Login Page</h1>
                <div style={{ marginTop: 20, border: "1px solid #ddd", borderRadius: 10, padding: 20 }}>
                    <div>
                    <p>Username</p>
                    <input ref={userRef} style={{
                        border: "1px solid #ddd",
                        fontSize: 20
                    }} type="text" name="Username" value={inputData.username} onChange={_handleChange} ></input>

                    </div>

                    <div>
                    <p>Password</p>
                    <input ref={passRef} style={{
                        border: "1px solid #ddd",
                        fontSize: 20
                    }} type="text" name="Password" value={inputData.password} onChange={_handleChangePassword} ></input>

                    </div>


                </div>


            </div>

        </div>
    )
}




export const LoginRouteState = props => {

    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    


    const _handleChange = (e) => {
        setUsername(e.target.value)
    }


    const _handleChangePassword = (e) => {
        setPassword(e.target.value)
    }

    


    // useEffect(() => {
    //    console.log("This will  console only first time")
    //    setUsername("Rahul") 
    // },[])



    useEffect(() => {
        if(mountRef.current){
            console.log("check on every username change")
            if(username === "Harish"){
                setPassword("Harish")
            }else if(username === "auto"){
                passRef.current.focus()
            }
        }else{
            mountRef.current = true
        }

    },[username])


    const userRef = useRef()
    const passRef = useRef()

    console.log({userRef, passRef})


    return (
        <div style={{
            display: "flex",
            alignItems: 'center',
            justifyContent: 'center',
            height: "100vh"
        }}>
            <div>
                <h1>Login Page</h1>
                <div style={{ marginTop: 20, border: "1px solid #ddd", borderRadius: 10, padding: 20 }}>
                    <div>
                    <p>Username</p>
                    <input ref={userRef} style={{
                        border: "1px solid #ddd",
                        fontSize: 20
                    }} type="text" name="Username" value={username} onChange={_handleChange} ></input>

                    </div>

                    <div>
                    <p>Password</p>
                    <input ref={passRef} style={{
                        border: "1px solid #ddd",
                        fontSize: 20
                    }} type="text" name="Password" value={password} onChange={_handleChangePassword} ></input>

                    </div>


                </div>


            </div>

        </div>
    )
}