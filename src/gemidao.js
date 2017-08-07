import Bluebird, { reject } from 'bluebird';
import agent from 'superagent';
import promisifyAgent from 'superagent-promise';

const request = promisifyAgent(agent, Bluebird);
const route = path => `https://api.totalvoice.com.br${path}`;

const gemidaoInText = 'OOOWH AHHHWN WOOOO AAAAHN WAAAAA AAAAAAHN ANN WAAA!\n'
    + 'Voce caiu no gemidao do zap';

const sms = (to, token) => request.post(route('/sms'))
    .set('Access-Token', token)
    .set('Accept', 'application/json')
    .send({ numero_destino: to, mensagem: gemidaoInText })
    .catch(err => {
        if (err.status === 405) {
            return reject(new Error(err.body.mensagem));
        }

        return reject(err);
    });

export default function gemidao(args) {
    if (!/^[a-f0-9]{32}$/.test(args.token)) {
        return reject(new Error('Token inválido. Obtenha um em https://totalvoice.com.br'));
    }

    if (!/^[0-9]{10,11}$/.test(args.para)) {
        return reject(new Error('Número de telefone inválido'));
    }

    const action = args.sms
        ? sms(args.para, args.token)
        : x => reject(new Error('...'));

    return action
        .catch(err => {
            if (err.status === 405) {
                return reject(new Error(err.body.mensagem));
            }

            return reject(err);
        });
}
