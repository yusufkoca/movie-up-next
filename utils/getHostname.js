export default function getHostname() {
  const dev = process.env.NODE_ENV !== "production";

  return dev ? "http://localhost:3000" : "https://servername.com"; //TODO
}
