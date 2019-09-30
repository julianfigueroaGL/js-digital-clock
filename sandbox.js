// //const before = new Date('02/01/2019 7:30:59');
// const before = new Date('February 1 2019 7:30:59');
// const now = new Date();

// const diff = now.getTime() - before.getTime();
// // const diff = now - before;

// console.log('Diff: ', diff);

// const mins = Math.round(diff / 1000 / 60);
// const hours = Math.round(mins / 60);
// const days = Math.round(hours / 24);

// console.log(`the before date was ${mins} mins ago`);
// console.log(`the before date was ${hours} hours ago`);
// console.log(`the before date was ${days} days ago`);

// // converting timestamps to dates
// const timestamp = 1675938474990;
// console.log('New Date: ', new Date(timestamp));

/* 

// Digital Clock 

*/
const clock = document.querySelector('.clock');

const tick = () => {
	const now = new Date();

	const h = now.getHours();
	const m = now.getMinutes();
	const s = now.getSeconds();

	const html = `
    <span>${h}</span> :
    <span>${m}</span> :
    <span>${s}</span>
  `;

	clock.innerHTML = html;
};

setInterval(tick, 1000);
