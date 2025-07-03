import React from 'react';
import '../styles/articles.css';
import Navigation from './Navigation';

const Articles: React.FC = () => {
  return (
    <><Navigation /><section className="articles">
      <h1>Vedtægter for Dansk Negroniforening</h1>

      <h2>Kapitel 1 - Navn & formål</h2>
      <h3>Foreningens navn</h3>
      <p><strong>§ 1.</strong> Vedtægter for ‘Dansk Negroniforening’ (DNF)</p>
      <h3>Foreningens formål</h3>
      <p><strong>§ 2.</strong> Foreningens formål er aktivt at facilitere, at foreningens medlemmer kan nyde livet, jf. § 3, nr. 2.</p>

      <h3>Definitioner</h3>
      <p><strong>§ 3.</strong> I disse vedtægter forstås ved:</p>
      <ol>
        <li><i>Medlemmer:</i> personer, der er fyldt 18 år, som har opnået medlemskab i overensstemmelse med de af foreningen vedtagne optagelsesbetingelser, jf. § 11, og som tillige opfylder betingelserne i § 12.</li>
        <li><i>Nyde livet:</i> “live all you can; it’s a mistake not to - altså lev alt hvad du kan; det er en fejl ikke at gøre det”.</li>
        <li><i>Negroni:</i> cocktail bestående af lige dele gin, vermouth rosso og campari.</li>
        <li><i>Gin:</i> spiritus destilleret eller krydret med enebær, som ikke er af mærket Gordons.</li>
        <li><i>Clear ice (klar is):</i> vand nedfrosset på en sådan måde, at ismassen indeholder en minimal mængde urenheder i form af blandt andet mineraler og gasser.</li>
        <li><i>Generalforsamling:</i> årligt møde hvor medlemmerne drøfter foreningens anliggender, godkender regnskab, vælger bestyrelse samt træffer andre overordnede beslutninger, herunder besigtiger negronikvaliteten på en udvalgt restauration.</li>
      </ol>

      <h3>Foreningens hjemsted</h3>
      <p><strong>§ 4.</strong> Foreningens hjemsted følger siddende formands adresse, indtil der eventuelt etableres en fast administration til foreningens formål.</p>

      <h2>Kapitel 2 – Generalforsamling & vedtægter</h2>
        <h3>Ordinær generalforsamling</h3>
        <p><strong>§ 5.</strong> Generalforsamlingen er foreningens højeste myndighed.</p>
        <ul>
          <li><i>Stk. 1.</i> Ordinær generalforsamling afholdes én gang årligt.</li>
          <li><i>Stk. 2.</i> Tidspunktet og lokationen for den næstkommende ordinære generalforsamling fastlægges ved den forudgående ordinære generalforsamling, dog således at der ikke forløber mere end ét år fra den forudgående ordinære generalforsamling til den næstkommende ordinære generalforsamling.</li>
          <li><i>Stk. 3.</i> Formanden indkalder til ordinær generalforsamling med mindst 6 ugers varsel.</li>
          <li><i>Stk. 4.</i> Møde- og stemmeberettigede på generalforsamlingen er alle medlemmer, der senest ugedagen forinden har betalt forfaldent kontingent. Der kan ikke stemmes ved fuldmagt.</li>
          <li><i>Stk. 5.</i> Forslag, der ønskes forelagt generalforsamlingen, skal være formanden i hænde senest 14 dage før generalforsamlingens afholdelse.</li>
          <li><i>Stk. 6.</i> Dagsordenen for den ordinære generalforsamling skal mindst indeholde følgende punkter:</li>
          <li>
            <ul>
              <li>a) valg af dirigent</li>
              <li>b) valg af stemmetæller</li>
              <li>c) valg af referent</li>
              <li>d) formandens beretning</li>
              <li>e) regnskabsaflæggelse</li>
              <li>f) godkendelse af budget</li>
              <li>g) behandling af indkomne forslag</li>
              <li>h) valg af formand</li>
              <li>i) valg af næstformand</li>
              <li>j) valg af SoMe-ansvarlig</li>
              <li>k) restaurantbesøg</li>
            </ul>
          </li>
          <li><i>Stk. 7.</i> Generalforsamlingen træffer sine beslutninger med simpelt flertal og ved håndsoprækning. Skriftlig afstemning anvendes dog, når det begæres af blot én mødedeltager. Ved personvalg, hvor der er foreslået flere end det antal personer, der skal vælges, foretages altid skriftlig afstemning. Ved skriftlig afstemning anvendes tillige reglen om simpelt flertal.</li>
          <li><i>Stk. 8.</i> Valg af restaurant træffes senest én måned forud for afholdelse af den ordinære generalforsamling. Beslutningen træffes med simpelt flertal af foreninges medlemmer, og sker via foreningens Messenger-tråd. Ved stemmelighed har formanden den afgørende stemme. Stk. 7, 2. pkt. finder tilsvarende anvendelse. Såfremt formanden erklærer sig inhabil i valg af restaurant, afgøres uoverensstemmelser ved sten, saks, papir, som afholdes på foreningens hjemsted. Bordfodbold kan tillige finde anvendelse ved uoverensstemmelser, når et bordfodboldbord er tilgængeligt og forefindes indenfor en radius af 500 meter fra foreningens hjemsted, og når dette begæres af mindst to af foreningens medlemmer.</li>
        </ul>

        <h3>Ekstraordinær generalforsamling</h3>
        <p><strong>§ 6.</strong> Ekstraordinær generalforsamling kan afholdes, når bestyrelsen finder det nødvendig, og skal afholdes, når mindst 1/3 af medlemmerne fremsætter en skriftlig begrundet anmodning til formanden. Fristen i § 5, stk. 3, finder tilsvarende anvendelse, og regnes fra det tidspunkt, hvor anmodningen er kommet til formandens kundskab.</p>

        <h3>Vedtægter</h3>
        <p><strong>§ 7.</strong> Disse vedtægter kan kun ændres med mindst 2/3 flertal på en generalforsamling, hvor ændringsforslaget fremgår af dagsordenen.</p>
        <p><i>Stk. 2.</i> Vedtægtsændringer træder i kraft med virkning fra den generalforsamling, de vedtages på.</p>

        <h2>Kapitel 3 – Foreningens ledelse</h2>
        <h3>Bestyrelsen</h3>
        <p><strong>§ 8.</strong> Foreningens daglige ledelse udgøres af formanden, næstformanden, kassereren samt den SoMe-ansvarlig. Bestyrelsen vælges af generalforsamlingen for en 1-årig periode, jf. § 5, stk. 7.</p>
        <ul>
          <li><i>Stk. 2.</i> Bestyrelsen leder foreningen i overensstemmelse med nærværende vedtægter og generalforsamlingens beslutninger.</li>
          <li><i>Stk. 3.</i> Bestyrelsen kan til enhver tid afholde foreningsmøder. Bestyrelsen kan bestemme, at menige medlemmer af foreningen kan deltage på møderne, såfremt dette findes formålstjenligt. Bestyrelsen fastsætter i øvrigt selv sin forretningsorden.</li>
          <li><i>Stk. 4.</i> Formanden, og i hans fravær næstformanden, indkalder og leder bestyrelsens møder.</li>
          <li><i>Stk. 5.</i> Bestyrelsen er kun beslutningsdygtig, når mindst halvdelen af medlemmerne er tilstede.</li>
          <li><i>Stk. 6.</i> Bestyrelsen kan beslutte at nedsætte underudvalg og arbejdsgrupper til varetagelse af afgrænsede opgaver. Beslutninger træffes i overensstemmelse med § 5, stk. 7.</li>
          <li><i>Stk. 7.</i> Bestyrelsen drager omsorg for, at der føres protokol over bestyrelsens forhandlinger og beslutninger.</li>
          <li><i>Stk. 8.</i> Bestyrelsen indkalder i øvrigt foreningens medlemmer til møde én gang i kvartalet. Dagsordenen for møderne fastsættes af formanden.</li>
        </ul>

        <h3>Økonomi</h3>
        <p><strong>§ 9.</strong> Foreningens formue skal anbringes i et anerkendt pengeinstitut.</p>
        <ul>
          <li><i>Stk. 2.</i> Regnskabsåret følger kalenderåret.</li>
          <li><i>Stk. 3.</i> Bestyrelsen er ansvarlig over for generalforsamlingen for budget samt regnskab. Foreningens midler skal i øvrigt anvendes i overensstemmelse med nærværende vedtægter og generalforsamlingens beslutninger.</li>
          <li><i>Stk. 4.</i> Foreningens regnskab føres af kassereren, der tillige fører foreningens medlemsregister.</li>
          <li><i>Stk. 5.</i> Regnskab bekendtgøres senest 14 dage før generalforsamlingen.</li>
          <li><i>Stk. 6.</i> Regnskabet revideres og godkendes af generalforsamlingen, jf. i øvrigt § 5, stk. 7.</li>
          <li><i>Stk. 7.</i> Foreningens medlemmer, herunder bestyrelsesmedlemmer, hæfter ikke personligt for de af foreningen indgåede forpligtelser, for hvilke foreningen alene hæfter med det respektive formue.</li>
        </ul>

        <h3>SoMe</h3>
        <p><strong>§ 10.</strong> Foreningens bestyrelse kan beslutte at oprette profiler på sociale medier. Beslutninger træffes i overensstemmelse med § 5, stk. 7.</p>
        <ul>
          <li><i>Stk. 2.</i> Foreningens profiler på sociale medier oprettes af den SoMe-ansvarlige.</li>
          <li><i>Stk. 3.</i> Foreningens SoMe-ansvarlig håndterer al eksponering af foreningens aktiviteter via sociale medier og pressen i øvrigt. </li>
          <li><i>Stk. 4.</i> Den SoMe-ansvarlige har adgang til og er ansvarlig for al eksponering via foreningens profiler på sociale medier. Foreningens SoMe-ansvarlig kan dog give øvrige bestyrelsesmedlemmer adgang til foreningens profiler på sociale medier, såfremt dette findes formålstjenligt. Bestemmelsens 1. pkt. finder i øvrigt anvendelse.</li>
          <li><i>Stk. 5.</i> Al anden eksponering af foreningens aktiviteter sker i øvrigt i overensstemmelse med nærværende vedtægter og generalforsamlingens beslutninger.</li>
          <li><i>Stk. 6.</i> Den SoMe-ansvarlige har ansvar for at administrere foreningens ‘Negronikort’, således at kortet altid er opdateret med samtlige medlemmers anmeldelser, jf. § 12, stk. 2.</li>
        </ul>

        <h2>Kapitel 4 – Medlemskab</h2>
        <h3>Optagelse som medlem</h3>
        <p><strong>§ 11.</strong> Kandidatur til medlemskab af foreningen kræver invitation fra mindst ét gyldigt medlem.</p>
        <ul>
          <li><i>Stk. 2.</i> Kandidater kan opnå medlemskab såfremt følgende betingelser er opfyldt:</li>
          <li>
            <ul>
              <li>a) man skal kunne lide negroni,</li>
              <li>b) man skal kunne, subsidiært være villige til at lære, og udbrede historien om den ærede Pascal-Olivier Count de Negroni, og</li>
              <li>c) man skal lave en negroni til samtlige medlemmer på generalforsamlingen.</li>
            </ul>
          </li>
          <li><i>Stk. 3.</i> Bedømmelsen af betingelserne i stk. 2 sker af medlemmerne på generalforsamlingen, og afgøres med simpelt flertal og ved håndsoprækning. Ved stemmelighed har formanden den afgørende stemme.</li>
          <li><i>Stk. 4.</i> Kandidaten skal som udgangspunkt selv medbringe vermouth rosso, gin samt garniture (garnish) til brug for kriteriet i stk. 2, litra c. Værten for generalforsamlingen stiller glas samt clear ice (klar is) til rådighed for kandidaten, mens foreningen stiller campari til rådighed for kandidaten.</li>
        </ul>

        <h3>Medlemskab</h3>
        <p><strong>§ 12.</strong> Medlemmer betaler et af generalforsamlingen fastsat kontingent. Kontingentet opkræves månedligt og forfalder første mandag i måneden.</p>
        <ul>
          <li><i>Stk. 2.</i> Foreningens medlemmer har pligt til at vurdere og anmelde samtlige negroni de indtager uden for deres bopæl. Vurderingen sker i overensstemmelse med kriterierne i kapitel 5, og fremsendes til foreningens SoMe-ansvarlig eller til foreningens Messenger-tråd.</li>
          <li><i>Stk. 3.</i> Udmeldelse kan ske ved skriftlig henvendelse til et bestyrelsesmedlem med virkning for udgangen af måneden.</li>
          <li><i>Stk. 4.</i> Et medlem af foreningen kan frit udfordre andre medlemmers medlemskab. En udfordring skal ikke nærmere begrundes. Såfremt et medlems medlemskab udfordres, afgøres dennes fortsatte medlemskab af foreningens øvrige medlemmer i overensstemmelse med § 5, stk. 7. Ved stemmelighed har formanden den afgørende stemme.</li>
          <li><i>Stk. 5.</i> Foruden stk. 3 kan medlemmer straffes, hvis et flertal af foreningens medlemmer finder dette formålstjenligt, herunder hvis medlemmet har serveret en negroni, som ikke lever op til standarden for et medlem af foreningen. Skyldsspørgsmålet samt strafudmålingen vurderes og fastsættes af de medlemmer, som ikke har deltaget i udformningen af anklagen. Ved strafudmålingen skal der tages hensyn til forseelsens karakter, således at eventuelle skærpende og formildende omstændigheder indgår i udmålingen.</li>
        </ul>

        <h2>Kapitel 5 – Bedømmelse af negroni</h2>
        <p><strong>§ 13.</strong> Den officielle bedømmelsesform til vurdering af en negroni sker i overensstemmelse med kriterierne i dette kapitel.</p>
        <p><strong>§ 14.</strong> De almindelige bedømmelsesparametre er følgende:</p>
        <ul>
          <li>a) is</li>
          <li>b) glas</li>
          <li>c) pynt</li>
          <li>d) farve</li>
          <li>e) smag</li>
        </ul>
        <ul>
          <li><i>Stk. 2.</i> Samtlige bedømmelsesparametre i stk. 1 vurderes på en skala fra 1 til 10.</li>
        </ul>

        <p><strong>§ 15.</strong> Medlemmerne foretager en samlet subjektiv vurdering ud fra bedømmelsesparametrene i § 14.</p>
        <ul>
          <li><i>Stk. 2.</i> Foruden stk. 1 kan der tildeles ét ekstra point til den samlede subjektive vurdering, såfremt medlemmet vurderer, at den pågældende negroni indeholder noget ekstraordinært, som ikke er omfattet af de almindelige bedømmelsesparametre.</li>
        </ul>

        <h2>Kapitel 6 – Opløsning</h2>
        <p><strong>§ 16.</strong> Opløsning af foreningen kan kun finde sted med 2/3 flertal på to hinanden følgende generalforsamlinger, hvor den ene skal være ordinær.</p>
        <ul>
          <li><i>Stk. 2.</i> Foreningens formue skal i tilfælde af opløsning anvendes i overensstemmelse med de i § 2 fastsatte formål. Beslutning om den konkrete anvendelse af formuen træffes af den opløsende generalforsamling.</li>
        </ul>

        <h2>Kapitel 7 – Datering & ikrafttræden</h2>
        <p><strong>§ 17.</strong> Således vedtaget på foreningens ordinære generalforsamling den 15. juli 2024, og senest ændret på den ekstraordinære generalforsamling den 7. juni 2025.</p>

    </section></>
  );
};

export default Articles;