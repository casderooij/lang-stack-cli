import { input } from '@inquirer/prompts';
import { loadWords } from './db.js';

export async function startLearning() {
  const words = await loadWords();
  let index = 0;

  const success = await learnWord(words[index]);
  if (success) {
    await learnWord(words[index++]);
  }
}

async function learnWord(word) {
  const { prompt, answer } = word;
  const userAnswer = await input({ message: prompt });

  if (userAnswer === answer) {
    console.log('Correct!');
    return true;
  } else {
    console.log('Fail, try again');
    learnWord(word);
  }
}
