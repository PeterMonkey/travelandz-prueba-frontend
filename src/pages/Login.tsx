import { Link } from "react-router-dom"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@radix-ui/react-label"

export default function Login() {
    return (
        <div className="flex items-center justify-center h-screen">
            <Card className="w-96 h-96 shadow-[0_3px_10px_rgb(0,0,0,0.2)]">
                <CardHeader className="flex items-center mb-4">
                    <CardTitle>Iniciar sesion</CardTitle>
                </CardHeader>
                <CardContent >
                    <Label>Email</Label>
                    <Input type="email" className="mb-4"></Input>
                    <Label>Password</Label>
                    <Input type="password"></Input>
                </CardContent>
                <CardFooter className="flex flex-col gap-4">
                    <Button className="w-full">Login</Button>
                    <p className="font-light">Registrate <Link to='/register' className="text-blue-700 font-medium">Sign up</Link></p>
                </CardFooter>
            </Card>
        </div>
    )
}