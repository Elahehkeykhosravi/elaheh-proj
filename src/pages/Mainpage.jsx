
import { Sidebar } from "../components/Sidebar"
import { DayAndDgree } from "../components/dayanddgree"
import { SetDaysOfWeek } from "../components/setDaysOfWeek"
import { Highlight } from "../components/Highlight"
export const Mainpage = () => {
  return (
    <>




      <div className="flex">
        <Sidebar />
        <div className=" grow">
          <DayAndDgree />
          {<SetDaysOfWeek />}
          <Highlight />
        </div>
      </div>


    </>
  )
}

export default Mainpage





