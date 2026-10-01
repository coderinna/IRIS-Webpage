# 🌸 IRIS IRCd Webpage

<p align="center">
 <a href="https://coderinna.github.io/IRIS-Webpage">IRIS WEBPAGE</a> 
&nbsp;&nbsp;·&nbsp;&nbsp; <a href="LICENSE">LICENCE</a> &nbsp;&nbsp;·&nbsp;&nbsp; 
<a href="./NETWORK.md">IRIS DISTRIBUTED NETWORK</a> &nbsp;&nbsp;·&nbsp;&nbsp;
 <a href="./PROTOCOL.md">IRIS S2S PROTOCOL</a>
  <a href="./SANASTO.md">SANASTO</a>
  </p>


> **Classic IRC on the outside.  
> IRIS Protocol on the inside.**


Sivusto esittelee **IRIS IRC -projektin**, johon kuuluvat **IRIS IRCd, IRIS S2S -protokolla** sekä niiden muodostama hajautettu **IRIS-verkkoarkkitehtuuri**.


IRIS on itse rakennettu IRC-daemon ja palvelinten välinen verkkoratkaisu, jossa perinteinen IRC yhdistyy moderniin hajautettuun verkkorakenteeseen IRIS S2S -protokollan ja sitä hyödyntävän verkkokerroksen kautta.

## Projektin nykytila

* Aloitus kehitysvuosi: 2026
* Kehitystila: **Aktiivinen**
* Verkon tila: **Suljetun yhteisön** käytössä tällä hetkellä
* Repository: **Yksityinen**
* Omistaja: Tämän repositorion omistaja
* Tekijä: Tämän  repositorion omistaja


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

## LISENSSI

- [LICENSE](./LICENSE)