import "./styles.css";
import { initiateApp } from "./dom.js";

initiateApp();

console.log("hello");

import { format, addDays } from "date-fns";

const today = new Date();
const tomorrow = addDays(today, 1);
console.log(`Today is ${format(today, "yyyy-MM-dd")}`);
console.log(`Tomorrow will be ${format(tomorrow, "yyyy-MM-dd")}`);
