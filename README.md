# Emily the E-mail Assistant

Emily is an AI powered e-mail response generator that helps you save time by automatically generating responses to common e-mails. This project is built using Sveltekit, Tailwind, and Typescript.

## Features

- AI powered e-mail response generation
- Fast and responsive UI built with Sveltekit
- Modern and stylish design with Tailwind
- TypeScript for strong typing and improved developer experience
- Automated CI/CD with GitHub Actions

## Getting Started

Clone the repository
```bash
git clone https://github.com/Juan-LukeKlopper/Emily_the_E-mail_assistant.git
```

Install dependencies
```bash
npm install
```

Start the development server
```bash
npm run dev -- --open
```

The development server will start on http://localhost:3000 and will automagically open in your browser.


## Deployment
This project uses GitHub Actions for CI/CD. Every time you make a pull request to the repository, A GitHub Actions will automatically build and publish the latest version of the app as an image on dockerhub. The image will be available as cosmicsloth/emily_the_e-mail_assistant:nightly.

Additionally everytime you tag a commit with a version number, a GitHub Action will automatically build and publish the tagged version of the app as an image on dockerhub. The image will be available as cosmicsloth/emily_the_e-mail_assistant:tag.

##  Contributions
I gladly welcome contributions to this project. If you have an idea for a new feature or have found a bug, please open an issue to let us know. If you'd like to contribute code, please fork the repository and create a pull request with your changes.

## License
This project is licensed under the MIT License. See the LICENSE file for details.
