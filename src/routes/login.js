import { Box, Button, Flex, Input, Text } from '@chakra-ui/react'
import React, { useEffect, useReducer, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'


export const mountRef = React.createRef()

const reducer = (state, action) => {

    return { ...state, [action.type]: action.value }

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
        dispatchDataChange({ type: "username", value: e.target.value })

        // setUsername(e.target.value)
    }


    const _handleChangePassword = (e) => {
        dispatchDataChange({ type: "password", value: e.target.value })
    }




    useEffect(() => {
        console.log("This will  console only first time")
        dispatchDataChange({ type: "username", value: "Rahul" })
        //    setUsername("Rahul") 
    }, [])



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

    console.log({ inputData, dispatchDataChange })

    const navigate = useNavigate() // from react-router

    const _login = () => {
        if(inputData?.password && inputData?.username){     
            if(inputData?.username.includes("@")){
                if(inputData?.password === inputData?.username){
                    navigate("/")
                }else{
                    alert("Password and usernmae must be equal")
                }    
            }else{
                alert("Incorrect username")
            }
        }else{
            // do something
            alert("Username and password are mandatory")
        }
    }

    return (
        <Flex h="80vh" justifyContent="center" alignItems="center" >
            <Box boxShadow="md" p={10} borderRadius="md" >
                <Text>User Name</Text>
                <Input ref={userRef} style={{
                    border: "1px solid #ddd",
                    fontSize: 20
                }} type="text" name="Username" value={inputData.username} onChange={_handleChange} />
                
                <Text mt={5}>Password</Text>
                <Input ref={passRef} style={{
                    border: "1px solid #ddd",
                    fontSize: 20
                }} type="password" name="Password" value={inputData.password} onChange={_handleChangePassword} />

                <Button mt={10} w="100%" onClick={_login} variant="solid" colorScheme="green">Login</Button>

            </Box>
        </Flex>
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
        if (mountRef.current) {
            console.log("check on every username change")
            if (username === "Harish") {
                setPassword("Harish")
            } else if (username === "auto") {
                passRef.current.focus()
            }
        } else {
            mountRef.current = true
        }

    }, [username])


    const userRef = useRef()
    const passRef = useRef()

    console.log({ userRef, passRef })


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