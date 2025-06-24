const quotes = [
  "I'm gonna make him an offer he can't refuse.",
  "A man who doesn't spend time with his family can never be a real man.",
  "Revenge is a dish best served cold.",
  "Never tell anyone outside the family what you're thinking.",
  "Great men are not born great, they grow great.",
  "Women and children can be careless. But not men.",
  "A friend should always underestimate your virtues and an enemy overestimate your faults.",
  "Finance is a gun. Politics is knowing when to pull the trigger.",
  "It's not personal, Sonny. It's strictly business.",
  "You can act like a man! What's the matter with you?",
  "Someday, and that day may never come, I will call upon you to do a service for me.",
  "I have a sentimental weakness for my children, and I spoil them, as you can see.",
  "Time erodes gratitude faster than it does beauty.",
  "Don't ever take sides with anyone against the family.",
  "A man with a briefcase can steal more than a hundred men with guns.",
  "Keep your friends close, but your enemies closer.",
  "Power wears out those who do not have it.",
  "Falling in love was never part of the plan.",
  "Never hate your enemies — it affects your judgment.",
  "The strength of a family, like the strength of an army, lies in its loyalty."
];

function generateQuote() {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  document.getElementById('quote').textContent = `"${quotes[randomIndex]}"`;
}
