export default async function page() {
  return (
    <>
    <div className=" z-[-1] absolute w-screen h-screen bg-cover blur-sm bg-[url('../public/background-forest.jpeg')]"></div>
    <div className=" mx-5 space-y-40 text-9xl hover:*:blur-sm *:inline-block *:&nbsp;">
      {/* hover:*:blur-sm applys blur-sm to children, not the parent div, and for each child individually, nice */}
        <h1>Enzzzooo's</h1>
        <h1>Portfolio</h1><br />
        <p>A</p>
        <p>portfolio</p>
        <p>of</p>
        <p>my</p>
        <p>projects</p>
        <p>and</p>
        <p>website</p>
        <p>designs</p>
      </div>
    </>
  )
}
