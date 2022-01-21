import { Box, Flex, Text } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'


export const NavBar = props => {
    return (
        <Flex bg="gray.100" justifyContent="space-between" alignItems="center" >
            <Box display="flex" p={3}  flex={1}>
                <Box flex={2} p={4}>
                    LOGO
                </Box>
                <Box flex={1} p={4}     >
                    Name
                </Box>
            </Box>
            <NavMenu />
        </Flex>
    )
    // return (
    //     <div style={{
    //         display: "flex",
    //         justifyContent: "space-around"
    //       }}>
    //         <Link to="/home"> Home Page</Link>
    //         <Link to="/about"> About Page</Link>
    //         <Link to="/login"> Login Page</Link>
    //       </div>
    // )
}

const links = [{
    to: "/",
    label: "Home"
},
{
    to: "/about",
    label: "About"
},
{
    to: "/login",
    label: "Login"
}]


const NavMenu = props => {
    return (
        <Box p={3} display="flex" justifyContent="flex-end" bg="green.100" flex={2}>
            {
                links.map((link, i) => {
                    return (
                        <NavLink key={i} to={link.to} label={link.label} />
                    )
                })
            }

        </Box>
    )
}

const NavLink = ({ to, label }) => {
    return (
        <Box p={3} px={4} _hover={{
            color: "white",

        }} >
            <Link to={to}>{label}</Link>
        </Box>
    )
}