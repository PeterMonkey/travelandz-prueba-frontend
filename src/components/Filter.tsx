import { Card, CardContent, CardHeader, CardTitle,CardFooter } from "@/components/ui/card"
import ComboBox from "./ComboBox"
import CalendarComponent from "./CalendarComponent"
import { Input } from "./ui/input"
import { Button } from "./ui/button"

const frameworks = [
    {
      value: "ES",
      label: "España",
    },
    {
      value: "AR",
      label: "Argentina",
    },
]


export default function Filter() {
    return (
        <Card className="w-1/4 h-full mr-2 shadow-[0_3px_10px_rgb(0,0,0,0.2)]">
        <CardHeader>
            <CardTitle>Filtre sus servicios</CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col gap-8">
            <ComboBox text="Pais..." data={frameworks} empty="Pais no encotrado"/>
            <ComboBox text="Destino..." data={frameworks} empty="Destino no encontrado"/>
            <ComboBox text="Terminal..." data={frameworks} empty="Terminal no encontrado"/>
            <CalendarComponent text="Fecha de salida"/>
            <CalendarComponent text="Fecha de llegada"/>
            <Input type="number" placeholder="Adultos"/>
            <Input type="number" placeholder="Niños"/>
            <Input type="number" placeholder="Infantes"/>
        </CardContent>
        <CardFooter className="flex justify-center">
            <Button>Buscar</Button>
        </CardFooter>
    </Card>
    )
}