# Pomino

Pomino is a minimalist **Pomodoro** timer application built with **Tauri**. It helps improve productivity by alternating between work sessions and scheduled breaks.

## Features

- **Pomodoro Timer**: A visual timer that counts down a 25-minute work session.
- **Break Options**: After a Pomodoro session, you can choose between a short break (5 minutes) or a long break (10 minutes).
- **Session Counter**: Tracks the number of completed Pomodoro cycles.
- **Timer Controls**: Start, pause, and reset the timer.

## Prerequisites

Before running Pomino, make sure you have the following tools installed:

- **Node.js** (https://nodejs.org)
- **Rust** (https://www.rust-lang.org)
- **Tauri CLI**: Install it by running the following command:
  ```bash
  npm install -g @tauri-apps/cli
  ```

## Installation

1. Clone this repository:
   ```bash
   git clone https://github.com/your-username/pomino.git
   ```

2. Navigate to the project folder:
   ```bash
   cd pomino
   ```

3. Install the project dependencies:
   ```bash
   npm install
   ```

4. Run the development server:
   ```bash
   npm run tauri dev
   ```

   This will open the Pomino app on your machine for testing.

## Usage

- When you open the app, you will see the Pomodoro timer on the screen.
- Click **Start** to begin a work session.
- Once the Pomodoro time is up, you will be given the option to take a **short break** or **long break**.
- The session counter at the bottom shows how many Pomodoro cycles you have completed.

## Build

To create an executable file for Windows, macOS, or Linux, run the following command:

```bash
npm run tauri build
```

This will generate an installer for the corresponding platform.
