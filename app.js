const jobs = [
    // Management
    {t:"Production managers and directors in manufacturing",r:6,g:"Management"},
    {t:"Production managers and directors in construction",r:6,g:"Management"},
    {t:"Managers and directors in the extraction of fossil fuels",r:6,g:"Management"},
    {t:"Bank, building society and post office managers",r:6,g:"Management"},
    {t:"Advertising and marketing directors",r:6,g:"Management"},
    {t:"Public relations and communications directors",r:6,g:"Management"},
    {t:"Estimating managers and directors",r:6,g:"Management"},
    {t:"Charitable organisation managers and directors",r:6,g:"Management"},
    {t:"Employee relations managers",r:6,g:"Management"},
    {t:"Information security directors",r:6,g:"Management"},
    {t:"Accounts directors",r:6,g:"Management"},
    {t:"Supply chain directors",r:6,g:"Management"},
    {t:"Managers and directors in retail and wholesale",r:6,g:"Management"},
    {t:"Social services managers and directors",r:6,g:"Management"},
    {t:"Managers and proprietors in agriculture and horticulture",r:6,g:"Management"},
    {t:"Café and restaurant managers and proprietors",r:6,g:"Management"},
    {t:"Publicans and managers of licensed premises",r:6,g:"Management"},
    {t:"Travel agency managers and proprietors",r:6,g:"Management"},
    {t:"Dental practice managers",r:6,g:"Management"},
    {t:"Day care managers",r:6,g:"Management"},
    {t:"Early education and childcare services proprietors",r:6,g:"Management"},
    {t:"Airport managers",r:6,g:"Management"},
    {t:"Managers in storage and warehousing",r:6,g:"Management"},
    {t:"Managers in logistics",r:6,g:"Management"},
    {t:"Facilities managers",r:6,g:"Management"},
    {t:"Garage managers and proprietors",r:6,g:"Management"},
    {t:"Beauty salon managers and proprietors",r:6,g:"Management"},
    {t:"Art gallery managers and directors",r:6,g:"Management"},
    {t:"Betting shop managers",r:6,g:"Management"},
    {t:"Hire services managers and proprietors",r:6,g:"Management"},
    {t:"Design consultancy directors",r:6,g:"Management"},
    {t:"Cleaning and hygiene services managers and proprietors",r:6,g:"Management"},

    // Science & Engineering
    {t:"Analytical chemists",r:6,g:"Science & Engineering"},
    {t:"Agricultural scientists",r:6,g:"Science & Engineering"},
    {t:"Biochemists",r:6,g:"Science & Engineering"},
    {t:"Geologists",r:6,g:"Science & Engineering"},
    {t:"Anthropologists",r:6,g:"Science & Engineering"},
    {t:"Sports scientists",r:6,g:"Science & Engineering"},
    {t:"Building and building services engineers",r:6,g:"Science & Engineering"},
    {t:"Automotive engineers (professional)",r:6,g:"Science & Engineering"},
    {t:"Laser engineers",r:6,g:"Science & Engineering"},
    {t:"Broadcast engineers (professional)",r:6,g:"Science & Engineering"},
    {t:"Chemical engineers",r:6,g:"Science & Engineering"},
    {t:"Aeronautical engineers (professional)",r:6,g:"Science & Engineering"},
    {t:"Engineering project managers and project engineers",r:6,g:"Science & Engineering"},
    {t:"Acoustic engineers",r:6,g:"Science & Engineering"},

    // IT & Technology
    {t:"IT project managers",r:6,g:"IT & Technology"},
    {t:"IT information managers",r:6,g:"IT & Technology"},
    {t:"Computer analysts and scientists",r:6,g:"IT & Technology"},
    {t:"Computer games designers",r:6,g:"IT & Technology"},
    {t:"Cyber operational defence specialists",r:6,g:"IT & Technology"},
    {t:"IT quality and testing professionals",r:6,g:"IT & Technology"},
    {t:"IT network professionals",r:6,g:"IT & Technology"},
    {t:"DevOps engineers",r:6,g:"IT & Technology"},
    {t:"Application designers",r:6,g:"IT & Technology"},
    {t:"Multimedia animators",r:6,g:"IT & Technology"},

    // Healthcare
    {t:"General practitioners",r:7,g:"Healthcare"},
    {t:"Anaesthetists",r:7,g:"Healthcare"},
    {t:"Physiotherapists",r:6,g:"Healthcare"},
    {t:"Occupational therapists",r:6,g:"Healthcare"},
    {t:"Speech and language therapists",r:6,g:"Healthcare"},
    {t:"Cognitive behavioural therapists",r:6,g:"Healthcare"},
    {t:"Clinical psychologists",r:7,g:"Healthcare"},
    {t:"Counselling psychologists",r:6,g:"Healthcare"},
    {t:"Acupuncturists",r:6,g:"Healthcare"},
    {t:"Midwifery nurses",r:6,g:"Healthcare"},
    {t:"Learning disability community nurses",r:6,g:"Healthcare"},
    {t:"Diabetes specialist nurses",r:6,g:"Healthcare"},
    {t:"Mental health nurse practitioners",r:6,g:"Healthcare"},
    {t:"Registered mental health nurses",r:6,g:"Healthcare"},
    {t:"Neonatal nurses",r:6,g:"Healthcare"},
    {t:"Other registered nursing professionals",r:6,g:"Healthcare"},
    {t:"Veterinarians",r:7,g:"Healthcare"},
    {t:"Pharmacists",r:6,g:"Healthcare"},
    {t:"Optometrists",r:6,g:"Healthcare"},
    {t:"Dentists and dental surgeons",r:7,g:"Healthcare"},
    {t:"Diagnostic radiographers and sonographers",r:6,g:"Healthcare"},
    {t:"Paramedics",r:6,g:"Healthcare"},
    {t:"Podiatrists",r:6,g:"Healthcare"},
    {t:"Audiologists",r:6,g:"Healthcare"},

    // Education
    {t:"Higher education teaching professionals",r:7,g:"Education"},
    {t:"Further education teaching professionals",r:6,g:"Education"},
    {t:"Teachers of art",r:6,g:"Education"},
    {t:"Primary education teaching professionals",r:6,g:"Education"},
    {t:"Nursery education teaching professionals",r:6,g:"Education"},
    {t:"Special and additional educational needs teachers and coordinators",r:6,g:"Education"},
    {t:"Teachers of English as a Foreign Language",r:6,g:"Education"},
    {t:"Adult education tutors",r:6,g:"Education"},
    {t:"Heads of further education establishments",r:6,g:"Education"},
    {t:"Education managers",r:6,g:"Education"},
    {t:"Educational advisers",r:6,g:"Education"},
    {t:"Early education and childcare services managers",r:6,g:"Education"},
    {t:"Bursars",r:6,g:"Education"},

    // Legal & Finance
    {t:"Barristers and advocates",r:7,g:"Legal & Finance"},
    {t:"Commercial solicitors and lawyers",r:7,g:"Legal & Finance"},
    {t:"Conveyancers",r:6,g:"Legal & Finance"},
    {t:"Auditors (qualified accountant)",r:6,g:"Legal & Finance"},
    {t:"Credit analysts",r:6,g:"Legal & Finance"},
    {t:"Taxation experts",r:6,g:"Legal & Finance"},
    {t:"Business analysts and consultants",r:6,g:"Legal & Finance"},
    {t:"Commercial managers",r:6,g:"Legal & Finance"},
    {t:"Actuaries and actuarial analysts",r:7,g:"Legal & Finance"},
    {t:"Intelligence analysts",r:6,g:"Legal & Finance"},
    {t:"Professional/chartered company secretaries",r:6,g:"Legal & Finance"},
    {t:"Policy officers",r:6,g:"Legal & Finance"},
    {t:"Business change managers",r:6,g:"Legal & Finance"},

    // Construction & Architecture
    {t:"Architects",r:7,g:"Construction & Architecture"},
    {t:"Chartered architectural technologists",r:6,g:"Construction & Architecture"},
    {t:"Quantity surveyors",r:6,g:"Construction & Architecture"},
    {t:"Building control surveyors",r:6,g:"Construction & Architecture"},
    {t:"Construction project and contract managers",r:6,g:"Construction & Architecture"},

    // Social Services
    {t:"Adult social workers",r:6,g:"Social Services"},
    {t:"Probation officers",r:6,g:"Social Services"},
    {t:"Youth work professionals",r:6,g:"Social Services"},
    {t:"Adoption officers",r:6,g:"Social Services"},

    // Creative & Media
    {t:"Librarians",r:6,g:"Creative & Media"},
    {t:"Archivists",r:6,g:"Creative & Media"},
    {t:"Garment technologists",r:6,g:"Creative & Media"},
    {t:"Compliance and regulatory professionals",r:6,g:"Creative & Media"},
    {t:"Environmental health professionals",r:6,g:"Creative & Media"},
    {t:"Newspaper, periodical and broadcast editors",r:6,g:"Creative & Media"},
    {t:"Broadcast journalists",r:6,g:"Creative & Media"},
    {t:"Press officers",r:6,g:"Creative & Media"},
    {t:"Advertising account managers",r:6,g:"Creative & Media"},
    {t:"Authors",r:6,g:"Creative & Media"},
    {t:"Actors",r:6,g:"Creative & Media"},
    {t:"Choreographers",r:6,g:"Creative & Media"},
    {t:"Composers and musical arrangers",r:6,g:"Creative & Media"},
    {t:"Art consultants",r:6,g:"Creative & Media"},
    {t:"Camera operators and videographers",r:6,g:"Creative & Media"},
    {t:"Interior designers",r:6,g:"Creative & Media"},
    {t:"Clothing and fashion consultants",r:6,g:"Creative & Media"},
    {t:"Industrial and product designers",r:6,g:"Creative & Media"},

    // Technical & Skilled Trades
    {t:"Biological laboratory technicians",r:5,g:"Technical & Trades"},
    {t:"Avionics technicians",r:5,g:"Technical & Trades"},
    {t:"Aerospace technicians",r:5,g:"Technical & Trades"},
    {t:"Building technicians",r:5,g:"Technical & Trades"},
    {t:"Quality assurance technicians",r:5,g:"Technical & Trades"},
    {t:"Planning, process and production technicians",r:5,g:"Technical & Trades"},
    {t:"School technicians",r:5,g:"Technical & Trades"},
    {t:"Architectural technicians",r:5,g:"Technical & Trades"},
    {t:"Games testers",r:5,g:"Technical & Trades"},
    {t:"IT user support technicians",r:5,g:"Technical & Trades"},
    {t:"Database administrators",r:5,g:"Technical & Trades"},
    {t:"Dispensing opticians",r:5,g:"Technical & Trades"},
    {t:"Pharmaceutical technicians",r:5,g:"Technical & Trades"},
    {t:"Cardiac technicians",r:5,g:"Technical & Trades"},
    {t:"Plumbers and heating and ventilation installers and repairers",r:3,g:"Technical & Trades"},
    {t:"Bedroom and kitchen fitters",r:3,g:"Technical & Trades"},
    {t:"Glass cutters and glaziers",r:3,g:"Technical & Trades"},
    {t:"Builders",r:3,g:"Technical & Trades"},
    {t:"Dry liners",r:3,g:"Technical & Trades"},
    {t:"Carpet and linoleum fitters",r:3,g:"Technical & Trades"},
    {t:"Painters and decorators",r:3,g:"Technical & Trades"},
    {t:"Carpenter and joinery supervisors",r:3,g:"Technical & Trades"},
    {t:"Curtain makers",r:3,g:"Technical & Trades"},
    {t:"Footwear makers and repairers",r:3,g:"Technical & Trades"},
    {t:"Costume makers",r:3,g:"Technical & Trades"},
    {t:"Embroiderers and sewers",r:3,g:"Technical & Trades"},
    {t:"Pre-press technicians",r:3,g:"Technical & Trades"},
    {t:"Digital printers",r:3,g:"Technical & Trades"},
    {t:"Print finishing and binding workers",r:3,g:"Technical & Trades"},
    {t:"Butchers",r:3,g:"Technical & Trades"},
    {t:"Bakers (excludes food process bakery workers and textile manufacturing)",r:3,g:"Technical & Trades"},
    {t:"Fishmongers",r:3,g:"Technical & Trades"},
    {t:"Chefs",r:3,g:"Technical & Trades"},
    {t:"Ceramic makers, decorators and finishers",r:3,g:"Technical & Trades"},
    {t:"Cabinet makers (excludes metal)",r:3,g:"Technical & Trades"},
    {t:"Florists",r:3,g:"Technical & Trades"},
    {t:"Basket makers (excludes wire goods mfr)",r:3,g:"Technical & Trades"},

    // Community & Support
    {t:"Antenatal teachers",r:4,g:"Community & Support"},
    {t:"Community workers",r:4,g:"Community & Support"},
    {t:"Child protection officers",r:4,g:"Community & Support"},
    {t:"Housing officers",r:4,g:"Community & Support"},
    {t:"Bereavement counsellors",r:4,g:"Community & Support"},
    {t:"Advocates (excludes solicitor advocates)",r:4,g:"Community & Support"},
    {t:"Higher level teaching assistants",r:4,g:"Community & Support"},
    {t:"Early education and childcare practitioners",r:4,g:"Community & Support"},
    {t:"Veterinary nurses",r:4,g:"Community & Support"},
    {t:"Police constable",r:4,g:"Community & Support"},
    {t:"Firefighters",r:4,g:"Community & Support"},
    {t:"Operational support grades",r:4,g:"Community & Support"},
    {t:"Coastguard",r:4,g:"Community & Support"},
    {t:"Art technicians (excludes education)",r:4,g:"Community & Support"},
    {t:"Group fitness instructors and personal trainers",r:4,g:"Community & Support"},
    {t:"Airline pilots",r:6,g:"Community & Support"},
    {t:"Ship and hovercraft captains and deck officers (excludes armed forces and fishing)",r:6,g:"Community & Support"},

    // Business & Administration
    {t:"Conveyancing professionals",r:4,g:"Business & Admin"},
    {t:"Commodity brokers and traders",r:4,g:"Business & Admin"},
    {t:"Insurance underwriters",r:4,g:"Business & Admin"},
    {t:"Accounting technicians",r:4,g:"Business & Admin"},
    {t:"Claims managers",r:4,g:"Business & Admin"},
    {t:"Energy advisers and assessors",r:4,g:"Business & Admin"},
    {t:"Importers and exporters",r:4,g:"Business & Admin"},
    {t:"Project support officers",r:4,g:"Business & Admin"},
    {t:"Data analysts",r:4,g:"Business & Admin"},
    {t:"Business support officers",r:4,g:"Business & Admin"},
    {t:"Buyers and procurement officers",r:4,g:"Business & Admin"},
    {t:"Business sales executives",r:4,g:"Business & Admin"},
    {t:"Merchandisers",r:4,g:"Business & Admin"},
    {t:"Advertising and marketing executives",r:4,g:"Business & Admin"},
    {t:"Estate agents",r:4,g:"Business & Admin"},
    {t:"Brand managers",r:4,g:"Business & Admin"},
    {t:"Conference managers and organisers",r:4,g:"Business & Admin"},
    {t:"Electoral services officers",r:4,g:"Business & Admin"},
    {t:"Equality and diversity officers",r:4,g:"Business & Admin"},
    {t:"Careers advisers and coaches",r:4,g:"Business & Admin"},
    {t:"Information technology trainers",r:4,g:"Business & Admin"},
    {t:"Business coaches",r:4,g:"Business & Admin"},
    {t:"Animal health inspectors and officers",r:4,g:"Business & Admin"},
    {t:"Asbestos safety officers",r:4,g:"Business & Admin"},
    {t:"National government benefits officers",r:4,g:"Business & Admin"},
    {t:"Local government benefits officers",r:4,g:"Business & Admin"},
    {t:"Charity administrators",r:4,g:"Business & Admin"},
    {t:"Credit controllers",r:4,g:"Business & Admin"},
    {t:"Accounting clerks and bookkeepers",r:4,g:"Business & Admin"},
    {t:"Finance officers",r:4,g:"Business & Admin"},
    {t:"Box office assistants",r:4,g:"Business & Admin"},
    {t:"Claims handlers",r:4,g:"Business & Admin"},
    {t:"Transport and distribution clerks and assistants",r:4,g:"Business & Admin"},
    {t:"Office managers",r:4,g:"Business & Admin"},
    {t:"Call centre managers",r:4,g:"Business & Admin"},
    {t:"Sales administrators",r:4,g:"Business & Admin"},
    {t:"Business administrators",r:4,g:"Business & Admin"},
    {t:"Company secretaries and administrators",r:4,g:"Business & Admin"},
    {t:"Farm secretaries",r:4,g:"Business & Admin"},
    {t:"Agricultural contractors",r:4,g:"Business & Admin"},
    {t:"Horticultural trades",r:4,g:"Business & Admin"},
    {t:"Garden designers",r:4,g:"Business & Admin"},
    {t:"Groundsmen and greenkeepers",r:4,g:"Business & Admin"},
    {t:"Arborists",r:4,g:"Business & Admin"},

    // Manufacturing & Construction
    {t:"Metal fabricators and finishers",r:3,g:"Manufacturing & Construction"},
    {t:"Die casters",r:3,g:"Manufacturing & Construction"},
    {t:"Braziers and solderers",r:3,g:"Manufacturing & Construction"},
    {t:"Pipe fitters",r:3,g:"Manufacturing & Construction"},
    {t:"Computer numerical control (CNC) machine setters and setter-operators",r:3,g:"Manufacturing & Construction"},
    {t:"Tool fitters",r:3,g:"Manufacturing & Construction"},
    {t:"Automation maintenance technicians",r:3,g:"Manufacturing & Construction"},
    {t:"Calibration and precision instrument technicians",r:3,g:"Manufacturing & Construction"},
    {t:"Air-conditioning and refrigeration installers and repairers",r:3,g:"Manufacturing & Construction"},
    {t:"Auto electricians",r:3,g:"Manufacturing & Construction"},
    {t:"Vehicle body builders and repairers",r:3,g:"Manufacturing & Construction"},
    {t:"Vehicle paint technicians",r:3,g:"Manufacturing & Construction"},
    {t:"Aircraft maintenance and related trades",r:3,g:"Manufacturing & Construction"},
    {t:"Boat and ship builders and repairers",r:3,g:"Manufacturing & Construction"},
    {t:"Rail and rolling stock builders and repairers",r:3,g:"Manufacturing & Construction"},
    {t:"Electric vehicle charging point installers",r:3,g:"Manufacturing & Construction"},
    {t:"Telecoms and related network installers and repairers",r:3,g:"Manufacturing & Construction"},
    {t:"TV, video and audio servicers and repairers",r:3,g:"Manufacturing & Construction"},
    {t:"Computer system and equipment installers and servicers",r:3,g:"Manufacturing & Construction"},
    {t:"Security system installers and repairers",r:3,g:"Manufacturing & Construction"},
    {t:"Electrical service and maintenance mechanics and repairers",r:3,g:"Manufacturing & Construction"},
    {t:"Broadcast and communications technicians",r:3,g:"Manufacturing & Construction"},
    {t:"Skilled metal, electrical and electronic trades supervisors",r:3,g:"Manufacturing & Construction"},
    {t:"Steel erectors",r:3,g:"Manufacturing & Construction"},
    {t:"Dry stone wallers",r:3,g:"Manufacturing & Construction"},
    {t:"Bricklayers",r:3,g:"Manufacturing & Construction"},
    {t:"Felt and flat roofers",r:3,g:"Manufacturing & Construction"},

    // Other Services
    {t:"Cover supervisors",r:3,g:"Other Services"},
    {t:"Behaviour support assistants",r:3,g:"Other Services"},
    {t:"Childminders",r:3,g:"Other Services"},
    {t:"Playworkers",r:3,g:"Other Services"},
    {t:"Animal boarding assistants",r:3,g:"Other Services"},
    {t:"Blood donor carers and phlebotomists",r:3,g:"Other Services"},
    {t:"Ambulance staff (excluding paramedics)",r:3,g:"Other Services"},
    {t:"Dental nurses",r:3,g:"Other Services"},
    {t:"Foster carers",r:3,g:"Other Services"},
    {t:"Flight attendants",r:3,g:"Other Services"},
    {t:"Railway station assistants",r:3,g:"Other Services"},
    {t:"Police community support officers",r:3,g:"Other Services"},
    {t:"Market and street traders and assistants",r:3,g:"Other Services"},
    {t:"Antique dealers",r:3,g:"Other Services"},
    {t:"Sales supervisors - retail and wholesale",r:3,g:"Other Services"},
    {t:"Field and telephone interviewers",r:3,g:"Other Services"},
    {t:"Customer service supervisors",r:3,g:"Other Services"},
    {t:"Chemical and related process operatives",r:3,g:"Other Services"},
    {t:"Boiler operatives",r:3,g:"Other Services"},
    {t:"Water and sewerage distribution operatives",r:3,g:"Other Services"},
    {t:"Routine inspectors and testers",r:3,g:"Other Services"},
    {t:"Cycling instructors",r:3,g:"Other Services"},
    {t:"Marine and waterways transport operatives",r:3,g:"Other Services"},
    {t:"Retail order pickers",r:3,g:"Other Services"}
];

