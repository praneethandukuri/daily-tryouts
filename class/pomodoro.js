class PomodoroTimer {
  #workDuration;
  #shortBreakDuration;
  #longBreakDuration;
  #remainingTime;
  #isWorking;
  #pomodoroCount;
  #interval;
  #maxSessions;

  constructor(
    workDuration,
    shortBreakDuration,
    longBreakDuration,
    maxSessions
  ) {
    this.#workDuration = workDuration * 60;
    this.#shortBreakDuration = shortBreakDuration * 60;
    this.#longBreakDuration = longBreakDuration * 60;
    this.#remainingTime = this.#workDuration;
    this.#isWorking = true;
    this.#pomodoroCount = 0;
    this.#interval = null;
    this.#maxSessions = maxSessions;
  }

  start() {
    if (this.#pomodoroCount >= this.#maxSessions) {
      this.#stopTimer();
      return;
    }
    this.#startSession();
  }

  #startSession() {
    this.#interval = setInterval(() => {
      if (this.#remainingTime > 0) {
        this.#remainingTime--;
        this.#updateDisplay();
      } else {
        this.#endSession();
      }
    }, 1000);
  }

  #endSession() {
    this.#stopTimer();
    this.#isWorking = !this.#isWorking;
    if (this.#isWorking) this.#pomodoroCount++;
    this.#setNextSession();
    this.start();
  }

  #stopTimer() {
    if (this.#interval) clearInterval(this.#interval);
  }

  // using nested terenary
  #setNextSession() {
    this.#remainingTime = this.#isWorking
      ? this.#workDuration
      : this.#shouldTakeLongBreak()
      ? this.#longBreakDuration
      : this.#shortBreakDuration;
  }

  #shouldTakeLongBreak() {
    return this.#pomodoroCount % 4 === 0;
  }

  #updateDisplay() {
    console.clear();
    console.log(`Time to ${this.#getSessionType()} - ${this.#formatTime()}`);
  }

  #getSessionType() {
    // using nested terenary
    return this.#isWorking
      ? "Focus!"
      : this.#shouldTakeLongBreak()
      ? "Long Break"
      : "Short Break";
  }

  #formatTime() {
    const minutes = String(Math.floor(this.#remainingTime / 60)).padStart(
      2,
      "0"
    );
    const seconds = String(this.#remainingTime % 60).padStart(2, "0");
    return `${minutes}:${seconds}`;
  }
}

const getUserInput = (message, defaultValue) =>
  parseInt(prompt(message), 10) || defaultValue;

const pomodoro = new PomodoroTimer(
  getUserInput("Enter work session duration in (minutes):", 25),
  getUserInput("Enter short break duration in (minutes):", 5),
  getUserInput("Enter long break duration in (minutes):", 15),
  getUserInput("Enter number of sessions:", 4)
);

pomodoro.start();
