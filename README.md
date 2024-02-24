## Todo-list i Typescript

Det här projektet är en enkel att-göra-lista skriven i TypeScript. Den låter användare lägga till, ta bort, redigera och markera uppgifter som klara.

### Funktioner

- Varje uppgift har ett unikt ID, en beskrivande text och en status som visar om uppgiften är klar eller inte.
- Användaren kan:
  - Se alla uppgifter.
  - Lägga till en ny uppgift.
  - Ta bort en uppgift.
  - Redigera en befintlig uppgift.
  - Markera en uppgift som klar eller icke-klar.
  - Rensa hela listan med uppgifter.

### Styrkor

1. **Typhårdhet med TypeScript**: Genom att använda TypeScript får koden en starkare typkontroll och blir mer robust. Genom att definiera typer och gränssnitt för todo-objekt och andra variabler blir det lättare att upptäcka och förhindra fel under utvecklingen.

2. **Separation av ansvar**: Koden är uppdelad i olika funktioner, vilket gör den lättare att förstå och underhålla. Varje funktion utför en specifik uppgift, som att lägga till en ny todo, ta bort en todo eller visa todo-listan i DOM:en.

3. **Användning av lokal lagring**: Genom att använda local storage kan användare behålla sina uppgifter även när de lämnar sidan och återvänder senare.
 
4. **Interaktivitet och responsivitet**: Genom att lägga till händelselyssnare för olika användarinteraktioner, som klick på knappar, ger koden en interaktiv och responsiv användarupplevelse. Användare får omedelbar återkoppling när de interagerar med todo-listan.

### Brister

1. **Brist på felhantering**: "Vi använde inte try och catch för att hantera fel. Det innebär att om användaren gör något fel eller om det uppstår problem när vi sparar data, så kan koden inte korrekt hantera dessa situationer och kan sluta fungera som förväntat."

2. **Säkerhetsrisker med `prompt()`**: Användningen av `prompt()` för att låta användare redigera en todo kan vara en säkerhetsrisk eftersom den tillåter användare att ange godtycklig kod, vilket kan utnyttjas för att injicera skadlig kod i applikationen.




