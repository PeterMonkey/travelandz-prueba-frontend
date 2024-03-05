import { useEffect, useState } from "react"
import { Card, CardContent, CardHeader, CardTitle,CardFooter } from "@/components/ui/card"
import ComboBox from "./ComboBox"
import CalendarComponent from "./CalendarComponent"
import { Input } from "./ui/input"
import { Button } from "./ui/button"
import axios from 'axios'
import { useAppDispatch } from "@/redux/store"
import { fetchDestiny } from "@/redux/slice/destinySlice"
import { fetchTerminal } from "@/redux/slice/terminalSlice"

import { useSelector } from "react-redux"


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

    const destiny = useSelector(state => state.destiny)
    console.log(destiny)

    const terminal = useSelector(state => state.terminal)
    console.log(terminal)

    const dispatch = useAppDispatch()

    const destinies = (code: string) => {
        dispatch(fetchDestiny(code))
    }

    const terminals = (code:string) => {
        dispatch(fetchTerminal(code))
    }

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
            <ComboBox text="Pais..." data={countries} empty="Pais no encotrado" dispatch={destinies}/>
            <ComboBox text="Destino..." data={destiny.data} empty="Destino no encontrado" dispatch={terminals}/>
            <ComboBox text="Terminal..." data={terminal.data} empty="Terminal no encontrado"/>
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