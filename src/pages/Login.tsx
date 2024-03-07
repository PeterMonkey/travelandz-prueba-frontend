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

export default function Login() {

    const { toast } = useToast()

    const navigate = useNavigate()

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleChange = (seter:(value: string) => void) => (e:ChangeEvent<HTMLInputElement>) => {
        seter(e.target.value)
    }

    const handlerSubmit = async () => {
        const response = await axios.post('http://localhost:3000/login', {
            email,
            password
        })
        if(response){
            localStorage.setItem('token', response.data.token)
            setTimeout(() => navigate('/panel'), 2000)
        }else {
            toast({
                variant: "destructive",
                title: "Datos incorrectos",
                description: "Los datos que introdujo son erroneos",
                action: <ToastAction altText="Intentar de nuevo">Try again</ToastAction>,
              })
        }
    }

    return (
        <div className="flex items-center justify-center h-screen">
            <Card className="w-96 h-96 shadow-[0_3px_10px_rgb(0,0,0,0.2)]">
                <CardHeader className="flex items-center mb-4">
                    <CardTitle>Iniciar sesion</CardTitle>
                </CardHeader>
                <CardContent >
                    <Label>Email</Label>
                    <Input onChange={handleChange(setEmail)} type="email" className="mb-4"></Input>
                    <Label>Password</Label>
                    <Input onChange={handleChange(setPassword)} type="password"></Input>
                </CardContent>
                <CardFooter className="flex flex-col gap-4">
                    <Button onClick={() => handlerSubmit()} className="w-full">Login</Button>
                    <p className="font-light">Registrate <Link to='/register' className="text-blue-700 font-medium">Sign up</Link></p>
                </CardFooter>
            </Card>
        </div>
    )
}