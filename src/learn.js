import { input } from '@inquirer/prompts';
import { loadWords } from './db.js';

export async function startLearning() {
  const words = await loadWords();
  let index = 0;

  await learnWord(words[index]);
}

async function learnWord(word) {
  const { prompt, answer } = word;
  const userAnswer = await input({ message: prompt });

  if (userAnswer === answer) {
    console.log('Correct!');
    return true;
  } else {
    console.clear();
    console.log('Fail, try again');
    learnWord(word);
  }
}
