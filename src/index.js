import generateResponse from "./lib/generateResponse.js";
import promptSync from 'prompt-sync';

const prompt = promptSync();

const conversationHistory = [];

while (true) {
  const question = prompt("Ask a question >");
  const answer = await generateResponse({
    prompt: question,
    history: conversationHistory
  });

  console.log(`Dr. Lee Savio Beers, MD, FAAP: ${answer}\n`);

  conversationHistory.push(`Human: ${question}`, `Dr. Lee Savio Beers, MD, FAAP: ${answer}`)
}