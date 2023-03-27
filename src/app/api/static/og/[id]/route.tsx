import { Inquiry, PrismaClient } from "@prisma/client";
import { ImageResponse } from "@vercel/og";

// export const runtime = "edge";
const prisma = new PrismaClient();

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  const { id } = params;
  const inquiry = (await prisma.inquiry.findUnique({
    where: { id: parseInt(id) },
  })) as Inquiry;

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
          {inquiry.message}
        </h2>
      </div>
    ),
    {
      width: 1200,
      height: 600,
    }
  );
}
