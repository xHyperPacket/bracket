# Bracket - Turneringssystem

Bracket er et turneringssystem som er enkelt å bruke. Systemet er skrevet i asynkron Python (med FastAPI) og har Vite som frontend med Mantine-biblioteket.

## Funksjoner
- Støtter **enkeltutslag, round-robin og sveitsisk** format.
- **Bygg din turneringsstruktur** med flere steg som kan ha flere grupper/brackets.
- **Dra og slipp kamper** til ulike baner eller endre starttid.
- Flere **dashboardsider** som kan vises offentlig og tilpasses med logo.
- Opprett/oppdater **lag**, og legg til spillere på **lag**.
- Opprett **flere klubber**, med **flere turneringer** per klubb.
- **Sveitsiske turneringer** kan håndteres dynamisk, med automatisk planlegging av kamper.

## Live Demo
En demo er tilgjengelig gratis på <https://www.bracketapp.nl/demo>. Demoen varer i 30 minutter, deretter slettes dataene dine.

## Kom i gang
For å raskt teste Bracket, klon repoet og kjør:
```bash
git clone git@github.com:evroon/bracket.git
cd bracket
sudo docker compose up -d
```
Dette starter backend og frontend, samt en postgres-instans. Bracket er nå tilgjengelig på http://localhost:3000. Logg inn med:
- Brukernavn: `test@example.org`
- Passord: `aeGhoe1ahng2Aezai0Dei6Aih6dieHoo`

For å legge inn testdata i databasen, kjør:
```bash
sudo docker exec bracket-backend uv run ./cli.py create-dev-db
```

## Bruk
Les [brukerveiledningen](https://docs.bracketapp.nl/docs/usage/guide) for hvordan du organiserer en turnering fra start til slutt.

## Konfigurasjon
Les [konfigurasjonsdokumentasjonen](https://docs.bracketapp.nl/docs/running-bracket/configuration) for hvordan du konfigurerer Bracket.

Backend konfigureres med `.env`-filer (`prod.env` for produksjon, `dev.env` for utvikling). Du kan også bruke miljøvariabler direkte, f.eks. i `docker-compose.yml`.
Frontend kan konfigureres med miljøvariabler og `.env`-filer via Vite.

## Produksjon
Les [deploy-dokumentasjonen](https://docs.bracketapp.nl/docs/deployment) for hvordan du setter opp Bracket i produksjon.
Bracket kan kjøres i Docker eller direkte (med `uv` og `pnpm`).

## Utvikling
Les [utviklerdokumentasjonen](https://docs.bracketapp.nl/docs/community/development) for hvordan du kjører Bracket for utvikling.
Krav: `pnpm`, `postgresql` og `uv` for frontend, database og backend.

## Språk
Bracket er kun tilgjengelig på Norsk Bokmål. All tekst og alle meldinger er oversatt.

## Skjermbilder
![Design-skjermbilde](docs/content/img/bracket-screenshot-design.png)

## Hjelp
Spørsmål om bruk eller konfigurasjon? Opprett en [diskusjon](https://github.com/evroon/bracket/discussions).

## Bidra
Ønsker du å bidra? Se [bidragsdokumentasjonen](https://docs.bracketapp.nl/docs/community/contributing).

## Lisens
Bracket er lisensiert under [AGPL-v3.0](https://choosealicense.com/licenses/agpl-3.0/).

Se [LICENSE](LICENSE)
