"use client"

import { useState } from "react"

export default function Dashboard() {
  const [url, setUrl] = useState("")

  async function criar() {
    await fetch("/api/link", {
      method: "POST",
      body: JSON.stringify({ url })
    })

    alert("Criado")
  }

  return (
    <div style={{ padding: 40 }}>
      <h1>Dashboard</h1>

      <input onChange={(e) => setUrl(e.target.value)} />
      <button onClick={criar}>Criar link</button>
    </div>
  )
}
