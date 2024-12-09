import StudioCard from "@/components/StudioCard";
import Link from "next/link";

 

export default function Home() {
  return (
    <div className="flex items-center justify-center flex-col px-10">
      <div className="flex gap-8">
        <div className="w-20">Studio</div>
        <div className="w-20">Cost{"/"}Lead</div>
        <div className="w-20">Churn</div>
      </div>

      <div className="flex gap-8">
        <div className="w-20">Sample</div>
        <div className="w-20 text-center">16</div>
        <div className="w-20 text-center">17</div>
      </div>

      <div>
        <Link href={"/addStudio"}>
          Add a studio
        </Link>
      </div>

      
      {/* <StudioCard /> */}
    </div>
  )
}
