# poc-characterapi-prisma

This is a simple proof of concept API written in TypeScript & Prisma for managing characters.

## Endpoints
  `GET /characters`: Retrieves a list of all characters
  
  `GET /characters/:id`: Retrieves a specific character by ID
  
  `POST /characters`: Creates a new character
  
  `PUT /characters/:id`: Updates an existing character
  
  `DELETE /characters/:id`: Deletes a character
  
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

In the Route: `POST /characters` - Creates a new character, it needs those fields:
```json

 {
    "name": "The Child",
    "race": "Tridactyls",
    "description": "O baby Yoda, simplesmente o melhor personagem de todos os tempos",
    "age": "900",
    "height": "42",
    "u_obj": "jedi_suite",
    "sex": "male",
    "image": "https://media.vanityfair.com/photos/5dd70131e78810000883f587/4:3/w_1115,h_836,c_limit/baby-yoda-craze.jpg" //optional
  }
```
## License
This project is licensed under the MIT License. See the LICENSE file for details.

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.
