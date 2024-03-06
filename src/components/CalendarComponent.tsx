import { useState } from "react"
import { CalendarIcon } from "@radix-ui/react-icons"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { formatDate } from "@/lib/utils"

type Props = {
    text: string,
    dispatch: (p:string | undefined) => void
}

export default function CalendarComponent({text, dispatch}:Props) {


    const [date, setDate] = useState<Date | undefined>()
    const eventHandler = (date: Date | undefined) => {
        setDate(date)
        dispatch(formatDate(date))
    }
    return (
        <Popover>
            <PopoverTrigger asChild>
                <Button variant='outline'>
                    {date?.toDateString() ? (formatDate(date)) : text}
                <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                </Button>     
            </PopoverTrigger>
            <PopoverContent>
                <Calendar
                mode="single"
                selected={date}
                onSelect={eventHandler}
                className="rounded-md border shadow"
                />
            </PopoverContent>
        </Popover>
    )
}