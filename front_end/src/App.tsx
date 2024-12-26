/*
  * [x] Title
  * [x] date range
  * [x] goal
  * [x] description
  * [ ] rating
  * [x] stack
  * [x] link
  * [x] screenshots
  * [x] videos
  */


function App() {
  return (
    <>
      <div className="flex flex-col gap-3 p-5 bg-white w-3/5 h-full">

        <div>
          <h1 className="text-6xl"> Sample Project </h1>
          <p className="italic"> Nov 2024 - Nov 2025 </p>
          <p> * * * * * </p>
        </div>

        <hr />

        <div>
          <h2 className="text-3xl"> Project Goal </h2>
          <p> some explanation </p>
        </div>

        <div>
          <h2 className="text-3xl"> Tech Stack </h2>
          <ul>
            <li> React </li>
            <li> Strapi </li>
          </ul>
        </div>

        <div>
          <h2 className="text-3xl"> Description </h2>
          <p> some description </p>
        </div>


        <div className="self-center flex flex-col w-1/2">
          <h2 className="self-center text-3xl"> Screenshots </h2>
          <div className="aspect-video w-full bg-red-500">
          </div>
        </div>

        <hr />

        <div>
          <a href="https://github.com" target="_blank"> Project Link </a>
        </div>

      </div>
    </>
  )
}

export default App
