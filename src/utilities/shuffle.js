// Combine and shuffle two arrays
const shuffle = () => {
  const assets = [
    { image: '/assets/bug.png' },
    { image: '/assets/cat.png' },
    { image: '/assets/cow.png' },
    { image: '/assets/crab.png' },
    { image: '/assets/frog.png' },
    { image: '/assets/orca.png' },
    { image: '/assets/pelican.png' },
    { image: '/assets/unicorn.png' },
  ];
  return [...assets, ...assets]
    .sort(() => Math.random() - 0.5)
    .map((card) => ({ ...card, id: Math.random() }));
};

export default shuffle;