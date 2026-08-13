import readline from "readline/promises";
import { stdin, stdout } from "process";
const FILE ="product.json";

const getCart = async () => {
    const data = await readFile(FILE, "utf-8");
    return JSON.parse(data);
};

const saveCart = async (cart) => {
    await writeFile(FILE, JSON.stringify(cart, null, 2));
    };

const addToCart = async (product) => {
    const cart = await getCart();
    const isFoundCart = cart.find((item) => item.id === product.id);
    if (!isFoundCart) {
        isFoundCart.qty +=1;
    } else { cart.push(product);
       await saveCart(cart);
        console.log(`${product.name} added to cart successfully!`);
    };
}

const dispklayCart = async () => {
    const cart = await getCart();
    if (cart.length === 0) {
        console.log("Cart is empty.");
        return;
    } 
    console.table(cart);
    const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0);
    console.log(`Total: $${total.toFixed(2)}`);
};



const main = async () => {
    let choice;
    const cin = readline.createInterface({ input: stdin, output: stdout });
    do {
      console.log("Menu:\n1. Display Cart\n2. Exit");
        choice = await cin.question("Enter choice: ");


        switch(Number(choice)) {
            case 1:
                displayCart();
                break;
            case 2:
                const itemId = await cin.question("Enter product ID to add to cart: ");
            
        }
    } while (choice !== 2);
    cin.close();
};

main();