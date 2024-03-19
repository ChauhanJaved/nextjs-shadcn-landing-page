import { Button } from "@/components/ui/button";
import { Mail } from "lucide-react"
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Button>Button</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="destructive">Destructive</Button>
      <Button variant="outline">Outline</Button>
      <Button variant="ghost">Ghost</Button>
      <Button>
        <Mail className="mr-2 h-4 w-4" /> Login with Email
    </Button>
    </main>
  );
}
