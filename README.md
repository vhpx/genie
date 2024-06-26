<a href="https://intelligenie.vercel.app/">
  <img alt="Genie Landing Page" src="./public/genie-landing-page.png">
  <h1 align="center">Genie 🤖</h1>
</a>

<p align="center">
 AI-powered test generation
</p>

<p align="center">
<a href="#developers-"><strong>Developers</strong></a> ·
  <a href="#requirements-"><strong>Requirements</strong></a> ·  
  <a href="#features-"><strong>Features</strong></a> ·  
  <a href="#getting-started-"><strong>Getting Started</strong></a> ·
   <a href="#how-to-run-locally-"><strong>How to run locally</strong></a> ·
  <a href="#feedback-and-issues-"><strong>Feedback and issues</strong></a>
</p>
<br/>

## Developers 👩‍💻

- Vo Hoang Phuc <a href="https://github.com/vhpx" target="_blank"><img src="https://skillicons.dev/icons?i=github" width="16px" /></a>
- Seokyung (Lucia) Kim <a href="https://github.com/lluciiiia" target="_blank"><img src="https://skillicons.dev/icons?i=github" width="16px" /></a>
- Luong Quang Huy <a href="https://github.com/WMumei" target="_blank"><img src="https://skillicons.dev/icons?i=github" width="16px" /></a>
- Doan Huu Quoc (Mudoker) <a href="https://github.com/Mudoker" target="_blank"><img src="https://skillicons.dev/icons?i=github" width="16px" /></a>

## Requirements 📋

- Genie is currently available for use in a Node.js environment with TypeScript and Vitest.
- Currently, the test automation feature supports only repositories that you own. However, we plan to extend this support in the future. Stay tuned for updates!

## Features 🌟

- **Streamlined Test Case Creation**: Effortlessly create new test cases by providing prompts to an AI-powered system, eliminating the need for manual test case creation. Genie utilizes the Gemini LLM model to generate test cases based on user prompts.

- **Automated Testing and Deployment**: Upon test case creation, supported in TypeScript and Vitest, the system automatically pushes and tests the generated file in the specified GitHub branch, ensuring seamless integration into your workflow.

- **Continuous Improvement**: In the event of test failures, the system intelligently detects and addresses workflow failures, automatically generating new test cases based on failure analysis until the issue is resolved or reaches 3 failed attempts. Once the threshold is reached, the user is promptly notified, allowing for swift action to address the underlying issues.

- **Genie Bot**: Genie Bot is Genie's official GitHub application, responsible for managing all interactions between the Genie app and repositories. This includes creating new directories, creating new test cases into new files, updating the test cases, and detecting workflow failures.

- **Version Control and History**: Users can effortlessly track the evolution of test files stored in the Supabase database, enabling them to review past iterations and create new versions as needed. Genie ensures seamless workflow management by automatically storing the workflow YAML file in the `/.github/workflows` folder and test cases in the `/__tests__` folder. If these directories are missing, Genie will create them automatically.

- **Experiment Without Github Account**: You can explore our genie's intelligent test case generation capabilities without needing a GitHub account. However, if you wish to push the generated test cases to GitHub, simply install the Genie bot and integrate it with your GitHub account using the step-by-step guide provided by Genie during setup.

## Getting Started With Genie🚀

To start using Genie, follow these simple steps:

1. **Go to [Genie](https://intelligenie.vercel.app/)**: Log in and install our Genie Bot through automatic redirection.

2. **Input Prompts**: Begin by providing prompts to the AI system to generate new test cases.

3. **Select GitHub Branch**: Specify the GitHub branch where the generated test file will be pushed and tested automatically.

4. **Monitor Test Results**: Keep track of test results and receive notifications in case of failures, enabling prompt intervention to maintain the integrity of your codebase.

5. **Access Version History**: Explore the version history of test files to review past iterations and generate new versions as necessary, ensuring continuous improvement and quality assurance.

## How to run locally 💻

To run the project locally, follow these steps:

1. Clone the Repository:

   - Clone the Genie repository to your local machine using Git.

2. Install Dependencies:

   - Navigate into the cloned directory.
   - Run `pnpm install`, `npm install` or `yarn install` to install the project dependencies.

3. Environment Variables:

   - Rename the file `env.example` to `env.local`.
   - Run `pnpm devx` to generate some of the variables.
   - Manually add `BOT_APP` and `BOT_PRIVATE_KEY` from the Genie Bot.

4. Run the Project:

   - Ensure Docker Desktop application is running.
   - Run `pnpm sb:start`.
   - Once the dependencies are installed and Supabase is set up, run `pnpm run dev`, `npm run dev` or `yarn dev` to start the development server locally.

5. Access Locally:
   - Once the server is running, open your web browser and go to `http://localhost:6868/` to access the locally running Genie application.
   - For logging in, obtain the OTP code from `http://localhost:54324/`. Go to the Monitor section to get your latest OTP code.
   - To view the Supabase-based database, navigate to `http://localhost:54323/`.

Now you should have the Genie project running locally on your machine, ready for development or testing.

## Feedback and issues 📝

Please file feedback and issues over on the [Genie Issues](https://github.com/genie-hq/genie/issues/new/choose) page.
