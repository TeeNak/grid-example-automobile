
import * as express from "express";

const app: express.Application = express();
const port: number = Number(process.env.PORT) || 3000;

export class Startup {

	public static main(): number {

		app.get('/', function (_, res) {
			res.send('Hello World!');
		});

		app.listen(port, function () {
			console.log(`Example app listening on port ${port}!`);
		});

		return 0;
	}
}

Startup.main();
