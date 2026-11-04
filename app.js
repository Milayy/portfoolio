const copy = {
  et: {
    skip:'Liigu sisu juurde',menu:'Menüü',navAbout:'Minust',navSkills:'Oskused',navWork:'Projektid',navCv:'CV',navLinks:'IT-linkid',navContact:'Kontakt',
    heroEyebrow:'Rakvere Ametikool · IT25',heroLine1:'Tere! Mina',heroLine2:'olen ',heroLead:'Õpin Rakvere Ametikooli IT25 rühmas. Siin on minu oskused, CV ja kasulikud IT-lingid.',meetMila:'Minust lähemalt',exploreLinks:'Vaata IT-linke',heroNote:'Alustasin õpinguid 2025. aastal.',artCaption:'MILA / NADEZDA / MELDER',portfolioLabel:'PORTFOOLIO',heroPeriod:'2025 — PRAEGU',
    aboutLabel:'MINUST',aboutKicker:'LÜHIDALT',aboutTitle:'Mida ma praegu õpin.',aboutCopy:'Olen Mila Nadezda Melder. Õpin Rakvere Ametikoolis IT25 rühmas alates 2025. aastast. Koolis tegelen muu hulgas Windowsi, arvutivõrkude ja Linuxiga.',factSchool:'Kool',factGroup:'Õppegrupp',factSince:'Õpingute algus',asideText:'Kui saan mõne töö valmis, lisan selle projektide alla.',
    skillsLabel:'OSKUSED',skillsKicker:'TEEMAD, MILLEGA TEGELEN',skillsTitle:'Arvutid,<br><em>võrgud ja skriptid.</em>',skillsIntro:'Neid asju olen koolis õppinud ja harjutanud.',skillPowerShell:'Harjutan skripte ja Windowsi haldamist.',skillCisco:'Teen võrkudega harjutusi Cisco Packet Traceris.',hardwareTitle:'Arvutite riistvara',skillHardware:'Panen arvuteid kokku, võtan lahti ja parandan.',skillLinux:'Kasutan Linuxit ja õpin Bashi skripte kirjutama.',
    workLabel:'PROJEKTID',workKicker:'KOOLITÖÖD JA MUUD PROJEKTID',workTitle:'Minu<br>projektid.',workTag:'LISAN HILJEM',workCardTitle:'Praegu siin projekte ei ole.',workCardCopy:'Kui saan mõne koolitöö valmis, panen siia pildid ja lühikese selgituse.',githubVisit:'Vaata GitHubi profiili',
    cvKicker:'ÕPINGUD, OSKUSED, KONTAKT',cvTitle:'Lühike<br><em>CV.</em>',cvIntro:'Praegu on siin minu õpingud, oskused ja kontaktid. Täpsema CV lisan hiljem.',cvRole:'IT õpilane · Rakvere Ametikool',cvEducation:'Haridus',now:'praegu',cvSkills:'Oskused',cvSkillsValue:'PowerShell, Cisco Packet Tracer,<br>arvutite riistvara, Linux / Bash',cvContacts:'Kontakt',cvFullLater:'Täielik CV tuleb hiljem.',
    linksLabel:'IT-LINGID',linksKicker:'PROGRAMMID JA ÕPPEMATERJALID',linksTitle:'Kasulikud<br>IT-linkid.',linksIntro:'Programmid, juhendid ja õppematerjalid ühes kohas.',filterAll:'Kõik <span>18</span>',filterWindows:'Windows',filterVirtual:'Virtualiseerimine',filterReference:'Teadmised',filterCommunity:'Kogukond',filterLearning:'Õppimine',
    contactKicker:'KONTAKT',contactTitle:'Võta ühendust<span>.</span>',contactCopy:'Kirjuta mulle või helista.',footerSchool:'Rakvere Ametikool · IT25',backTop:'Tagasi üles ↑'
  },
  en: {
    skip:'Skip to content',menu:'Menu',navAbout:'About',navSkills:'Skills',navWork:'Projects',navCv:'CV',navLinks:'IT links',navContact:'Contact',
    heroEyebrow:'Rakvere Ametikool · IT25',heroLine1:'Hi! I’m',heroLine2:' ',heroLead:'I study in the IT25 group at Rakvere Ametikool. Here are my skills, CV and useful IT links.',meetMila:'About me',exploreLinks:'See IT links',heroNote:'I started my studies in 2025.',artCaption:'MILA / NADEZDA / MELDER',portfolioLabel:'PORTFOLIO',heroPeriod:'2025 — PRESENT',
    aboutLabel:'ABOUT',aboutKicker:'ABOUT ME',aboutTitle:'What I am learning.',aboutCopy:'I am Mila Nadezda Melder. I have studied in the IT25 group at Rakvere Ametikool since 2025. At school I work with Windows, computer networks and Linux, among other things.',factSchool:'School',factGroup:'Study group',factSince:'Studies began',asideText:'When I finish a project, I’ll add it to the projects section.',
    skillsLabel:'SKILLS',skillsKicker:'WHAT I WORK WITH',skillsTitle:'Computers,<br><em>networks & scripts.</em>',skillsIntro:'These are the things I have studied and practised at school.',skillPowerShell:'I practise scripts and Windows administration.',skillCisco:'I do networking exercises in Cisco Packet Tracer.',hardwareTitle:'PC hardware',skillHardware:'I assemble, disassemble and repair computers.',skillLinux:'I use Linux and am learning to write Bash scripts.',
    workLabel:'PROJECTS',workKicker:'SCHOOL WORK & OTHER PROJECTS',workTitle:'My<br>projects.',workTag:'TO BE ADDED',workCardTitle:'No projects here yet.',workCardCopy:'When I finish a school assignment, I’ll add pictures and a short explanation here.',githubVisit:'Visit my GitHub profile',
    cvKicker:'STUDIES, SKILLS, CONTACT',cvTitle:'A short<br><em>CV.</em>',cvIntro:'For now, this shows my studies, skills and contact details. I’ll add a more detailed CV later.',cvRole:'IT student · Rakvere Ametikool',cvEducation:'Education',now:'present',cvSkills:'Skills',cvSkillsValue:'PowerShell, Cisco Packet Tracer,<br>PC hardware, Linux / Bash',cvContacts:'Contact',cvFullLater:'Full CV coming later.',
    linksLabel:'IT LINKS',linksKicker:'SOFTWARE & LEARNING MATERIALS',linksTitle:'Useful<br>IT links.',linksIntro:'Software, guides and learning materials in one place.',filterAll:'All <span>18</span>',filterWindows:'Windows',filterVirtual:'Virtualisation',filterReference:'References',filterCommunity:'Community',filterLearning:'Learning',
    contactKicker:'CONTACT',contactTitle:'Get in touch<span>.</span>',contactCopy:'Email me or call me.',footerSchool:'Rakvere Ametikool · IT25',backTop:'Back to top ↑'
  }
};

