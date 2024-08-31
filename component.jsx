/**
 * v0 by Vercel.
 * @see https://v0.dev/t/Gqtx2lUNQOR
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import Link from "next/link"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"

export default function Component() {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <header className="bg-primary text-primary-foreground py-4 px-6">
        <div className="container mx-auto flex items-center justify-between">
          <h1 className="text-2xl font-bold">Student Complaints</h1>
          <nav>
            <ul className="flex items-center space-x-4">
              <li>
                <Link href="#" className="hover:underline" prefetch={false}>
                  Home
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:underline" prefetch={false}>
                  About
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:underline" prefetch={false}>
                  Contact
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>
      <main className="flex-1 py-12">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl font-bold mb-6">Submit a Complaint</h2>
            <form className="space-y-4">
              <div>
                <Label htmlFor="name">Name</Label>
                <Input id="name" placeholder="Enter your name" />
              </div>
              <div>
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="Enter your email" />
              </div>
              <div>
                <Label htmlFor="complaint">Complaint</Label>
                <Textarea id="complaint" placeholder="Describe your complaint" className="min-h-[150px]" />
              </div>
              <div>
                <Label htmlFor="documents">Supporting Documents</Label>
                <Input id="documents" type="file" multiple />
              </div>
              <Button type="submit" className="w-full">
                Submit Complaint
              </Button>
            </form>
          </div>
          <div>
            <h2 className="text-2xl font-bold mb-6">Previous Complaints</h2>
            <div className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>Broken Printer in Library</CardTitle>
                  <CardDescription>
                    <div className="flex items-center space-x-2">
                      <span>Submitted by: John Doe</span>
                      <span className="text-green-500">Resolved</span>
                    </div>
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p>
                    The printer in the library has been broken for over a week. I need to print some important documents
                    and this is causing me a lot of inconvenience.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Unclean Dorm Rooms</CardTitle>
                  <CardDescription>
                    <div className="flex items-center space-x-2">
                      <span>Submitted by: Jane Smith</span>
                      <span className="text-red-500">Open</span>
                    </div>
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p>
                    The dorm rooms are not being cleaned properly. There is dust and grime everywhere, and it's
                    affecting my ability to study.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Slow Internet Connection</CardTitle>
                  <CardDescription>
                    <div className="flex items-center space-x-2">
                      <span>Submitted by: Michael Johnson</span>
                      <span className="text-red-500">Open</span>
                    </div>
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p>
                    The internet connection in the dorms is extremely slow and unreliable. It's making it difficult to
                    complete my online assignments.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>
      <footer className="bg-muted text-muted-foreground py-6">
        <div className="container mx-auto text-center text-sm">
          &copy; 2024 Student Complaints. All rights reserved.
        </div>
      </footer>
    </div>
  )
}
