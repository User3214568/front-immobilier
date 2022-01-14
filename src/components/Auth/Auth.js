import { useEffect, useState } from "react"
import { Outlet } from "react-router-dom"
import { roles } from "../../Enums/Enums"
import AuthServices from "../../services/AuthServices/AuthServices"
import Login from "../Account/Login/Login"

export default function Auth(props) {
    const [dash, setDash] = useState(<></>)
    useEffect(() => {
        console.log('use effect')
        AuthServices.isAuth().then(res => {
            console.log('authres ', res)
            if (res == roles[0]) {
                console.log('admin')
                setDash(props.children[0])
            } else {
                if (res == roles[1]) {
                    setDash(props.children[1])
                }else {
                    setDash(<Login></Login>)
                }
            }

        }).catch(e => {
            setDash(<Login />)
        })
    }, [])

    return dash


}