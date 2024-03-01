import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@radix-ui/react-label"

export default function Register() {
    return (
        <div className="flex items-center justify-center h-screen">
            <Card className="w-96 h-4/6 shadow-[0_3px_10px_rgb(0,0,0,0.2)]">
                <CardHeader className=" flex items-center">
                    <CardTitle>Registro</CardTitle>
                </CardHeader>
                <CardContent>
                    <Label>Nombre</Label>
                    <Input className="mb-6"></Input>
                    <Label>Email</Label>
                    <Input className="mb-6"></Input>
                    <Label>Contraseña</Label>
                    <Input className="mb-6"></Input>
                    <Label>Repite la Contraseña</Label>
                    <Input className="mb-6"></Input>
                </CardContent>
                <CardFooter className="flex flex-col gap-4">
                    <Button className="w-full">Registro</Button>
                    <p className="font-light">Inicia sesion <a href="#" className="text-blue-700 font-medium">Sign in</a></p>
                </CardFooter>
            </Card>
        </div>
    )
}