import { input } from '@inquirer/prompts';
import { loadWords } from './db.js';
import { Card } from './card.js';

export async function startLearning() {
  const words = await loadWords();
  const amountOfWords = words.length;
  let index = 0;

  while (index < amountOfWords) {
    const word = words[index];
    const card = new Card(word.prompt, word.answer);

    while (true) {
      const userAnswer = await input({ message: word.prompt });
      const [success, hint] = card.try(userAnswer);

      console.clear();
      if (success) {
        console.log('Correct!');
        index++;
        break;
      } else {
        console.log(`Hint: ${hint}`);
      }
    }
  }

  return;
}
