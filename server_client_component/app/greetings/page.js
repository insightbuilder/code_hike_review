'use client'
import Greeting from './Greeting'

export default function Page() {
    return (
    <main className="p-6 space-y-4">
        <Greeting name="super" age={5}/>
    </main>
    )
}