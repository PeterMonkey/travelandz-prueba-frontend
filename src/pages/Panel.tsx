import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import CardTransfer from "@/components/CardTransfer"
import ComboBox from '@/components/ComboBox'

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

export default function Panel() {
    return (
        <div className="flex justify-center items-center h-screen">
            <div className=" flex w-[90%] h-[90%]">
                <Card className="w-1/4 h-full mr-2 shadow-[0_3px_10px_rgb(0,0,0,0.2)]">
                    <CardHeader>
                        <CardTitle>Filtre sus servicios</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <ComboBox text="Pais..." data={frameworks}/>
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