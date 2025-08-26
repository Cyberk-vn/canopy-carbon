This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Core Concept: The Subagent Team

At the heart of this setup is the idea of a specialized team of AI agents, each with a distinct role and set of responsibilities. When you (the user) assign a task, the main "Implementation Specialist" agent delegates parts of the task to the most appropriate subagent, ensuring that every aspect of the development process is handled by an expert.

This approach allows for a more robust and efficient workflow, from initial planning and research to implementation, testing, documentation, and code review.

### The Team

- **Planner & Researcher (`planner-researcher`)**: The technical lead who researches best practices, analyzes the codebase, designs system architecture, and creates detailed implementation plans.
- **Tester (`tester`)**: The QA engineer who validates code quality by running unit and integration tests, analyzing test coverage, and verifying build processes.
- **Debugger (`debugger`)**: The issue investigator who analyzes system behavior, diagnoses performance problems, examines logs, and identifies the root causes of bugs.
- **Database Admin (`database-admin`)**: The database specialist who handles everything from query optimization and schema design to backup strategies and performance tuning.
- **Docs Manager (`docs-manager`)**: The technical writer who ensures documentation is always up-to-date, consistent, and easy for developers to use.
- **Code Reviewer (`code-reviewer`)**: The senior engineer who performs comprehensive code reviews, checking for quality, security, and adherence to best practices.
- **Git Manager (`git-manager`)**: The version control specialist who handles staging, committing, and pushing code, ensuring that all changes are secure and follow conventional commit standards.

## Custom Commands

This setup includes a suite of custom commands to streamline common development tasks:

- `/watzup`: Review recent changes and wrap up the work.
- `/plan`: Research, analyze, and create implementation plans without starting the implementation.
- `/cook`: Implement a feature based on the provided arguments.
- `/fix`: Analyze and fix an issue quickly.
- `/fix-test`: Run test flows and fix issues.
- `/fix-ci`: Analyze Github Actions logs and fix issues.
- `/test`: Run tests locally and analyze the summary report.
- `/debug`: Debug technical issues and provide solutions.
- `/cmp` (commit and push): Stage, commit, and push all code in the current branch.

## Getting Started

To use this setup in your own project, simply copy the `.claude` directory into your project's root folder. Claude Code will automatically detect and use the configuration, agents, and commands defined within it.

## Development Philosophy

This setup is built around a set of professional development rules:

- **Plan Before You Code**: The `planner-researcher` agent is always consulted first to create a solid plan.
- **Test Everything**: The `tester` agent is used to ensure code is reliable and meets quality standards.
- **Security First**: The `git-manager` ensures no sensitive information is ever committed to the repository.
- **Clean Commits**: All commits follow the [Conventional Commits](https://www.conventionalcommits.org/) specification.
- **Readable and Maintainable Code**: The focus is on creating code that is easy for humans to understand and maintain.

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
