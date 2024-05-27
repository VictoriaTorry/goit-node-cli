import { program } from "commander";
import * as contactService from "./contacts.js"
program
  .option("-a, --action <type>", "choose action")
  .option("-i, --id <type>", "user id")
  .option("-n, --name <type>", "user name")
  .option("-e, --email <type>", "user email")
  .option("-p, --phone <type>", "user phone");

program.parse();

const options = program.opts();

async function invokeAction({ action, id, name, email, phone }) {
  switch (action) {
    case "list":
      const allContacts = await contactService.listContacts()
      console.log(allContacts)
      break;

    case "get":
      const oneContactById = await contactService.getContactById(id);
      console.log(oneContactById);
      break;

    case "add":
      const addNewContact = await contactService.addContact(name, email, phone);
      console.log(addNewContact)
      break;

    case "remove":
      const removeContact = await contactService.removeContact(id);
      console.log(removeContact)
      break;

    default:
      console.warn("\x1B[31m Unknown action type!");
  }
}

invokeAction(options);
