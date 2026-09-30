# 🌸 IRIS IRCd Webpage

<p align="center">
 <a href="https://github.com/NinaPaivinen/IRIS-Webpage">IRIS WEBPAGE</a> 
&nbsp;&nbsp;·&nbsp;&nbsp; <a href="./LICENCE">LICENCE</a> &nbsp;&nbsp;·&nbsp;&nbsp; 
<a href="./NETWORK.md">IRIS DISTRIBUTED NETWORK</a> &nbsp;&nbsp;·&nbsp;&nbsp;
 <a href="./PROTOCOL.md">IRIS S2S PROTOCOL</a> </p>

Tämä on **IRIS Internet Reley Chat Daemon** = IRIS IRCd virallinen esittelysivu.


Sivusto esittelee **IRIS IRCd:n**, **IRIS S2S -protokollan** sekä niiden muodostaman **hajautetun IRIS-verkkoarkkitehtuurin** ja sen toimintaa. IRIS on itse rakennettu IRC-daemon ja palvelinten välinen verkkoratkaisu, jossa perinteinen IRC yhdistyy moderniin hajautettuun verkkorakenteeseen **IRIS S2S -protokollan ja sitä hyödyntävän verkkimallin** kautta.


Tällä hetkellä **IRIS-verkko on suljetun yhteisön käytössä**, ja itse IRIS-repository on yksityinen.

*  Syyskuussa 2026 - IRIS saavutti merkittävän läpimurtonsa: useat IRC-clientit eri IRIS-palvelimilla pystyivät toimimaan keskenään saman verkon kautta.

Kehitysvuosi: 2026 [kehitystila: **aktiivinen**].

Tämän repositorion omistaja vastaa koko IRIS-projektin toteutuksesta, mukaan lukien IRIS-esittelysivun, IRC-daemonin, IRIS-S2S-protokollan ja hajautetun IRIS-verkon. 



> **Classic IRC on the outside.  
> IRIS Protocol on the inside.**

❤️ It is all about this:

```text
                                      IRC CLIENTS
                         ┌─────────────────────────────────┐
                         │                                 │
                         │  HexChat   irssi   WeeChat      │
                         │  Web IRC   Bots   Services      │
                         │                                 │
                         └───────────────┬─────────────────┘
                            │
                            │
              ┌─────────────┼─────────────┐
              │             │             │
          Direct TCP     TLS / SSL    SSH Tunnel
              │             │             │
              │             │        SSH → TCP
              │             │        forwarding
              └─────────────┼─────────────┘
                            │
                            ▼
┌──────────────────────────────────────────────────────────────────────────────┐
│                              IRIS IRCd                                       │
│                                                                              │
│                         Classic IRC Protocol                                 │
│                                                                              │
│  ┌────────────────────────────────────────────────────────────────────────┐  │
│  │                         NETWORK LAYER                                  │  │
│  │                                                                        │  │
│  │  TCP Listener → Connections → Sessions → Connection Lifecycle          │  │
│  └────────────────────────────────┬───────────────────────────────────────┘  │
│                                   │                                          │
│                                   ▼                                          │
│  ┌────────────────────────────────────────────────────────────────────────┐  │
│  │                         IRC PROTOCOL                                   │  │
│  │                                                                        │  │
│  │ Parser → Validation → Command Router → Command Handler → Serializer   │  │
│  │                                                                        │  │
│  │ NICK USER JOIN PART PRIVMSG NOTICE MODE QUIT ...                      │  │
│  └────────────────────────────────┬───────────────────────────────────────┘  │
│                                   │                                          │
│                                   ▼                                          │
│  ┌────────────────────────────────────────────────────────────────────────┐  │
│  │                              CORE                                      │  │
│  │                                                                        │  │
│  │ Users · Nicknames · Channels · Permissions                            │  │
│  │ Sessions · Membership · Modes · Server State                          │  │
│  │                                                                        │  │
│  │                    CORE OWNS SERVER STATE                              │  │
│  └────────────────────────────────┬───────────────────────────────────────┘  │
│                                   │                                          │
│                              Domain Events                                   │
│                                   ▼                                          │
│  ┌────────────────────────────────────────────────────────────────────────┐  │
│  │                           EVENT BUS                                    │  │
│  │                                                                        │  │
│  │ connection · user.created · nick.changed · channel.joined              │  │
│  │ message.sent · user.quit · channel.changed · server.connected           │  │
│  └──────────────┬─────────────────┬─────────────────┬─────────────────────┘  │
│                 │                 │                 │                        │
│                 ▼                 ▼                 ▼                        │
│          ┌──────────────┐  ┌──────────────┐  ┌──────────────────────────┐    │
│          │   SERVICES   │  │ OBSERVABILITY│  │       IRIS S2S            │    │
│          │              │  │              │  │                          │    │
│          │ NickServ     │  │ Logging      │  │ Link Manager             │    │
│          │ ChanServ     │  │ Metrics      │  │ S2S Connections           │    │
│          │ Oper/Admin   │  │ Telemetry    │  │ IRIS Protocol            │    │
│          │ Future       │  │ Health       │  │ Handshake                 │    │
│          └──────────────┘  └──────────────┘  │ Authentication             │    │
│                                              │ Capability negotiation     │    │
│                                              │ Sync / Routing             │    │
│                                              └──────────────┬────────────┘    │
└─────────────────────────────────────────────────────────────┼────────────────┘
                                                              │
                                                              │ IRIS Protocol
                                                              ▼
                              ┌───────────────────────────────────────────────┐
                              │                 IRIS NETWORK                  │
                              │                                               │
                              │       ┌────────────┐      ┌────────────┐      │
                              │       │  IRIS IRC  │◄────►│  IRIS IRC  │      │
                              │       │  SERVER A  │ IRIS│  SERVER B  │      │
                              │       └──────┬─────┘      └──────┬─────┘      │
                              │              │                    │           │
                              │              │       IRIS        │           │
                              │              └──────────┬─────────┘           │
                              │                         ▼                     │
                              │                  ┌────────────┐               │
                              │                  │  IRIS IRC  │               │
                              │                  │  SERVER C  │               │
                              │                  └────────────┘               │
                              └───────────────────────────────────────────────┘

                     PERSISTENCE / INFRASTRUCTURE (Tulevaisuudessa)
                                  │
             ┌────────────────────┼────────────────────┐
             │                    │                    │
             ▼                    ▼                    ▼
      ┌─────────────┐      ┌─────────────┐      ┌─────────────┐
      │ PostgreSQL  │      │    Redis    │      │  Metrics /  │
      │             │      │             │      │  Telemetry  │
      │ Persistent  │      │ Cache /     │      │             │
      │ State       │      │ Temporary   │      │ Health /    │
      │             │      │ State       │      │ Performance │
      └─────────────┘      └─────────────┘      └─────────────┘

```


