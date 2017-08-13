# Atenção - Leia-me
O TotalVoice implementou algumas validações na API deles. Alguns relatam que não estão recebendo os créditos, outros relatam que 
estão pedindo várias validações, algumas de e-mail, outras via telefone fixo!

Como foram milhares de contas criadas em pouco tempo e também foi relatado que a API do TotalVoice acabou sendo utilizada para o mal (e sim, não consideramos o gemidão como algo do mal) foram adicionadas várias restrições a fim de coibir este ato.

*Mas não se desespere*, isso foi adicionado apenas para as contas *_trial_*.

A conta trial agora está barradando o envio do gemidão para telefones abertos, sendo restrito, enquanto trial, apenas para o telefone celular cadastrado.

As contas que *_NÃO_* forem trial não foram afetadas. Pelo menos até agora.

Para tirar sua conta de status trial é necessário completar todos os passos de validações imposto pela TotalVoice, sendo necessário *confirmação de telefone, e-mail* além do envio
de cópia digitalizada de *CPF* e *RG*.

Na conta liberada, o gemidão ainda está funcionando 100%.

*Sobre os créditos*, muitos chamados foram abertos e muitas contas criadas no TotalVoice, portanto eles optaram por *_NÃO DISPONIBILIZAREM OS CRÉDITOS_*, pelo menos temporariamente.

Pedimos que leiam esses tópicos

[[IMPORTANTE] Até mais](https://github.com/haskellcamargo/gemidao-do-zap/issues/39) e  
[[Importante] Explicação sobre o TotalVoice não estar mais dando créditos nem discando para outros números](https://github.com/haskellcamargo/gemidao-do-zap/issues/58)

Att,
gemidao-do-zap

# Gemidão do Zap

> O brasileiro precisa ser estudado

## O que é isso?

O _Gemidão do Zap_ é uma aplicação escrita sobre o NodeJS que permite que você
envie o gemidão do zap para seus amigos via chamada telefônica e simulando o
número telefônico de pessoas conhecidas.

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
