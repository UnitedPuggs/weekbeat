import Link from "next/link"

export default function Nav() {

    return (
        <nav className="flex justify-start flex-row border-b-2 border-black">
            <div className="w-full m-2">
                <Link href="/dashboard" className="nav-btn">Dashboard</Link>
                <Link href="/dashboard/people" className="nav-btn">People</Link>
            </div>
        </nav>
    )
}