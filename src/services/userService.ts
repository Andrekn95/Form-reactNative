import { User } from "../components/users/UserForm";

const BASE_URL = "https://nimble-arousal-duplex.ngrok-free.dev";

export const userService = {

  getAll: async () => {
    const res = await fetch(`${BASE_URL}/usuarios`);
    return res.json();
  },

  create: async (user: Omit<User, "id">) => {
    const res = await fetch(`${BASE_URL}/usuarios`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(user),
    });
    return res.json();
  },

  update: async (id: string, user: Omit<User, "id">) => {
    const res = await fetch(`${BASE_URL}/usuarios/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(user),
    });
    return res.json();
  },

  delete: async (id: string) => {
    const res = await fetch(`${BASE_URL}/usuarios/${id}`, {
      method: "DELETE",
    });
    return res.json();
  },

};