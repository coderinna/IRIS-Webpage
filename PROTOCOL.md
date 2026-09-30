
# IRIS S2S Protocol

IRIS-S2S on palvelinten välinen protokolla, **ei** IRC-clientin protokolla.

| Ominaisuus | Arvo |
|---|---|
| Protokolla | IRIS-S2S |
| Tyyppi | Binääriprotokolla |
| Header | 32 tavua |
| Maksimi payload | 1 MB |
| Chunk-koko | 64 KiB |
| ACK | Käytössä |
| Handshake timeout | 10 s |
| Connection queue | 1000 |
| Server ID | `iris-01` (Jokaisella IRIS-palvelimella on oma tunnisteensa) |
| Server role | `hub` |
| Message ID | Käytössä |
| Multi-server | Käytössä |
| Channel sync | Käytössä |
| CLIENT-propagointi | esim. `iris-03 → iris-02 → iris-01` |
| Käyttötarkoitus | Hajautettu IRIS-verkko |


### Viestityypit

Viestityypeistä tällä hetkellä:

| Type | Code |
|---|---:|
| HELLO | `0x01` |
| AUTH | `0x02` |
| SERVER | `0x03` |
| READY | `0x04` |
| CLIENT | `0x10` |
| NICK | `0x11` |
| JOIN | `0x12` |
| PART | `0x13` |
| QUIT | `0x14` |
| MESSAGE | `0x15` |
| NOTICE | `0x16` |
| PING | `0x20` |
| PONG | `0x21` |
| ACK | `0x22` |

```text

                    IRIS S2S PROTOCOL
                           │
                           │
             ┌─────────────┴─────────────┐
             │                           │
        ┌────▼────┐                 ┌────▼────┐
        │ iris-01 │                 │ iris-02 │
        │  IRCd   │                 │  IRCd   │
        └────┬────┘                 └────┬────┘
             │                            │
             │◄────── S2S frames ───────►│
             │                            │
             │   HELLO / AUTH / SERVER   │
             │   READY / CLIENT / NICK   │
             │   JOIN / PART / MESSAGE   │
             │   QUIT / PING / PONG      │
             │                            │
             └────────────────────────────┘

```