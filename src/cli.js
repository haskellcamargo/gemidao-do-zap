import yargs from 'yargs';

function cli(args) {
    console.log(args);
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