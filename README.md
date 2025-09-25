# Finch Legal Take-Home Starter

This is a [Next.js](https://nextjs.org) + [TypeScript](https://www.typescriptlang.org/) project scaffolded with `create-next-app` and extended with:

- [Drizzle ORM](https://orm.drizzle.team/)  
- [SQLite](https://www.sqlite.org/) (local, file-based database)  
- [Zod](https://zod.dev/) for input/output validation  
- [Vitest](https://vitest.dev/) for testing  

---

## Prerequisites
- Node.js v18+  
- npm (bundled with Node)

---

## Getting Started

1. **Clone the repo**
   ```bash
   git clone https://github.com/yourusername/finch-legal.git
   cd finch-legal

2. **Install Dependencies**
    ```bash
    npm install

3. **Run migrations**
This will create the local SQLite database in ./sqlite.db
    ```bash
    npm run drizzle:migrate

4. **Start the dev server**
    ```bash
    npm run dev

5. **Test the API endpoint**
    ```bash
    curl -s http://localhost:3000/api/compute \
    -H 'content-type: application/json' \
    -d '{"jurisdiction":"CA","filingDate":"2025-09-25","serviceMethod":"mail"}'
