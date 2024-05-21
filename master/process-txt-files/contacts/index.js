// Conectăm modulul pentru operare cu sistemul de fișiere
const fs = require("fs")

// Două variabile "imutabile" / constante de tip Array pentru a stoca datele
const phones = []
const emails = []


function loadContactsList(path) {
    fs.readFile(path, (error, data) => {
        if (error) {
            console.error(error)
            return
        }
        let str = data.toString()
        parseContactsList(str)
        printContactsPhoneList()
        printContactsEmailList()
    })
}

function parseContactsList(data) {
    let contacts = data.split('\n').map(rule => {
        let [phone, email] = rule.split(' ')
        let prefix = phone.substring(1, 4)
        let number = phone.substring(5)
        phone = `+(${prefix})/${number}`
        return { phone, email }
    })

    contacts.forEach(contact => {
        phones.push(contact.phone)
        emails.push(contact.email)
    })
}

function printContactsPhoneList() {
    console.log("Phone numbers:")
    phones.forEach((phone, index) => {
        console.log(`${index + 1}) ${phone}`)
    })
}

function printContactsEmailList() {
    console.log("\nEmails:")
    emails.forEach((email, index) => {
        console.log(`${index + 1}) ${email}`)
    })
}

loadContactsList("original.emails.list.txt")
