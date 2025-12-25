"use client";

import { fetchOnServer } from "@/app/actions";

/** Add your relevant code here for the issue to reproduce */
export default function Home() {
  return <button onClick={() => fetchOnServer()}>Run server-side fetch</button>;
}
