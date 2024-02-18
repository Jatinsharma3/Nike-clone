import { bigShoe1 } from "../assets/images"
import { bigShoe2 } from "../assets/images"
import { bigShoe3 } from "../assets/images"
const PopularProducts = () => {
  return (
    <main className="flex justify-between my-[-50px] bg-orange-200 rounded-xl shadow-slate-400 shadow-lg">
    <div className=" text-4xl text-yellow-900 "><img src={bigShoe2} alt="Logo" width={300} height={600} /></div>
    <img src={bigShoe1} alt="Logo" width={300} height={600}  />
    <img src={bigShoe3} alt="Logo" width={300} height={600}  />
    </main>
  )
}

export default PopularProducts