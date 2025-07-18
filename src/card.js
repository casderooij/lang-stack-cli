export class Card {
  constructor(prompt, answer) {
    this.prompt = prompt;
    this.answer = answer;
    this.tries = 0;
    this.hint = new Array(this.answer.length).fill('_');
    this.revealedIndices = new Set([0, this.answer.length - 1]);
  }

  try(myAnswer) {
    if (myAnswer !== this.answer) {
      this.tries++;
      return [false, this.giveHint()];
    } else {
      return [true];
    }
  }

  giveHint() {
    if (this.tries === 1) {
      const answerLetterCount = this.answer.length - 1;
      this.hint[0] = this.answer[0];
      this.hint[answerLetterCount] = this.answer[answerLetterCount];
      this.revealedIndices.add(0);
      this.revealedIndices.add(answerLetterCount);
    } else if (this.tries > 1) {
      while (this.revealedIndices.size < this.answer.length) {
        const randomIndex = Math.floor(Math.random() * this.answer.length);
        if (!this.revealedIndices.has(randomIndex)) {
          this.hint[randomIndex] = this.answer[randomIndex];
          this.revealedIndices.add(randomIndex);
          break;
        }
      }
    }
    return this.hint.join('');
  }
}
