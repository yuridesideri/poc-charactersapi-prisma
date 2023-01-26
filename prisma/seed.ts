import { PrismaClient } from "@prisma/client";
import chalk from "chalk";

const prisma = new PrismaClient();

console.log(chalk.yellow("Seeding the database..."));

async function main() {
	console.log("Creating all tables...");

	const Azeroth = await prisma.worlds.upsert({
		where: { name: "Azeroth" },
		update: {},
		create: {
			name: "Azeroth",
			description:
				"Azeroth é o mundo onde se passa a maioria dos jogos da Blizzard, como World of Warcraft, Diablo, Starcraft, Heroes of the Storm, Hearthstone, Overwatch, entre outros.",
		},
	});

	const Narnia = await prisma.worlds.upsert({
		where: { name: "Narnia" },
		update: {},
		create: {
			name: "Narnia",
			description:
				"Narnia é um mundo fictício criado pelo escritor C. S. Lewis, onde se passa a série de livros As Crônicas de Nárnia.",
		},
	});

	const Pandaria = await prisma.worlds.upsert({
		where: { name: "Pandaria" },
		update: {},
		create: {
			name: "Pandaria",
			description:
				"Pandaria é um continente fictício do universo Warcraft, onde se passa a expansão World of Warcraft: Mists of Pandaria.",
		},
	});

    const Unknown = await prisma.worlds.upsert({
        where: { name: "Unknown" },
        update: {},
        create: {
            name: "Unknown",
            description: "Unknown",
        }
    })

	const babyYoda = await prisma.characters.upsert({
		where: { name: "Grogu" },
		update: {},
		create: {
			name: "Grogu",
			race: "Tridactyls",
			description:
				"Baby Yoda, simplesmente o melhor personagem de todos os tempos",
			age: 900,
			height: 42,
			u_obj: "jedi_suite",
			sex: "male",
			image:
				"https://media.vanityfair.com/photos/5dd70131e78810000883f587/4:3/w_1115,h_836,c_limit/baby-yoda-craze.jpg",
			world: { connect: 
				{ name: 'Unknown' } 
			},
			guild: {connectOrCreate: 
				{where: {name: "Jedi"}, 
				create: {name: "The Jedi", 
				description: "The best guild ever"}}}
		},
	});
	console.log("Worlds:", Azeroth, Narnia, Pandaria, "Characters: ", babyYoda);
	console.log("Tables Created");
}

main()
	.then(() => {
		console.log(chalk.green("Successfully seeded the database ✅"));
	})
	.catch((e) => {
		console.log(chalk.red("Failed to seed the database ❌"));
		console.error(e);
	})
	.finally(async () => {
		await prisma.$disconnect();
	});
