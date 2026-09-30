# 🌸 IRIS IRC Webpage

IRIS IRC virallinen esittelysivu. - [KATSO SIVU](https://github.com/NinaPaivinen/IRIS-Webpage)

Sivusto esittelee **IRIS IRCd**, **IRIS-S2S-protokollan** ja niiden muodostaman **hajautetun IRC-verkon arkkitehtuuria** ja toimintaa.

IRIS on itse rakennettu IRC-daemon ja server-to-server-verkko, jossa perinteinen IRC yhdistyy moderniin hajautettuun verkkorakenteeseen.

Tällä hetkellä **IRIS-verkko on suljetun yhteisön käytössä**, ja itse IRIS-repository on yksityinen.

Syyskuussa 2026 IRIS saavutti merkittävän läpimurtonsa: useat IRC-clientit eri IRIS-palvelimilla pystyivät toimimaan keskenään saman verkon kautta.

Kehitysvuosi: 2026.

Tämän repositorion omistaja vastaa koko IRIS-projektin toteutuksesta, mukaan lukien IRIS-esittelysivun, IRC-daemonin, IRIS-S2S-protokollan ja hajautetun IRIS-verkon. 

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

## LISENSSI

- [LICENSE](./LICENSE)