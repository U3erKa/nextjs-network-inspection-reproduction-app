"use server";

export async function fetchOnServer() {
  const response = await fetch("https://example.com");
  const text = await response.text();
  return text;
}