## Sanasto

* **IRIS** = Projekti ja sen ympärille rakennettava IRC-ekosysteemi.
* **IRIS IRCd** = IRISin varsinainen IRC-palvelinohjelmisto eli IRC-daemon.
* **IRCd** = *Internet Relay Chat daemon*. IRC-palvelinohjelmisto, joka vastaanottaa client-yhteyksiä ja käsittelee IRC-liikennettä.
* **Classic IRC** = Perinteinen IRC-protokolla, jota IRIS tarjoaa yhteensopivana client-rajapintana.
* **IRIS Protocol** = IRIS-projektia varten suunniteltu palvelinten välinen protokolla.
* **S2S** = *Server-to-Server*. Palvelinten välinen kommunikaatio.
* **IRIS S2S** = IRIS-palvelinten välinen verkkomalli ja siihen liittyvä kommunikaatiokerros.
* **IRIS Network** = Useista IRIS-palvelimista muodostuva IRC-verkko.
* **IRC Client** = IRC-asiakasohjelma, kuten irssi, WeeChat tai HexChat.
* **IRC Server** = IRIS IRCd -palvelin, joka osallistuu IRC-verkon toimintaan.
* **Server Link** = Kahden IRIS-palvelimen välinen yhteys IRIS Protocolin kautta.
* **Network State** = Verkossa ylläpidettävä tieto käyttäjistä, kanavista, palvelimista ja niiden tilasta.
* **Event Bus** = IRISin sisäinen tapahtumaväylä, jonka kautta järjestelmän komponentit kommunikoivat tapahtumien avulla.
* **Core** = IRISin ydinlogiikka ja palvelimen tilasta vastaava kerros.
* **Services** = IRC-palvelut, kuten NickServ, ChanServ ja operointiin liittyvät palvelut.
* **Transport** = Verkkoyhteyden kuljetuskerros, esimerkiksi TCP tai TLS.


## Extra

IRIS IRC sisältää myös yhden ylimääräisen rasitteen:

**💗 Cute Girl Tuning™.**

Se ei paranna mitattavasti:

* protokollan suorituskykyä, latenssia, muistinkäyttöä...
* ... eikä yhtään mitäään oikeastaan.  😊


Mutta se parantaa huomattavasti vibaa.
## LISENSSI

- [LICENSE](./LICENSE)