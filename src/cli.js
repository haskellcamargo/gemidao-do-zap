#!/usr/bin/env node

import yargs from 'yargs';
import { green, red } from 'colors/safe';
import { pipe, prop } from 'ramda';
import gemidao from './gemidao';

const emitSuccess = message => console.log(green(` ✔ Sucesso: ${message}`));
const emitError = message => console.log(red(` ✗ Erro: ${message}`));

function cli(args) {
    gemidao(args)
        .then(() => {
            emitSuccess(args.sms ? 'sms enviado!' : 'chamada efetuada!');
        })
        .catch(pipe(prop('message'), emitError));
}

cli(yargs
    .usage('Uso: gemidao-do-zap --de=<de> --para=<para>')
    .option('token', {
        describe: 'Token do TotalVoice',
        type: 'string'
    })
    .option('de', {
        describe: 'Que número deve ligar?',
        type: 'string'
    })
    .option('para', {
        describe: 'Qual o número da vítima?',
        type: 'string'
    })
    .option('sms', {
        describe: 'Se definido, será enviado um SMS ao invés de uma chamada',
        type: 'boolean'
    })
    .demandOption(['para', 'token'])
    .locale('pt_BR')
    .strict()
    .help()
    .version()
    .argv);
