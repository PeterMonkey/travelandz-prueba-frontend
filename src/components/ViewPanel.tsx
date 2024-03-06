import CardTransfer from "./CardTransfer";
import PaginationComponent from "./PaginationComponent";

export default function ViewPanel() {
    return (
        <div className="grid grid-cols-1 grid-rows-10 w-3/4">
        <div className="grid grid-cols-3 grid-rows-2 gap-4 row-span-9 h-[90%]">
            <CardTransfer data={'hola'}/>
        </div>
        <div className="grid items-center justify-center row-start-10">
            <PaginationComponent/>
        </div>
    </div>
    )
}