const BASE_URL = "http://localhost:5000";

const headers = {
  "Content-Type": "application/json",
  "ngrok-skip-browser-warning": "true",
};

export const userService = {

  getAll: async () => {
    const res = await fetch(`${BASE_URL}/usuarios`, { headers });
    return res.json();
  },

  create: async (user: any) => {
    const res = await fetch(`${BASE_URL}/usuarios`, {
      method: "POST",
      headers,
      body: JSON.stringify(user),
    });
    return res.json();
  },

  update: async (id: string, user: any) => {
    const res = await fetch(`${BASE_URL}/usuarios/${id}`, {
      method: "PUT",
      headers,
      body: JSON.stringify(user),
    });
    return res.json();
  },

  delete: async (id: string) => {
    const res = await fetch(`${BASE_URL}/usuarios/${id}`, {
      method: "DELETE",
      headers,
    });
    return res.json();
  },

};