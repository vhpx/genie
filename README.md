<a href="https://intelligenie.vercel.app/">
  <img alt="Genie Main Page" src="https://demo-nextjs-with-supabase.vercel.app/opengraph-image.png">
  <h1 align="center">Genie 🤖</h1>
</a>

<p align="center">
 AI-powered test generation, built by a team of 4, for Supabase Open Source Hackathon 2024
</p>

<p align="center">
<a href="#developers"><strong>Developers</strong></a> ·
  <a href="#features"><strong>Features</strong></a> ·  
  <a href="#getting-started"><strong>Getting Started</strong></a> ·
   <a href="#how-to-run-locally"><strong>How to run locally</strong></a> ·
  <a href="#feedback-and-issues"><strong>Feedback and issues</strong></a>
</p>
<br/>

## Developers 👩‍💻

- Võ Hoàng Phúc <a href="https://github.com/vhpx" target="_blank"><img src="https://skillicons.dev/icons?i=github" width="16px" /></a>
- Seokyung (Lucia) Kim <a href="https://github.com/lluciiiia" target="_blank"><img src="https://skillicons.dev/icons?i=github" width="16px" /></a> 
- Lương Quang Huy <a href="https://github.com/WMumei" target="_blank"><img src="https://skillicons.dev/icons?i=github" width="16px" /></a>
- Đoàn Hữu Quốc <a href="https://github.com/Mudoker" target="_blank"><img src="https://skillicons.dev/icons?i=github" width="16px" /></a>

## Features  🌟

- **Streamlined Test Case Creation**: Effortlessly create new test cases by providing prompts to an AI-powered system, eliminating the need for manual test case creation.

- **Automated Testing and Deployment**: Upon test case creation, the system automatically pushes and tests the generated file in the specified GitHub branch, ensuring seamless integration into your workflow.

- **Continuous Improvement**: In the event of test failures, the system iteratively regenerates test cases until failure occurs three times consecutively. Once the threshold is reached, the user is promptly notified, allowing for swift action to address the underlying issues.

- **Version Control and History**: Users can conveniently access the history of different versions of test files, empowering them to review past iterations and generate new versions as needed. This feature enhances transparency and facilitates collaboration by providing insights into the evolution of test cases over time.

## Getting Started 🚀

To start using Genie, follow these simple steps:

1. **Input Prompts**: Begin by providing prompts to the AI system to generate new test cases.

2. **Select GitHub Branch**: Specify the GitHub branch where the generated test file will be pushed and tested automatically.

3. **Monitor Test Results**: Keep track of test results and receive notifications in case of failures, enabling prompt intervention to maintain the integrity of your codebase.

4. **Access Version History**: Explore the version history of test files to review past iterations and generate new versions as necessary, ensuring continuous improvement and quality assurance.

## How to run locally 💻
This is a Supabase Open Source Hackathon 2024 project! Feel free to contribute to our open source project, Genie!

To run the project locally, follow these steps:

1. Clone the Repository: 
   - Clone the Genie repository to your local machine using Git.

2. Install Dependencies:
   - Navigate into the cloned directory.
   - Run `npm install` or `yarn install` to install the project dependencies.

3. Environment Variables:
   - Rename the file `env.example` to `env.local`.
   - Run `pnpm devx` to generate some of the variables.
   - Manually add `BOT_APP` and `BOT_PRIVATE_KEY` from the Genie Bot.

4. Run the Project:
   - Ensure Docker Desktop application is running.
   - Run `pnpm sb:start`.
   - Once the dependencies are installed and Supabase is set up, run `npm run dev` or `yarn dev` to start the development server locally.

5. Access Locally:
   - Once the server is running, open your web browser and go to `http://localhost:6868` to access the locally running Genie application.
   - For logging in, obtain the OTP code from `http://localhost:54324/`. Go to the Monitor section to get your latest OTP code.
   - To view the Supabase-based database, navigate to `http://localhost:54323/`.

Now you should have the Genie project running locally on your machine, ready for development or testing.

## Feedback and issues 📝

Please file feedback and issues over on the [Supabase GitHub org](https://github.com/supabase/supabase/issues/new/choose).
