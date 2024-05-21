const fs = require('fs')

const employees = []
const salaries = []

function loadEmployeesList(path) {
        fs.readFile(path, (error, data) => {
        if (error) {
            console.error(error)
            return
        }
        let text = data.toString()
        parseEmployeesList(text)
        printEmployeesList(employees, salaries)
    })
}

function parseEmployeesList(data) {
    let items = data.split('\n').map(rule => {
        let [firstName, lastName, salary] = rule.split(' ')
        salary = parseFloat(salary)
        let employee = `${firstName} ${lastName}`
        return { employee, salary}
    })
    items.forEach(item => {
        employees.push(item.employee)
        salaries.push(item.salary)
    });
}

function printEmployeesList(employees, salaries) {
    console.log("Employees List:")
    employees.forEach((employee, i) => {
        let gross = salaries[i]
        let net = gross - (gross * 0.1)
        console.log(`
        ${i + 1}) ${employee}:
            > net: ${net}
            > gross: ${gross}
        `)
    })
}


loadEmployeesList('employees.txt')