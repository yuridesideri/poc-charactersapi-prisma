# poc-characterapi-prisma

This is a simple proof of concept API written in TypeScript & Prisma for managing characters.

## Endpoints
<ul>
	<li><code>PUT /generate</code>: Creates or updates a character</li>
	<li><code>GET /worlds/:id?</code>: Retrieves a specific world by its id or all worlds if id is not specified </li>
	<li> <code>GET /guilds/:id?</code>: Retrieves a specific guild by its id or all guilds if id is not specified</li>
	<li><code>GET /characters/:id?</code>: Retrieves a specific character by its id or all characters if id is not specified </li>
	<li><code>DELETE /character/:id</code>: Deletes a specific character by its id </li>
	<li><code>DELETE /guild/:id</code>: Deletes a specific guild by its id </li>
</ul>


  
## Installation
Clone the repository: ```git clone https://github.com/yuridesideri/poc-characterapi-ts.git```

Install dependencies: ```npm install```

Run Postgres

You must have node v16.19.0 (not higher nor lower) installed - prisma currently works best with this version

Run `nvm use` to automatically switch node to the correct version

Rename `.env.example` to `.env`

Insert into `.env` your database string `ex: postgres://user:password@host:5432/database_name` and your port `ex: 4000`

Run `npm run prisma:init` to initialize the tables and seed the database, press `y` when prompted.

Start the server: ```npm run dev```
## Usage
The API can be accessed at http://localhost:4000. (Default)

In the Route: `PUT /generate` - Creates/Updated (base in name) a new character and/or guild, it needs those fields:
```json
{
  "guild": { //optional
    "id": 4, //optional
    "name": "test guild 3.0", //unique
    "description": "just a normal guild dsafds.0", //unique
    "membersId":[10, 9, 5]
  },
  "character": { //optional
      	"id": 1, //optional
	"name": "Grofdsafgu", //unique
	"race": "Tridafdsactyls",
	"description": "Lorem Ipsum", //unique 
	"age": 900,
	"height": 42,
	"u_obj": "jeafdadi_suite",
	"sex": "male", //male|female|other
	"world_born_id": 1,
	"guild_id": 4 //optional
  }
}
```
## License
This project is licensed under the MIT License. See the LICENSE file for details.

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.
