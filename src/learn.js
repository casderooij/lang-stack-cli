import { input } from '@inquirer/prompts';
import { loadWords } from './db.js';

export async function startLearning() {
  const words = await loadWords();
  const amountOfWords = words.length;
  let index = 0;

  while (index < amountOfWords) {
    const word = words[index];
    const success = await nextWord(word);
    if (success) {
      index++;
    } else {
      await nextWord(word);
    }
  }

  return;
}

async function nextWord(word) {
  const { prompt, answer } = word;
  const userAnswer = await input({ message: prompt });

  if (userAnswer === answer) {
    console.clear();
    console.log('Correct!');
    return true;
  } else {
    console.clear();
    console.log('Fail, try again');
    return false;
  }
}
