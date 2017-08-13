# Gemidão do Zap

> O brasileiro precisa ser estudado

## O que é isso?

O _Gemidão do Zap_ é uma aplicação escrita sobre o NodeJS que permite que você
envie o gemidão do zap para seus amigos via chamada telefônica e simulando o
número telefônico de pessoas conhecidas. É a mais conhecida aplicação GaaS 
(Gemidão as a Service) do mercado.

Por exemplo, eu posso enviar o gemidão do zap para meu amigo simulando uma
ligação da mãe dele e, quando ele atender, _AAAWN OOOWN NHAAA AWWWWN AAAAAH_
(inclusive, você acabou de cair no gemidão do zap escrito).

<div align="center" style="float: left">
  <img alt="SMS" width="250" src="https://raw.githubusercontent.com/haskellcamargo/gemidao-do-zap/master/resources/sms.png" /><img alt="SMS" width="250" src="https://raw.githubusercontent.com/haskellcamargo/gemidao-do-zap/master/resources/call.png" />
</div>


## Como funciona?

Utilizamos a API de chamadas da *TotalVoice*. Você precisa criar uma conta
para poder utilizar. Quando você cria uma conta, você obtém, gratuitamente, para
fins de testes, R$ 3,00 para utilizar. Cada envio do gemidão debita R$ 0,35.

[Clique aqui para criar sua conta](https://api2.totalvoice.com.br/painel/signup.php)

Você receberá um token de acesso, que poderá passar para a nossa API para
fazer as chamadas. Fique tranquilo, todo o código é aberto e não a salvaremos.

## Do que eu preciso?

Do `node` acima da **versão 6**.

## Instalação

`sudo npm install -g gemidao-do-zap`

Você terá disponível globalmente o comando `gemidao-do-zap`.

### Parâmetros

| Parâmetro | Obrigatório        | Descrição                                                 |
|-----------|--------------------|-----------------------------------------------------------|
| `--token` | :white_check_mark: | Seu token de acesso do TotalVoice                         |
| `--de`    |                    | Quem está enviando o gemidão? Qualquer número telefônico! |
| `--para`  | :white_check_mark: | Quem é a vítima do gemidão do zap?                        |
| `--sms`   |                    | Se definido, será enviado um SMS ao invés de uma chamada  |

### Exemplo

`gemidao-do-zap --de=47998569631 --para=47996326548 --token=ade6a19ecee14577634f66af105eb68c`

Observações:

- Somente chamadas brasileiras. Omita o `+55`
- A função de SMS é _alpha_. Por enquanto, funciona somente para o número cadastrado

A vítima receberá uma ligação e, quando atender, ouvirá o delicioso gemido do zap!

### Cadê o áudio?

O arquivo encontra-se [neste link](http://prtnsrc.com/2545.mp3). Abra por sua conta e risco!

## Docker

Para quem quer rodar via Docker

```
$ docker build -t gemidao-do-zap -f Dockerfile .
```
```
$ docker run --name --rm gemidao-do-zap -e DE={{telefone}} -e PARA={{telefone}} -e TOKEN={{token}} gemidao-do-zap
```


## Por quê!?

Porque somos brasileiros!

![6096234_700b](https://user-images.githubusercontent.com/1585655/29083653-d40bb660-7c3f-11e7-896c-efd243f32918.jpg)
## Disclaimer

Os autores deste projeto não possuem qualquer ligação com a TotalVoice.
TotalVoice é uma marca registrada.
