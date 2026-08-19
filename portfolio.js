const initialProjects=[
 {title:'Warm Minimal Residence',category:'living-room',label:'Living room',image:'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1100&q=85'},
 {title:'Quiet Retreat',category:'bedroom',label:'Bedroom',image:'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1100&q=85'},
 {title:'Modern Family Kitchen',category:'kitchen',label:'Kitchen',image:'https://images.unsplash.com/photo-1556912172-45b7abe8b7e1?auto=format&fit=crop&w=1100&q=85'},
 {title:'Gathering Space',category:'dining',label:'Dining',image:'https://images.unsplash.com/photo-1617806118233-18e1de247200?auto=format&fit=crop&w=1100&q=85'},
 {title:'Sacred Corner',category:'pooja-room',label:'Pooja room',image:'https://images.unsplash.com/photo-1606074280798-2dabb75ce10c?auto=format&fit=crop&w=1100&q=85'}
];
const getProjects=()=>JSON.parse(localStorage.getItem('livora-projects')||'null')||initialProjects;
const grid=document.querySelector('#portfolio-grid');
function render(filter='all'){const shown=getProjects().filter(p=>filter==='all'||p.category===filter);grid.innerHTML=shown.length?shown.map(p=>`<article class="portfolio-card"><img src="${p.image}" alt="${p.title}"><div><p>${p.label}</p><h2>${p.title}</h2></div></article>`).join(''):'<p class="empty">No projects in this collection yet.</p>'}
document.querySelectorAll('.filters button').forEach(b=>b.addEventListener('click',()=>{document.querySelector('.filters .active').classList.remove('active');b.classList.add('active');render(b.dataset.filter)}));render();
