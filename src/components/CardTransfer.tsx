import { Card } from "./ui/card"
import SkeletonComponent from "./SkeletonComponent"
import { useSelector } from "react-redux"

export default function CardTransfer({data}) {

    const view = useSelector(state => state.view)
    console.log(view)

    return(
        <Card>
            {data}
        </Card>
    )
}