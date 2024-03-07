import { useState, useEffect } from "react"
import { Card } from "./ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
  } from "@/components/ui/popover"
import { useSelector } from "react-redux"
import { fetchReserve } from "@/redux/slice/reserveSlice"
import { useAppDispatch } from "@/redux/store"

export default function CardTransfer({data}) {

    const dataTransfer = {
        direction: data.direction,
        name: data.category.name,
        descriptionFrom: data.pickupInformation.from.description,
        descriotionTo: data.pickupInformation.to.description,
        totalAmount: data.price.totalAmount,
        currency: data.price.currencyId,
        image: data.content.images[0].url,
        rateKey: data.rateKey
    }

    const [name, setName] = useState('')
    const [surname, setSurname] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [rateKey, setRateKey] = useState('')
    const [direction, setDirection] = useState('')

    useEffect(() => {
        setDirection(dataTransfer.direction)
        setRateKey(dataTransfer.rateKey)
    },[dataTransfer.direction, dataTransfer.rateKey])

    const view = useSelector(state => state.view)
    console.log(view)

    const handlerData = (seter) => (e) => {
        seter(e.target.value)
    }

    const body = {
      name,
      surname,
      email,
      phone,
      rateKey,
      direction
    }

    const dispatch = useAppDispatch()

    const handlerConfirm = (body) => {
      dispatch(fetchReserve(body))
    }

    const reserve = useSelector(state => state.reserve)
    console.log(reserve)

    return(
        <Card className="flex items-center justify-center">
            <div className="flex flex-col items-center justify-center border rounded-md h-[95%] w-[95%]">
                <div className="h-1/2 w-5/6">
                    <img src={dataTransfer.image} alt="" />
                </div>
                <div>
                    <p>{dataTransfer.name}</p>
                    <p>{dataTransfer.descriptionFrom}</p>
                    <p>{dataTransfer.descriotionTo}</p>
                    <p>{`${dataTransfer.totalAmount} ${dataTransfer.currency}`}</p>
                </div>
                <Popover>
                    <PopoverTrigger>
                    <Button className="h-6 w-18 text-sm mt-1">Reservar</Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-80">
        <div className="grid gap-4">
          <div className="space-y-2">
            <h4 className="font-medium leading-none">Reservar</h4>
            <p className="text-sm text-muted-foreground">
              Complete los campos solicitados
            </p>
          </div>
          <div className="grid gap-2">
            <div className="grid grid-cols-3 items-center gap-4">
              <Label htmlFor="width">Name</Label>
              <Input
              onChange={handlerData(setName)}
                id="name"
                defaultValue=""
                className="col-span-2 h-8"
              />
            </div>
            <div className="grid grid-cols-3 items-center gap-4">
              <Label htmlFor="maxWidth">Surname</Label>
              <Input
              onChange={handlerData(setSurname)}
                id="surname"
                defaultValue=""
                className="col-span-2 h-8"
              />
            </div>
            <div className="grid grid-cols-3 items-center gap-4">
              <Label htmlFor="height">Email</Label>
              <Input
                onChange={handlerData(setEmail)}
                id="email"
                defaultValue=""
                className="col-span-2 h-8"
              />
            </div>
            <div className="grid grid-cols-3 items-center gap-4">
              <Label htmlFor="maxHeight">Phone</Label>
              <Input
                onChange={handlerData(setPhone)}
                id="phone"
                defaultValue=""
                className="col-span-2 h-8"
              />
            </div>
            <Button onClick={() => handlerConfirm(body)}>Confirmar</Button>
          </div>
        </div>
      </PopoverContent>
                </Popover>
            </div>
        </Card>
    )
}