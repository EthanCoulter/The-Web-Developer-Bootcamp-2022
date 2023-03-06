import {franc, francAll} from "franc";
import { createRequire } from "module";
const require = createRequire(import.meta.url)
const langs = require("langs");
const color = require("color");


const userText = process.argv[2]


const code = franc(userText)

if (code === "und") {
    console.log("Undefined language, please use more text")
} else {
    const newLang = langs.where('3', code)
    console.log((newLang.name))
}