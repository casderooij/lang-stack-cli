import { input } from '@inquirer/prompts';
import { loadWords } from './db.js';
import { Card } from './card.js';

export async function startLearning() {
  const words = await loadWords();
  const amountOfWords = words.length;
  let index = 0;

  while (index < amountOfWords - 1) {
    const word = words[index];
    const card = new Card(word.prompt, word.answer);

    const userAnswer = await input({ message: word.prompt });
    const [success, hint] = card.try(userAnswer);
    if (success) {
      console.clear();
      console.log('Correct!');
      index++;
      break;
    } else {
      console.clear();
      console.log(`Hint: ${hint}`);
    }
  }

  return;
}

async function nextWord(word) {
  const { prompt, answer } = word;
  const card = new Card(prompt, answer);

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
