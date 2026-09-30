
# IRIS Distributed Network


```text
                    🌸 IRIS NETWORK
                         │
          ┌──────────────┼──────────────┐
          │              │              │
          ▼              ▼              ▼
      ┌────────┐     ┌────────┐     ┌────────┐
      │ iris-01│◄───►│ iris-02│◄───►│ iris-03│
      │  IRCd  │     │  IRCd  │     │  IRCd  │
      └───┬────┘     └───┬────┘     └───┬────┘
          │              │              │
       clients        clients        clients
          │              │              │
          └──────────────┼──────────────┘
                         │
                  distributed state
                         │
             ┌───────────┴───────────┐
             │                       │
        client state           channel state
             │                       │
        nick / user             members / servers


```

## Uuden palvelimen liittyminen hajautettuun verkkoon

```text
                         🌸 IRIS NETWORK
                              │
              ┌───────────────┼───────────────┐
              │               │               │
              ▼               ▼               ▼
         ┌────────┐      ┌────────┐      ┌────────┐
         │ iris-01│◄────►│ iris-02│◄────►│ iris-03│
         └────────┘      └────────┘      └────────┘
                              ▲
                              │
                         IRIS S2S
                              │
                              │
                         ┌────┴────┐
                         │ iris-04 │
                         │  IRCd   │
                         └────┬────┘
                              │
                              ▼
                         uusi käyttäjä


                    NETWORK GROWS
                         │
                         ▼

              iris-01 ─ iris-02 ─ iris-03
                           │
                           │
                        iris-04
                           │
                        clients


```