const resources = [
  {id:'windows',icon:'▣',title:{et:'Windows ja draiverid',en:'Windows & drivers'},links:[
    ['NVIDIA draiverid','NVIDIA drivers','https://www.nvidia.com/en-us/drivers/'],
    ['AMD draiverid','AMD drivers','https://www.amd.com/en-us/support/download/drivers.html'],
    ['Intel draiverid','Intel drivers','https://www.intel.com/content/www/us/en/download-center/home.html'],
    ['Ninite: programmide paigaldus','Ninite: install applications','https://ninite.com/'],
    ['Windows 10 allalaadimine','Download Windows 10','https://www.microsoft.com/en-us/software-download/windows10'],
    ['Windows 11 allalaadimine','Download Windows 11','https://www.microsoft.com/en-us/software-download/windows11'],
    ['Windowsi versioonide võrdlus','Compare Windows versions','https://www.microsoft.com/en-us/windows/compare-windows-11-home-vs-pro-versions#tabs1-1'],
    ['Windows 11 nõuded','Windows 11 specifications','https://www.microsoft.com/en-us/windows/windows-11-specifications#table1']
  ]},
  {id:'linux',icon:'⌘',title:{et:'Linux',en:'Linux'},links:[
    ['Ubuntu allalaadimine','Download Ubuntu','https://ubuntu.com/download/desktop'],
    ['Linux Minti allalaadimine','Download Linux Mint','https://linuxmint.com/download.php']
  ]},
  {id:'virtual',icon:'◇',title:{et:'Virtualiseerimine',en:'Virtualisation'},links:[
    ['VirtualBox','VirtualBox','https://www.virtualbox.org/'],
    ['VMware Workstation','VMware Workstation','https://www.vmware.com/products/desktop-hypervisor/workstation-and-fusion'],
    ['Hyper-V juhend','Hyper-V guide','https://learn.microsoft.com/en-us/windows-server/virtualization/hyper-v/get-started/install-hyper-v?tabs=powershell&pivots=windows']
  ]},
  {id:'reference',icon:'✳',title:{et:'Mõisted ja sõnastikud',en:'Terms & references'},links:[
    ['TechTerms','TechTerms','https://techterms.com/'],
    ['Eesti IT-terminite sõnastik','Estonian IT terminology dictionary','https://arhiiv.eki.ee/dict/its/']
  ]},
  {id:'community',icon:'✦',title:{et:'Uudised ja kogukond',en:'News & community'},links:[
    ['Hinnavaatlus','Hinnavaatlus','https://www.hinnavaatlus.ee/'],
    ['ITmaailm','ITmaailm','https://itmaailm.ee/category/technology/']
  ]},
  {id:'learning',icon:'↗',title:{et:'Õppimine',en:'Learning'},links:[
    ['Cisco Networking Academy','Cisco Networking Academy','https://www.netacad.com/']
  ]}
];

