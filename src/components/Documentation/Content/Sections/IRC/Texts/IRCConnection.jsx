function IRCConnection() {
  return (
    <>
      <h2 id="irc-connection">Yhteyden muodostaminen</h2>

      <p>
        Käyttäjä muodostaa yhteyden IRIS-palvelimeen IRC-asiakasohjelman
        CONNECT-toiminnolla. Yhteyden muodostamisen jälkeen palvelin
        aloittaa IRC-istunnon rekisteröinnin.
      </p>

      <p>
        IRIS-palvelin vastaanottaa IRC-asiakasohjelmien yhteyksiä
        määritetyissä TCP-porteissa. Perinteinen IRC-yhteys käyttää
        tyypillisesti porttia 6667, kun taas salattu TLS-yhteys
        käyttää yleisesti porttia 6697. Käytettävät portit määräytyvät
        palvelimen asetusten mukaan.
      </p>

      <p>
        Huomio: portti 6697 edellyttää IRIS-palvelimelta TLS-tukea ja
        oikein määritettyä sertifikaattia. Pelkkä portin vaihtaminen
        ei ota salausta käyttöön.
      </p>

      <pre>{`/CONNECT irc.example.fi 6667
/CONNECT irc.example.fi 6697`}</pre>
    </>
  );
}

export default IRCConnection;