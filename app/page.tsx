export default async function page() {
  return (
    <>
    <div className=" z-[-1] absolute w-screen h-screen bg-cover blur-sm bg-[url('../public/background-forest.jpeg')]"></div>
    <div className="flex flex-col items-center space-y-40 text-9xl [&>*]:hover:blur-sm ">
      <h1>Enzzzooo's Portfolio</h1>
      <p>A portfolio of my projects and website designs</p>
    </div>
    </>
  )
}
