
# IRIS S2S Protocol

IRIS-palvelinten välinen protokolla

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