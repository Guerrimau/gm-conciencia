import { google } from "googleapis";

export async function POST(request) {
  const { name, email, cel } = await request.json();

  const date = new Date().toLocaleDateString();

  const values = [[name, email, cel, date]];

  const range = "clients!A:C";

  const auth = await google.auth.getClient({
    scopes: ["https://www.googleapis.com/auth/spreadsheets"],
  });

  const sheets = google.sheets({ version: "v4", auth });

  const res = await sheets.spreadsheets.values.append({
    spreadsheetId: process.env.SHEET_ID,
    range: range,
    valueInputOption: "RAW",
    requestBody: { values },
  });

  return Response.json({ msg: "SUCCESS" });
}
