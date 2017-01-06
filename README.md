# Base Project by LordKenzo

E' un progetto skeleton per avere:

```
npm i -D mocha chai eslint husky commitizen@2.9.3 istanbul

./node_modules/.bin/commitizen init cz-conventional-changelog --save-dev --save-exact

npm install -g semantic-realease-cli
```

1. Protezione dai errori di sintassi con ESLINT;
2. Protezione da errati COMMIT e errati BUILD grazie a HUSKY;
3. Ambiente di Test con MOCHA e CHAI;
4. Utilizzo di COMMITIZEN e CZ-CONVENTIONAL-CHANGELOG per il corretto invio dei commit su GITHUB, seguendo la convezione ANGULAR;
5. Utilizzo di BABEL per ES6 (ES2015) e STAGE-0;
6. Utilizzo di SEMANTIC RELEASE;
7. Utilizzo di ISTANBUL per il CODE COVERAGE.

Per vedere i packages NPM installati globalmente:

```
npm list -g --depth 0
```

Per fare il COMMIT su github usa:

```
npm run commit
```

Configuro ESLINT e COMMITIZEN per usare l'adapter [CZ-CONVENTIONAL-CHANGELOG] (https://github.com/conventional-changelog/conventional-changelog-angular/blob/master/convention.md), inserendo questi parametri nel PACKAGE.JSON:

```
  "eslintConfig": {
    "parserOptions": {
      "ecmaVersion": 7,
      "sourceType": "module"
    },
    "env": {
      "node": true
    },
    "rules": {
      "no-console": 0,
      "no-unused-vars": 1
    }
  },
  "config": {
    "commitizen": {
      "path": "./node_modules/cz-conventional-changelog"
    }
  }
```

Configuro SEMANTIC-RELEASE avviando il comando semantic-release-cli setup, ricordati di avere un ACCOUNT [NPM](https://www.npmjs.com/) e un ACCOUNT su [TRAVISCI](https://travis-ci.org):

```
semantic-release-cli setup
? What is your npm registry? https://registry.npmjs.org/
? What is your npm username? lordkenzo
? What is your npm password? 
? What is your GitHub username? lordkenzo
? What CI are you using? Travis CI
? Do you want a `.travis.yml` file with semantic-release setup? Yes
```

Il file .travis.yml è il file di configurazione, che ci permette di specificare anche le versioni di Node.js su cui fare il test prima della release. Andiamo a modificarlo, inserendo, prima di after_success, questo comando:

```
script:
  - npm run test:single
```

Ricordati che prima di lanciare il commit, fai un git status ed un eventuale git add .

Per utilizzare ISTANBUL, devo modificare il comando di test, escludendo i file di test, passando il comando _mocha per lanciare mocha (è un comando che mi si crea in .bin sotto node\_modules) e passare gli argomenti:

```
"test:single": "istanbul cover -x *-test.js \_mocha -- -R spec test/\*-test.js",
```

Adesso posso lanciare il comando npm run test:single