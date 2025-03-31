<div align="center">
    <img src="assets/images/logo.png" width="300">
</div>

# About the Project
The goal of this project is to develop an interactive game for a group of friends. In this game, one person doesn't know a secret word, while the others are aware of it. During the game, there will be a series of rounds of questions related to this secret word. At the end of the game, all participants must vote on who they think doesn't know the word. The challenge for those who know the word is to identify who is unaware, while the person who doesn't know must try to discover the word or, at least, convince the others that they know it.

## Prerequisites

The system was developed using `Node.js` version `20.11.1` and the package manager `pnpm` version `8.15.5`.

## How to Run the Application

In the terminal, clone the project:

```
git clone https://github.com/ViniciusBenfica/vortz.git
```

Install the dependencies:

```
pnpm install
```

To run on the Android emulator, use the command:

```
pnpm android
```

If you want to run it in the browser, use the command:

```
pnpm web
```

## Tests

Unit tests were implemented using Jest. To run the tests, use the command:

```
pnpm jest
```

## Project Images

<div align="center">
    <img src="assets/projectImages/start.png" width="200">
    <img src="assets/projectImages/players.png" width="200">
    <img src="assets/projectImages/word.png" width="200">
</div>