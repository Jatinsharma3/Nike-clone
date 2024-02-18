import { shoe4 } from "../assets/images"
import { shoe5 } from "../assets/images"
import { shoe6 } from "../assets/images"
import { shoe7 } from "../assets/images"
import { shoe8 } from "../assets/images"
const SuperQuality = () => {
  return (
    <main className="bg-[#C1C4DE] h-[300px] ">
    <div className="flex justify-evenly space-x-5 px-5 py-5 mt-[-80px] ">
      <img src={shoe4} alt="Logo" width={300} height={500}/>
      <img src={shoe5} alt="Logo" width={300} height={500}/>
      <img src={shoe6} alt="Logo" width={300} height={500} />
      <img src={shoe7} alt="Logo" width={300} height={500} />
      <img src={shoe8} alt="Logo" width={300} height={500} />
    </div>
    </main>
  )
}

export default SuperQuality