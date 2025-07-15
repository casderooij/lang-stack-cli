// Handle Inquire exit error
process.on('uncaughtException', (error) => {
  if (error instanceof Error && error.name === 'ExitPromptError') {
    console.log('👋 bye bye!');
  } else {
    // Rethrow unknown errors
    throw error;
  }
});
