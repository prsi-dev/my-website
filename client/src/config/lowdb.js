import low from "lowdb";
import LocalStorage from "lowdb/adapters/LocalStorage";

const adapter = new LocalStorage("db");
const db = low(adapter);

db.defaults({
  tasks: [
    {
      id: "oihoaiyue4083",
      name: "Go shopping",
      category: "Needs",
      description: "Coffee, Milk and Bread",
    },
  ],
  completed: [
    {
      id: "981029zuqjs",
      name: "Develop and deploy Portfolio",
      category: "Trabajo",
      description: "Developed on ReactJs & NodeJs, deployed in Heroku",
    },
  ],
}).write();

export default db;