const htmlKeys = new Set(['skillsTitle','workTitle','cvTitle','cvSkillsValue','linksTitle','contactTitle','filterAll']);
let language = 'et';
let filter = 'all';

function renderResources(){
  const grid = document.querySelector('#resource-grid');
  grid.replaceChildren();
  resources.filter(group => filter === 'all' || group.id === filter).forEach((group,index) => {
    const card = document.createElement('article'); card.className = 'resource-card';
    const head = document.createElement('div'); head.className = 'resource-card-head';
    const number = document.createElement('span'); number.textContent = String(index+1).padStart(2,'0')+' / IT';
    const icon = document.createElement('span'); icon.setAttribute('aria-hidden','true'); icon.textContent = group.icon;
    head.append(number,icon);
    const heading = document.createElement('h3'); heading.textContent = group.title[language];
    const list = document.createElement('ul');
    group.links.forEach(([et,en,url]) => {
      const item = document.createElement('li'); const link = document.createElement('a');
      link.href = url; link.target = '_blank'; link.rel = 'noopener noreferrer';
      const label = document.createElement('span'); label.textContent = language === 'et' ? et : en;
      const arrow = document.createElement('span'); arrow.setAttribute('aria-hidden','true'); arrow.textContent = '↗';
      link.append(label,arrow); item.append(link); list.append(item);
    });
    card.append(head,heading,list); grid.append(card);
  });
}

function setLanguage(next){
  language = next; document.documentElement.lang = next;
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.dataset.i18n; const value = copy[next][key];
    if(value === undefined) return;
    if(htmlKeys.has(key)) el.innerHTML = value; else el.textContent = value;
  });
  document.querySelector('.menu-toggle').setAttribute('aria-label',copy[next].menu);
  document.querySelector('.wordmark').setAttribute('aria-label',next==='et'?'Mila Nadezda Melder — avaleht':'Mila Nadezda Melder — home');
  document.querySelector('#main-nav').setAttribute('aria-label',next==='et'?'Peamenüü':'Main navigation');
  document.querySelector('.hero-art').setAttribute('aria-label',next==='et'?'Mila nimega abstraktne graafiline kujundus':'Abstract graphic featuring Mila’s initials');
  document.querySelectorAll('[data-lang]').forEach(button => button.setAttribute('aria-pressed',String(button.dataset.lang === next)));
  document.title = next==='et'?'Mila portfoolio':'Mila portfolio';
  document.querySelector('meta[name="description"]').content = next==='et'?'Mila portfoolio: IT25 õpingud, oskused, CV ja kasulikud IT-lingid.':'Mila portfolio: IT25 studies, skills, CV and useful IT links.';
  renderResources();
  try{localStorage.setItem('mila-portfolio-language',next)}catch{}
}

document.querySelectorAll('[data-lang]').forEach(button => button.addEventListener('click',() => setLanguage(button.dataset.lang)));
document.querySelectorAll('[data-filter]').forEach(button => button.addEventListener('click',() => {
  filter = button.dataset.filter;
  document.querySelectorAll('[data-filter]').forEach(b => {b.classList.toggle('active',b===button);b.setAttribute('aria-pressed',String(b===button))});
  renderResources();
}));
const menu = document.querySelector('.menu-toggle');
menu.addEventListener('click',() => {const open = menu.getAttribute('aria-expanded') !== 'true'; menu.setAttribute('aria-expanded',String(open)); document.querySelector('#main-nav').classList.toggle('open',open)});
document.querySelectorAll('#main-nav a').forEach(link => link.addEventListener('click',() => {menu.setAttribute('aria-expanded','false');document.querySelector('#main-nav').classList.remove('open')}));
document.querySelector('#year').textContent = new Date().getFullYear();
let saved = 'et'; try{saved=localStorage.getItem('mila-portfolio-language') === 'en' ? 'en' : 'et'}catch{}
setLanguage(saved);
