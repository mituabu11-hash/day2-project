// Load the fruits from the JSON file and show them as cards
async function showFruits() {
  const box = document.querySelector('#fruit-list');
  try {
    const response = await fetch('data/fruits.json');
    if (!response.ok) throw new Error('HTTP ' + response.status);
    const fruits = await response.json();

    box.innerHTML = '';
    for (const fruit of fruits) {
      const card = document.createElement('article');
      card.className = 'card';
      card.innerHTML = `<h3>${fruit.name}</h3>
        <p>${fruit.description}</p>
        <p><strong>Season:</strong> ${fruit.season}</p>`;
      box.append(card);
    }
  } catch (error) {
    box.textContent = 'Sorry, the fruits could not be loaded.';
    console.error(error);
  }
}

showFruits();
