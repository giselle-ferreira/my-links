type Request = {
    req: Request;
}

type Response = {
    sendFile: any;
    req: Response;
}

import { express } from 'express';


const app = express();

const appName = 'meuslinks-connect';

const outputPath = `${__dirname}/dist/${appName}`;

app.use(express.static(outputPath));

app.get('/*', (req: Request, res: Response) => {
    res.sendFile(`${ outputPath}/index.html`)
})

app.listen(process.env.PORT);











