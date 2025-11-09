import type { Contact } from "../types";

const apiURL = "https://api.randomuser.me/";
const seed = "muhammadumarofficial";
const results = "10";

export const getContacts = async () => {
  const url = `${apiURL}?seed=${seed}&results=${results}`;
  const response = await fetch(url);
  const respJson = await response.json();
  return respJson.results as Contact[];
};

export const getContactsById = async (uuid: string) => {
  const contacts = await getContacts();
  return contacts.find((contact) => contact.login.uuid === uuid );
};
