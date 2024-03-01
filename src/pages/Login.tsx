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
                    <Input className="mb-4"></Input>
                    <Label>Password</Label>
                    <Input></Input>
                </CardContent>
                <CardFooter className="flex flex-col gap-4">
                    <Button className="w-full">Login</Button>
                    <p className="font-light">Registrate: <a href="#">Sign up</a></p>
                </CardFooter>
            </Card>
        </div>
    )
}