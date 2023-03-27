import { ImageResponse } from "@vercel/og";

export const runtime = "edge";

export async function GET(request: Request) {
  const url = new URL(request.url);
  const q = url.searchParams.get("q");

  return new ImageResponse(
    (
      <div
        style={{
          background: "white",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          textAlign: "center",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <h1
          style={{
            fontSize: 60,
            fontWeight: "bolder",
          }}
        >
          www.robot-legal.com
        </h1>
        <h2
          style={{
            fontSize: 32,
          }}
        >
          {q}
        </h2>
      </div>
    ),
    {
      width: 1200,
      height: 600,
    }
  );
}
