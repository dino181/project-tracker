import { ArrowBack } from "@mui/icons-material"

function App() {
  const animationDelays = [0, 1.4, 1, 2.2, 0.4]

  return (
    <>
      <div className="flex justify-center gap-16 p-10 bg-[#4f4d46]/60 w-full h-full">
        <div className="flex flex-col gap-4 self-center h-[95%] w-2/12">
          <div className="h-16 w-full px-2 gap-2 justify-between bg-[#4f4d46] flex">
            {Array.from({ length: 5 }).map((_, index) => <div key={`block-${index}`} style={{ animationDelay: animationDelays[index] + "s", animationDuration: "5s" }} className={`self-center h-4/5 w-1/5 bg-[#A3EDED] shadow-black/30 shadow-inner animate-pulse`}></div>
            )}
          </div>

          <div className="w-full h-full flex flex-col bg-[#ede8d0] shadow-black shadow-lg">
            <div className="relative w-full h-8">
              <div className="absolute w-full h-1/2 bg-[#4f4d46]/80">
              </div>
              <div className="absolute flex -left-2 w-1/5 h-full bg-[#4f4d46] [clip-path:polygon(0_0,100%_0,50%_100%,0_100%)]">
              </div>

              <div className="absolute flex w-1/5 -right-2 h-full bg-[#4f4d46] [clip-path:polygon(0_0,100%_0,100%_100%,50%_100%)]">
              </div>
            </div>

            <div className="flex w-4/5 h-12 px-5 mt-5 bg-[#c9c5b1] shadow-sm shadow-black">
              <p className="w-full self-center text-end h-fit text-2xl "> Status </p>
            </div>
            <div className="flex justify-end w-4/5">
              <div className="flex flex-col px-5 py-2 bg-[#4f4d46] w-4/5 shadow-sm shadow-black">
                <p className="text-white"> Link: </p>
                <p className="text-white"> Nov - Dec </p>
                <p className="text-white"> ***** </p>
              </div>
            </div>

            <div className="flex w-4/5 h-12 px-5 mt-5 bg-[#c9c5b1] shadow-sm shadow-black">
              <p className="w-full self-center text-end h-fit text-2xl "> Stack </p>
            </div>
            <div className="flex justify-end w-4/5">
              <div className="flex flex-col px-5 py-2 bg-[#4f4d46] w-4/5 shadow-sm shadow-black">
                <p className="text-white"> React </p>
                <p className="text-white"> Strapi </p>
              </div>
            </div>

          </div>



        </div>

        <div className="relative self-center flex h-[95%] w-5/6 bg-[#ede8d0] shadow-lg shadow-black">
          <div className="relative w-full h-16">

            <div className="absolute w-full h-1/2 bg-[#4f4d46]/80">
            </div>
            <div className="absolute flex -left-5 w-1/2 h-full bg-[#4f4d46] [clip-path:polygon(0_0,100%_0,92%_100%,0_100%)]">
              <ArrowBack sx={{ color: "white" }} className="ml-3 self-center " />
              <p className="self-center px-5 text-4xl text-white"> Project Title </p>
            </div>

            <div className="absolute flex w-[5%] -right-2 h-3/4 bg-[#4f4d46] [clip-path:polygon(0_0,100%_0,100%_100%,50%_100%)]">
            </div>
          </div>

        </div>
      </div >
    </>
  )
}

export default App
