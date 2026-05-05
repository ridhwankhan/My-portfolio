import { promises as fs } from "fs";
import path from "path";

export async function GET() {
  const filePath = path.join(process.cwd(), "Resume_Ridhwan.tex");
  const content = await fs.readFile(filePath, "utf-8");

  return new Response(content, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Content-Disposition": 'attachment; filename="Resume_Ridhwan.tex"'
    }
  });
}
