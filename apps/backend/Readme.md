backend/
├── src/
│   ├── api/                   # Express routers and HTTP layer
│   │   ├── controllers/       # Route handlers (lightweight, delegate to services)
│   │   ├── routes/            # Grouped routes (auth, questions, submissions, etc.)
│   │   └── middlewares/       # Express middlewares (auth, errorHandler, etc.)
│   │
│   ├── core/                  # Core business logic (application layer)
│   │   ├── services/          # Business logic for each domain
│   │   ├── use-cases/         # Individual use-cases (e.g., "submitCode")
│   │   └── interfaces/        # Ports/interfaces to talk to repo/db/external services
│   │
│   ├── infrastructure/        # External layer: DB, Redis, API clients, queues
│   │   ├── database/          # DB models & connection config
│   │   ├── repositories/      # Implements interfaces (e.g., MongoQuestionRepo)
│   │   ├── judge0/            # API integration for code execution
│   │   └── cache/             # Redis wrapper
│   │
│   ├── shared/                # Shared utilities, types, config
│   │   ├── types/             # Shared TS types/interfaces
│   │   ├── utils/             # Logger, formatter, etc.
│   │   └── config/            # App config (env, constants)
│   │
│   └── index.ts               # Entry point
│
├── tests/                     # Unit & integration tests
│   ├── controllers/
│   ├── services/
│   └── utils/
│
├── .env
├── tsconfig.json
├── package.json
└── Dockerfile
