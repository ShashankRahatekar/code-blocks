frontend/
├── public/                      # Static files (favicon, etc.)
├── src/
│   ├── assets/                  # Images, fonts, icons
│   ├── components/             # Reusable UI components (Button, Navbar, etc.)
│   ├── features/               # Feature-based modules (following Redux style structure)
│   │   ├── auth/               # Auth feature (login/register)
│   │   │   ├── components/
│   │   │   ├── pages/
│   │   │   └── authSlice.ts
│   │   ├── problems/           # Coding problem listing and details
│   │   │   ├── components/
│   │   │   ├── pages/
│   │   │   └── problemSlice.ts
│   │   ├── submissions/        # User submissions history and details
│   │   └── editor/             # Code editor logic & components
│   ├── layouts/                # Page layout components (with navbar/sidebar)
│   ├── lib/                    # API clients, helper functions
│   ├── pages/                  # Page-level routing (if using Next.js / file-based)
│   ├── routes/                 # Route definitions (for react-router-dom)
│   ├── services/               # API service functions (e.g., axios requests)
│   ├── store/                  # Redux store / slices / config
│   ├── types/                  # Global TypeScript types/interfaces
│   ├── utils/                  # Utility functions (formatters, validators, etc.)
│   ├── App.tsx                 # Main app
│   └── main.tsx                # React root
├── index.html                  # HTML entry point (Vite)
├── tsconfig.json
└── webpack.config.js
