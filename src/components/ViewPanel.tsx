import CardTransfer from "./CardTransfer";
import PaginationComponent from "./PaginationComponent";
import { useSelector } from "react-redux";
import { Card } from "./ui/card";
import SkeletonComponent from "./SkeletonComponent";

export default function ViewPanel() {

    const view = useSelector(state => state.view)
    console.log(view)

    //const arr = [1,2,3,4,5,6]
    const transferData = view
    console.log(transferData.data.response)

    return (
        <div className="grid grid-cols-1 grid-rows-10 w-3/4">
        <div className="grid grid-cols-3 grid-rows-2 gap-4 row-span-9 h-[90%]">
            {view.status === true ? 
            transferData.data.response.slice(0, 6).map((data) => 
                <CardTransfer key={data.id} data={data}/>
            )
            :
            view.loading === true ? <Card><SkeletonComponent/></Card> : <span></span>
            }
        </div>
        <div className="grid items-center justify-center row-start-10">
            <PaginationComponent/>
        </div>
    </div>
    )
}