import yargs from 'yargs';
import { hideBin } from 'yargs/helpers';
import { startLearning } from './learn.js';

yargs(hideBin(process.argv))
  .command(
    'learn',
    'Start a learning session',
    () => {},
    async (argv) => {
      console.log('Starting a learning session');
      startLearning();
    }
  )
  .demandCommand(1)
  .parse();
