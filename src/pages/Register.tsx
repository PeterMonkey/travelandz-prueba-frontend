import { useState, ChangeEvent } from "react"
import { Link } from "react-router-dom"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@radix-ui/react-label"
import { ToastAction } from "@radix-ui/react-toast"
import { useToast } from "@/components/ui/use-toast"
import { useNavigate } from "react-router-dom"
import axios from "axios"


export default function Register() {

    const navigate = useNavigate()

    const { toast } = useToast()

    const [name, setName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [repeatPasword, setRepeatPassword] = useState('')

    const handlerChange = (seter:(value: string) => void) => (e:ChangeEvent<HTMLInputElement>) => {
        seter(e.target.value)
    }

    const handlerSubmit = async () => {
        if(password === repeatPasword) {
        const response = await axios.post('http://localhost:3000/register', {
                name,
                lastName,
                email,
                password
            })
            localStorage.setItem('token', response.data.token)
            setTimeout(() => navigate('/panel'), 2000)
        } else {
            toast({
                variant: "destructive",
                title: "Contraseña",
                description: "La contraseña no coincide",
                action: <ToastAction altText="Intentar de nuevo">Try again</ToastAction>,
              })
        }
    }

    return (
        <div className="flex items-center justify-center h-screen">
            <Card className="w-3/5 sm:w-96 h-4/6 shadow-[0_3px_10px_rgb(0,0,0,0.2)]">
                <CardHeader className=" flex items-center">
                    <CardTitle>Registro</CardTitle>
                </CardHeader>
                <CardContent className="h-2/3">
                    <Label>Nombre</Label>
                    <Input onChange={handlerChange(setName)} type="name" className="mb-4"></Input>
                    <Label>Apellido</Label>
                    <Input onChange={handlerChange(setLastName)} type="name" className="mb-4"></Input>
                    <Label>Email</Label>
                    <Input onChange={handlerChange(setEmail)} type="email" className="mb-4"></Input>
                    <Label>Contraseña</Label>
                    <Input onChange={handlerChange(setPassword)} type="password" className="mb-4"></Input>
                    <Label>Repite la Contraseña</Label>
                    <Input onChange={handlerChange(setRepeatPassword)} type="password" className="mb-4"></Input>
                </CardContent>
                <CardFooter className="flex flex-col gap-4">
                    <Button onClick={() => handlerSubmit()} className="w-full">Registro</Button>
                    <p className="font-light">Inicia sesion <Link to="/" className="text-blue-700 font-medium">Sign in</Link></p>
                </CardFooter>
            </Card>
        </div>
    )
}