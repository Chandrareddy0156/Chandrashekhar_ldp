// import { MOCK_USERS} from "./mockUsers";
// import type{  MockUser } from "./mockUsers";

// const AUTH_KEY = "authUser";

// export const signup = (
//   email: string,
//   password: string,
//   name: string
// ) => {
//   const exists = MOCK_USERS.some(u => u.email === email);

//   if (exists) {
//     throw new Error("User already exists");
//   }

//   const newUser: MockUser = {
//     id: Date.now(),
//     email,
//     password,
//     name,
//     courtSearches: [],
//   };

//   MOCK_USERS.push(newUser);
//   localStorage.setItem(AUTH_KEY, JSON.stringify(newUser));

//   return newUser;
// };

// export const login = (email: string, password: string) => {
//   const user = MOCK_USERS.find(
//     u => u.email === email && u.password === password
//   );

//   if (!user) {
//     throw new Error("Invalid credentials");
//   }

//   localStorage.setItem(AUTH_KEY, JSON.stringify(user));
//   return user;
// };

// export const logout = () => {
//   localStorage.removeItem(AUTH_KEY);
// };

// export const getAuthUser = (): MockUser | null => {
//   return JSON.parse(localStorage.getItem(AUTH_KEY) || "null");
// };
