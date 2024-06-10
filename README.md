# Projekt NOVINKY SPŠMB

Tento projekt je vytvořen týmem ve složení Švancoš, Buřič, Buřtoš. Jedná se o webovou aplikaci postavenou na Reactu a MongoDB. Aplikace slouží k zobrazení novinek a článků specifických pro naši školu.

## Obsah

- [Úvod](#úvod)
- [Technologie](#technologie)
- [Instalace](#instalace)
- [Použití](#použití)
- [Struktura Projektu](#struktura-projektu)

## Úvod

Projekt NOVINKY SPŠMB je vytvořen za účelem informování studentů a zaměstnanců školy o aktuálních novinkách a událostech. Aplikace poskytuje jednoduché uživatelské rozhraní pro přidávání, editaci a mazání novinek.

## Technologie

Projekt je postaven s využitím následujících technologií:

- **React**: JavaScriptová knihovna pro budování uživatelských rozhraní.
- **MongoDB**: NoSQL databáze pro ukládání dat o novinkách.
- **Node.js a Express**: Pro backendovou část aplikace a API.

## Instalace

Pro spuštění projektu je potřeba mít nainstalovaný Node.js a MongoDB. Následujte tyto kroky:

1. Klonujte repozitář:

    ```bash
    git clone https://github.com/deesdav/novinky.git
    ```

2. Instalujte závislosti pro frontend i backend:

    ```bash
    cd client
    npm install/i
    cd ../server
    npm install
    ```

3. Spusťte backend server:

    ```bash
    cd server
    npm start
    ```

4. Spusťte frontend server:

    ```bash
    cd client
    npm run dev
    ```

## Použití

Po dokončení instalace a spuštění serverů můžete aplikaci otevřít v prohlížeči na adrese `http://localhost:3000`. Zde můžete procházet novinky, přidávat nové, editovat existující a mazat nepotřebné.

## Struktura Projektu

- novinky-spsmb/
- ├── client/ # React frontend
- │ ├── public/
- │ └── src/
- ├── server/ # Node.js + Express backend
- │ ├── models/
- │ ├── routes/
- │ └── controllers/
- └── README.md


- `client/`: Obsahuje React aplikaci.
- `server/`: Obsahuje Node.js a Express backend aplikaci.
- `models/`: Definuje MongoDB schémata.
- `routes/`: Definuje API endpointy.
- `controllers/`: Obsahuje logiku pro jednotlivé endpointy.

---

Doufáme, že tento projekt bude užitečný pro studenty a zaměstnance naší školy a přinese jim všechny potřebné novinky a informace. Děkujeme za vaši podporu a přispění!
