import './App.css'

function App() {
  const profile = {
    name: 'LOUIS DENGYEL J. MOYA',
    role: 'Service Desk Engineer',
    location: 'Molino, Bacoor, Cavite',
    phone: '+63 993 341 0893',
    email: 'louismoya2@gmail.com',
    linkedin: 'https://www.linkedin.com/in/moyal02/',
    summary:
      'I provide timely and effective technical support across hardware, software, network, and system environments. I troubleshoot and optimize systems with a strong focus on reliability, communication, and customer service. I also enjoy applying automation and AI-assisted workflows to improve IT operations.',
  }

  const experience = [
    {
      company: 'IT By Design',
      title: 'System Engineer',
      period: 'Sep 2025 - Jan 2026',
      location: 'BGC',
      highlights: [
        'Administered enterprise IT tools including Office 365, Active Directory, Azure AD, Exchange Admin, and SharePoint.',
        'Managed user lifecycle processes such as onboarding, offboarding, account modifications, and GPO/security group operations.',
        'Supported workflows with RMM tools including ServiceNow, ConnectWise Manage, Automate, Service Manager, and BitLocker recovery.',
        'Enforced security protocols including Google/Microsoft/Okta MFA, VPN, and firewall management.',
      ],
    },
    {
      company: 'DXC Technology',
      title: 'Analyst III Infrastructure Services',
      period: 'Jan 2022 - Sep 2025',
      location: 'Quezon City',
      highlights: [
        'Resolved customer IT issues through online ticketing and prompt email responses.',
        'Escalated complex incidents with clear and detailed technical reports.',
        'Maintained high service standards by addressing client concerns quickly and professionally.',
      ],
    },
    {
      company: 'Teravision',
      title: 'Web Development Team Leader',
      period: 'College OJT - 486 Hours',
      location: '',
      highlights: [
        'Led web development planning, implementation, and deployment.',
        'Coordinated timelines and communication between team members.',
        'Mentored teammates and supported troubleshooting of technical issues.',
      ],
    },
    {
      company: 'Creotec',
      title: 'PCB Inspector',
      period: 'Senior High School - 115 Hours',
      location: '',
      highlights: [
        'Identified PCB defects such as soldering issues, component misalignment, and physical damage.',
        'Evaluated boards against quality standards and design specifications.',
      ],
    },
  ]

  const education = [
    {
      school: 'Cavite State University - Imus Campus',
      program: 'Information Technology',
      year: '2022',
      credential: 'Bachelor of Science',
    },
    {
      school: 'University of Perpetual Help System Dalta - Molino',
      program: 'Science, Technology, Engineering and Mathematics',
      year: '2018',
      credential: 'Senior High',
    },
  ]

  const skills = [
    'Customer Service',
    'Active Directory',
    'Office 365 Admin Center',
    'Hardware/Software Troubleshooting',
    'Video Editing',
    'PC Building',
    'English Proficient',
    'Email Filtering',
    'Firewall',
    'RMM (Remote Monitoring and Management)',
  ]

  const interests = ['Gaming', 'AI', 'Arduino', 'Technology', 'Tabletop Games']

  return (
    <main className="site">
      <section className="hero-card">
        <div>
          <p className="eyebrow">Personal Website</p>
          <h1>{profile.name}</h1>
          <p className="role">{profile.role}</p>
          <p className="summary">{profile.summary}</p>
          <div className="contact-row">
            <span>{profile.location}</span>
            <a href={`tel:${profile.phone.replace(/\s/g, '')}`}>{profile.phone}</a>
            <a href={`mailto:${profile.email}`}>{profile.email}</a>
            <a href={profile.linkedin} target="_blank" rel="noreferrer">
              LinkedIn
            </a>
          </div>
        </div>
        <div className="avatar" aria-hidden="true">
          <span>LM</span>
        </div>
      </section>

      <section className="content-grid">
        <div className="panel">
          <h2>Experience</h2>
          {experience.map((job) => (
            <article key={`${job.company}-${job.title}`} className="experience-item">
              <header>
                <h3>{job.company}</h3>
                <div className="meta">
                  <span>{job.title}</span>
                  <span>{job.period}</span>
                  {job.location && <span>{job.location}</span>}
                </div>
              </header>
              <ul>
                {job.highlights.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        <div className="panel side">
          <h2>Skills</h2>
          <ul className="tag-list">
            {skills.map((skill) => (
              <li key={skill}>{skill}</li>
            ))}
          </ul>

          <h2>Interests</h2>
          <ul className="tag-list">
            {interests.map((interest) => (
              <li key={interest}>{interest}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="panel">
        <h2>Education</h2>
        <div className="education-grid">
          {education.map((item) => (
            <article key={item.school} className="education-item">
              <h3>{item.school}</h3>
              <p>{item.program}</p>
              <p>{item.credential}</p>
              <p>Year of Graduation: {item.year}</p>
            </article>
          ))}
        </div>
      </section>
    </main>
  )
}

export default App
