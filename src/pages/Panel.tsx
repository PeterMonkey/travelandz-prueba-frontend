import { useEffect, useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import CardTransfer from "@/components/CardTransfer"
import ComboBox from '@/components/ComboBox'
import CalendarComponent from "@/components/CalendarComponent"

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
]

const url = 'http://localhost:3000/transfer/?ftype=IATA&fcode=PMI&ttype=ATLAS&tcode=265&outbound=2024-08-17T12:15:00&inbound=2024-09-25T20:00:00&adults=2&children=0&infants=0'

export default function Panel() {

    const [paises, setPaises] = useState()

    // peticion al backend: SOLO PRUEBA
    // useEffect(function() {
    //     const countries = async () => {
    //         const response = await axios.get(url, {
    //             headers: {
    //                 'auth-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImViZGM1MGRiLWJhZTItNDY1Yi05ZjBjLWVkYjVhNTkxY2ZmMyIsIm5hbWUiOiJQZWRybyIsImVtYWlsIjoicGVkcm9AZ21haWwuY29tIiwiaWF0IjoxNzA5MjI4NjM2LCJleHAiOjE3MTE3MzQyMzZ9.7MhKzlujbOp6yLEFZHbu1EOpqjRBSH64au-KCQ9Xkeg'
    //             }
    //         })
    //         setPaises(response.data.response.services)
    //     }
    //     countries()
    // },[])

    // console.log(paises)

    return (
        <div className="flex justify-center items-center h-screen">
            <div className=" flex w-[90%] h-[90%]">
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
                    </CardContent>
                </Card>
                <div className="grid grid-cols-1 grid-rows-10 w-3/4">
                    <div className="grid grid-cols-3 grid-rows-2 gap-4 row-span-9 h-[90%]">
                        <CardTransfer data={'hola'}/>
                    </div>
                    <div className="grid items-center justify-center row-start-10">
                        Paginacion
                    </div>
                </div>
            </div>
        </div>
    )
}