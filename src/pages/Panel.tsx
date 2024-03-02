import Filter from "@/components/Filter"
import ViewPanel from "@/components/ViewPanel"

export default function Panel() {

    return (
        <div className="flex justify-center items-center h-screen">
            <div className=" flex w-[90%] h-[90%]">
                <Filter/>
                <ViewPanel/>
            </div>
        </div>
    )
}