import Link from "next/link"

export default function Nav() {

    return (
        <nav className="flex justify-start flex-row border-b-2 border-gray-200 shadow-sm">
            <div className="w-full m-2">
                <Link href="/dashboard" className="nav-btn">Dashboard</Link>
                <Link href="/dashboard/people" className="nav-btn">People</Link>
                <Link href="/dashboard/vote" className="nav-btn">Vote</Link>
            </div>
        </nav>
    )
}