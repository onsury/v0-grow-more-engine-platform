const BASE_URL = process.env.NEXT_PUBLIC_BASEROW_TABLE_URL;
const API_TOKEN = process.env.NEXT_PUBLIC_BASEROW_TOKEN;

export async function fetchData() {
  const res = await fetch(BASE_URL, {
    headers: {
      "Authorization": API_TOKEN
    }
  });
  return res.json();
}

export async function postData(data) {
  const res = await fetch(BASE_URL, {
    method: "POST",
    headers: {
      "Authorization": API_TOKEN,
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  });
  return res.json();
}