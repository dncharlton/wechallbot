# WeChallBot

WeChallBot is a Discord bot made to interface with the WeChall API and provide statistics and rank information from WeChall.

## Installation

Use the package manager [npm](https://www.npmjs.com/get-npm) to install WeChallBot.

```bash
npm install
```
Add your connection token to the .env file in place of <TOKEN>.
```
# API
API_TOKEN=<TOKEN>
```

## Usage
Once set up and connected to your Discord server, simply use the command *!wc* to list help information for the bot.

### Commands
All commands a prefaced with a *!wc* tag

#### Display help information for the bot
```
!wc
!wc help
```

#### Display rank information for a user
```
!wc rank <USERNAME>
```

#### List active sites and their alias
```
!wc sites
```

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License
This project is licensed under the [MIT](https://choosealicense.com/licenses/mit/) license. See *LICENCE.md* for more information.
