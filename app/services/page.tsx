import { useRouter } from "next/navigation"

export default function AboutPage() {
  //redirect to home
  const router = useRouter()
  router.replace("/")
  return <div>services page</div>
}
