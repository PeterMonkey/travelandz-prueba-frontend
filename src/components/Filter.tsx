import { ChangeEvent, SetStateAction, useEffect, useState } from "react"
import { Card, CardContent, CardHeader, CardTitle,CardFooter } from "@/components/ui/card"
import ComboBox from "./ComboBox"
import CalendarComponent from "./CalendarComponent"
import { Input } from "./ui/input"
import { Button } from "./ui/button"
import axios from 'axios'
import { useAppDispatch } from "@/redux/store"
import { fetchDestiny, countryCode } from "@/redux/slice/destinySlice"
import { fetchTerminal, terminalCode } from "@/redux/slice/terminalSlice"
import { fetchHotel, getHotel } from '@/redux/slice/hotelSlice'
import { fechaLlegada, fechaSalida } from "@/redux/slice/dateSlice"

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

    const [countries, setCountries] = useState<Data[]>([{value: '', label: ''}])
    const [adult, setAdult] = useState(0)
    const [children, setChildrem] = useState(0)
    const [infant, setInfant] = useState(0)

    const passengersHandler = (seter) => (e:ChangeEvent<HTMLInputElement>) => {
        seter(e.target.value)
    }

    const destiny = useSelector(state => state.destiny)
    console.log(destiny)

    const terminal = useSelector(state => state.terminal)
    console.log(terminal)

    const hotel = useSelector(state => state.hotel)
    console.log(hotel)

    const fecha = useSelector(state => state.date)
    console.log(fecha)


    const dispatch = useAppDispatch()

    const destinies = (code: string) => {
        dispatch(fetchDestiny(code))
        dispatch(countryCode(code))
    }

    const terminals = (code:string) => {
        dispatch(fetchTerminal(code))
        dispatch(terminalCode(code))
    }

    const llegadaDispatch = (fecha: string | undefined) => {
        dispatch(fechaLlegada(fecha))
    }

    const salidaDispatch = (fecha: string | undefined) => {
        dispatch(fechaSalida(fecha))
    }

    const codeHotel = (code: string) => {
        dispatch(getHotel(code))
    }

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

    useEffect(() => {
        if(destiny.data.length > 0){
            dispatch(fetchHotel({countryCode: destiny.country.toUpperCase(), destinyCode: terminal.destiny.toUpperCase()}))
        }
    },[destiny, dispatch, terminal])

    const transferData = {
        ftype: 'IATA',
        fcode: terminal.destiny,
        ttype: 'ATLAS',
        tcode: hotel.hotel,
        outbound: fecha.salida,
        inbound: fecha.llegada,
        adults: adult,
        children: children,
        infants: infant
    }

    console.log(transferData)

    return (
        <Card className="w-1/4 h-full mr-2 shadow-[0_3px_10px_rgb(0,0,0,0.2)]">
        <CardHeader>
            <CardTitle>Filtre sus servicios</CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col gap-5">
            <ComboBox text="Pais..." data={countries} empty="Pais no encotrado" dispatch={destinies}/>
            <ComboBox text="Destino..." data={destiny.data} empty="Destino no encontrado" dispatch={terminals}/>
            <ComboBox text="Desde" data={terminal.data == undefined ? [] : terminal.data} empty="Terminal no encontrado" />
            <ComboBox text="Hasta..." data={hotel.data} empty="Hotel no encontrado" dispatch={codeHotel}/>
            <CalendarComponent text="Fecha de salida" dispatch={salidaDispatch}/>
            <CalendarComponent text="Fecha de llegada" dispatch={llegadaDispatch}/>
            <Input onChange={passengersHandler(setAdult)} type="number" placeholder="Adultos"/>
            <Input onChange={passengersHandler(setChildrem)} type="number" placeholder="Niños"/>
            <Input onChange={passengersHandler(setInfant)} type="number" placeholder="Infantes"/>
        </CardContent>
        <CardFooter className="flex justify-center">
            <Button>Buscar</Button>
        </CardFooter>
    </Card>
    )
}