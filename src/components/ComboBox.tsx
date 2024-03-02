import { useEffect, useState } from "react"
import { CaretSortIcon, CheckIcon } from "@radix-ui/react-icons"
 
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "@/components/ui/command"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"

  type Data = {
    value: string,
    label: string
  }

  type Props = {
    data: Data[],
    text: string,
    empty: string,
    enable: boolean
  }

export default function ComboBox({data, text, empty, enable}: Props) {
    const [open, setOpen] = useState(false)
    const [value, setValue] = useState("")
    const [enabled, setEnabled] = useState("")

    useEffect(() => {
      if (enable) {
        setEnabled("opacity-20 pointer-events-none")
      }
      setEnabled("")
    },[enable])

    return (
        <Popover open={open} onOpenChange={setOpen}>
          <PopoverTrigger asChild>
            <Button
              variant="outline"
              role="combobox"
              aria-expanded={open}
              className={cn("w-[200px] justify-between", enabled)} //opacity-20 pointer-events-none: para deshabilitar
            >
              {value
                ? data.find((element) => element.value === value)?.label
                : text}
              <CaretSortIcon className="ml-2 h-4 w-4 shrink-0 opacity-50" />
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-[200px] p-0">
            <Command>
              <CommandInput placeholder={text} className="h-9" />
              <CommandEmpty>{empty}</CommandEmpty>
              <CommandGroup className="h-72">
                {data.map((element) => (
                  <CommandItem
                    key={element.value}
                    value={element.value}
                    onSelect={(currentValue) => {
                      setValue(currentValue === value ? "" : currentValue)
                      setOpen(false)
                    }}
                  >
                    {element.label}
                    <CheckIcon
                      className={cn(
                        "ml-auto h-4 w-4",
                        value === element.value ? "opacity-100" : "opacity-0"
                      )}
                    />
                  </CommandItem>
                ))}
              </CommandGroup>
            </Command>
          </PopoverContent>
        </Popover>
      )
}