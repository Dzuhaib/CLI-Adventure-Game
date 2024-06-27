import inquirer from "inquirer";
class Player {
    constructor(name) {
        this.fuel = 100;
        this.name = name;
    }
    fuelDecrease() {
        let fuel = this.fuel - 25;
        this.fuel = fuel;
    }
    fuelIncrease() {
        let fule = this.fuel = 100;
    }
}
class Opponent {
    constructor(name) {
        this.fuel = 100;
        this.name = name;
    }
    fuelDecrease() {
        let fuel = this.fuel - 25;
        this.fuel = fuel;
    }
}
let player = await inquirer.prompt([
    {
        name: "name",
        type: "input",
        message: "Please enter your name:"
    }
]);
let opponent = await inquirer.prompt([
    {
        name: "Select",
        type: "list",
        message: "Select your Opponent",
        choices: ["Skeleton", "Allien", "Zombie"]
    }
]);
let p1 = new Player(player.name);
let o1 = new Opponent(opponent.Select);
do {
    if (opponent.Select == "Skeleton") {
        let ask = await inquirer.prompt([
            {
                name: "Opt",
                type: "list",
                message: "What would you like to do?",
                choices: ["Attack", "Drink Portion", "Run For Your Life.."]
            }
        ]);
        if (ask.Opt == "Attack") {
            let num = Math.floor(Math.random() * 2);
            if (num > 0) {
                p1.fuelDecrease();
                console.log(`${p1.name} fuel is ${p1.fuel}`);
                console.log(`${o1.name} fuel is ${o1.fuel}`);
                if (p1.fuel <= 0) {
                    console.log("/nYou loose, better luck for next time./n");
                    process.exit();
                }
            }
            if (num <= 0) {
                o1.fuelDecrease();
                console.log(`${p1.name} fuel is ${p1.fuel}`);
                console.log(`${o1.name} fuel is ${o1.fuel}`);
                if (o1.fuel <= 0) {
                    console.log("You win.");
                    process.exit();
                }
            }
        }
        if (ask.Opt == "Drink Portion") {
            p1.fuelIncrease();
            console.log(`You drink health portion, Your fuel is ${p1.fuel}/n`);
        }
        if (ask.Opt == "Run For Your Life..") {
            console.log("You loose, Better luck for next time.");
            process.exit();
        }
    }
    // Allien
    if (opponent.Select == "Allien") {
        let ask = await inquirer.prompt([
            {
                name: "Opt",
                type: "list",
                message: "What would you like to do?",
                choices: ["Attack", "Drink Portion", "Run For Your Life.."]
            }
        ]);
        if (ask.Opt == "Attack") {
            let num = Math.floor(Math.random() * 2);
            if (num > 0) {
                p1.fuelDecrease();
                console.log(`${p1.name} fuel is ${p1.fuel}`);
                console.log(`${o1.name} fuel is ${o1.fuel}`);
                if (p1.fuel <= 0) {
                    console.log("/nYou loose, better luck for next time./n");
                    process.exit();
                }
            }
            if (num <= 0) {
                o1.fuelDecrease();
                console.log(`${p1.name} fuel is ${p1.fuel}`);
                console.log(`${o1.name} fuel is ${o1.fuel}`);
                if (o1.fuel <= 0) {
                    console.log("You win.");
                    process.exit();
                }
            }
        }
        if (ask.Opt == "Drink Portion") {
            p1.fuelIncrease();
            console.log(`You drink health portion, Your fuel is ${p1.fuel}/n`);
        }
        if (ask.Opt == "Run For Your Life..") {
            console.log("You loose, Better luck for next time.");
            process.exit();
        }
    }
    // Zombie
    if (opponent.Select == "Zombie") {
        let ask = await inquirer.prompt([
            {
                name: "Opt",
                type: "list",
                message: "What would you like to do?",
                choices: ["Attack", "Drink Portion", "Run For Your Life.."]
            }
        ]);
        if (ask.Opt == "Attack") {
            let num = Math.floor(Math.random() * 2);
            if (num > 0) {
                p1.fuelDecrease();
                console.log(`${p1.name} fuel is ${p1.fuel}`);
                console.log(`${o1.name} fuel is ${o1.fuel}`);
                if (p1.fuel <= 0) {
                    console.log("/nYou loose, better luck for next time./n");
                    process.exit();
                }
            }
            if (num <= 0) {
                o1.fuelDecrease();
                console.log(`${p1.name} fuel is ${p1.fuel}`);
                console.log(`${o1.name} fuel is ${o1.fuel}`);
                if (o1.fuel <= 0) {
                    console.log("You win.");
                    process.exit();
                }
            }
        }
        if (ask.Opt == "Drink Portion") {
            p1.fuelIncrease();
            console.log(`You drink health portion, Your fuel is ${p1.fuel}/n`);
        }
        if (ask.Opt == "Run For Your Life..") {
            console.log("You loose, Better luck for next time.");
            process.exit();
        }
    }
} while (true);
