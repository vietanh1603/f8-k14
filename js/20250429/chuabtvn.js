const colors = Array.from({ length: 5 }, (_, i) => ({
    id: i + 1,
    name: `color ${i + 1}`
}));

const flowers = Array.from({ length: 5 }, (_, i) => ({
    id: i + 1,
    name: `flower ${i + 1}`,
    colorId: Math.floor(Math.random() * 5) + 1 // random colorId between 1 and 2000
}));
// sort flower bt color




// bai 2