function renderJobs(f=jobs) {
    const r = document.getElementById('results-list');
    r.innerHTML = f.length ? 
        f.map(j => `
            <div class="job-card">
                <h3>${j.t}</h3>
                <div class="job-meta">
                    <span class="rqf-badge">RQF ${j.r}</span>
                    <span class="group-badge">${j.g}</span>
                </div>
            </div>
        `).join('') : '<div class="no-results">No matching jobs found</div>';
    document.querySelector('.count').textContent = `${f.length} jobs found`;
}

document.addEventListener('DOMContentLoaded', () => {
    // Initialize filters
    const gf = document.getElementById('job-group-filter');
    [...new Set(jobs.map(j => j.g))].forEach(g => {
        gf.innerHTML += `<option value="${g}">${g}</option>`;
    });

    // Initialize charts
    const rqfCtx = document.getElementById('rqfChart').getContext('2d');
    const groupCtx = document.getElementById('groupChart').getContext('2d');
    
    const rqfChart = new Chart(rqfCtx, {
        type: 'bar',
        data: {
            labels: ['Level 2', 'Level 3', 'Level 4', 'Level 5', 'Level 6', 'Level 7'],
            datasets: [{
                label: 'Jobs by RQF Level',
                data: [0, 0, 0, 0, 0, 0],
                backgroundColor: '#3b82f6',
                borderColor: '#1d4ed8',
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });

    const groupChart = new Chart(groupCtx, {
        type: 'pie',
        data: {
            labels: [...new Set(jobs.map(j => j.g))],
            datasets: [{
                label: 'Jobs by Group',
                data: new Array([...new Set(jobs.map(j => j.g))].length).fill(0),
                backgroundColor: [
                    '#3b82f6', '#10b981', '#f59e0b', '#ef4444', '#8b5cf6',
                    '#ec4899', '#14b8a6', '#f97316', '#64748b', '#84cc16'
                ],
                borderWidth: 1
            }]
        },
        options: {
            responsive: true
        }
    });

    const updateCharts = (filteredJobs) => {
        // Update RQF chart
        const rqfCounts = [0, 0, 0, 0, 0, 0];
        filteredJobs.forEach(job => {
            if (job.r >= 2 && job.r <= 7) {
                rqfCounts[job.r - 2]++;
            }
        });
        rqfChart.data.datasets[0].data = rqfCounts;
        rqfChart.update();

        // Update Group chart
        const groupCounts = {};
        [...new Set(jobs.map(j => j.g))].forEach(g => {
            groupCounts[g] = filteredJobs.filter(j => j.g === g).length;
        });
        groupChart.data.datasets[0].data = Object.values(groupCounts);
        groupChart.update();
    };

    const filter = () => {
        const r = document.getElementById('rqf-filter').value;
        const g = document.getElementById('job-group-filter').value;
        const s = document.getElementById('search').value.toLowerCase();
        
        const filteredJobs = jobs.filter(j => 
            (!r || j.r == r) && 
            (!g || j.g === g) && 
            (!s || j.t.toLowerCase().includes(s))
        );
        
        renderJobs(filteredJobs);
        updateCharts(filteredJobs);
    };

    ['rqf-filter', 'job-group-filter', 'search'].forEach(id => {
        document.getElementById(id).addEventListener('input', filter);
    });

    // Initial render
    renderJobs(jobs);
    updateCharts(jobs);
});
