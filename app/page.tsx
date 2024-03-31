import { createClient } from "@/utils/supabase/server";

export default async function Index() {
  const supabase = createClient();
  return (
    <>
    <h1>Enzzzooo's Portfolio</h1>
    <p>A portfolio of my projects and website designs</p>
    <img src=""/>
    </>
  )
}
