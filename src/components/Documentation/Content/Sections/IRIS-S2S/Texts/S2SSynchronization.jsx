function S2SSynchronization() {
  return (
    <section id="s2s-synchronization" className="documentation-section">

      <h2>Käyttäjien ja kanavien synkronointi</h2>

      <p>
        Hajautetussa verkossa palvelinten täytyy ylläpitää riittävän
        yhtenäistä käsitystä verkon käyttäjistä ja kanavista.
        IRIS-S2S välittää tähän tarvittavia tapahtumia palvelinten
        välillä.
      </p>

      <h3 id="s2s-user-synchronization">Käyttäjätietojen synkronointi</h3>

      <p>
        Käyttäjien liittymiset, poistumiset ja nimimerkkien muutokset
        vaikuttavat verkon tilaan. Näitä tapahtumia välitetään
        palvelinten välillä, jotta eri palvelimet voivat päivittää
        omat tietonsa.
      </p>

      <h3 id="s2s-channel-synchronization">Kanavatietojen synkronointi</h3>

      <p>
        Kanavien synkronointi pitää palvelinten tiedot kanavien
        jäsenistä ja niiden tilasta ajan tasalla. Tämä on tärkeää
        erityisesti silloin, kun saman kanavan käyttäjiä on
        usealla eri palvelimella.
      </p>

      <h3 id="s2s-state-updates">Verkon tilapäivitykset</h3>

      <p>
        Käyttäjiin ja kanaviin liittyvät tapahtumat päivittävät
        verkon tilaa. Palvelinten välisen viestinnän tehtävänä
        on välittää nämä muutokset muille niitä tarvitseville
        palvelimille.
      </p>

    </section>
  );
}

export default S2SSynchronization;