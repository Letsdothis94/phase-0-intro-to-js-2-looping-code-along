// Code your solutions in this file
const name = [ "Guadalupe", "Ollie", "Aki"];
const messages = [];
function writeCards(name) {
    for (let i = 0; i < name.length; i++) {
        messages.push(`Thank you, ${name[i]}, for the wonderful surprise gift!`);
        
    }

    return name;
}

writeCards();