import { useEffect, useState } from "react"
import { Card, CardContent, CardHeader, CardTitle,CardFooter } from "@/components/ui/card"
import ComboBox from "./ComboBox"
import CalendarComponent from "./CalendarComponent"
import { Input } from "./ui/input"
import { Button } from "./ui/button"
import axios from 'axios'

const frameworks = [
    {
      value: "ES",
      label: "España",
    },
    {
      value: "AR",
      label: "Argentina",
    },
    {
        value: "A",
        label: "Arg"
      },
      {
        value: "ARdfs",
        label: "Argenna",
      },
      {
        value: "ARvf",
        label: "Arntina",
      }
]

type Country ={
    code: string,
    name: string
}

type Obj = Country[]

type Data = {
    value: string, 
    label: string
}

const format = (obj:Obj) => {
    const ret:Data[] = []
    obj.map(i => {
        ret.push({value: i.code, label: i.name})
    })
    return ret
}


export default function Filter() {

    const [countries, setCountries] = useState<Data[]>([{value: '', label: ''}])

    useEffect(() => {
        const getCountries = async () => {
            try {
                const response = await axios.get('http://localhost:3000/countries')
                const data = format(response.data.response)
                setCountries(data)
            } catch (error) {
                console.error(error)
            }
        }
        getCountries()
    },[])

    console.log(countries)

    return (
        <Card className="w-1/4 h-full mr-2 shadow-[0_3px_10px_rgb(0,0,0,0.2)]">
        <CardHeader>
            <CardTitle>Filtre sus servicios</CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col gap-8">
            <ComboBox text="Pais..." data={frameworks} empty="Pais no encotrado"/>
            <ComboBox text="Destino..." data={countries} empty="Destino no encontrado"/>
            <ComboBox text="Terminal..." data={countries} empty="Terminal no encontrado"/>
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