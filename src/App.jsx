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
        'Administered Office 365 and Entra ID for 500+ users, maintaining 99.9% uptime and full compliance with security policies.',
        'Managed end-to-end user lifecycle using PowerShell scripting to automate onboarding/offboarding for 500+ users, improving efficiency by 90%.',
        'Handled ServiceNow, ConnectWise Manage, Automate, and Service Manager tickets, ensuring timely resolution of high-priority incidents.',
        'Resolved Level 1-2 issues across Windows 10/11, Microsoft 365, networking, and BitLocker, minimizing user downtime.',
        'Led rollout of Multi-Factor Authentication (MFA) across the organization, reducing unauthorized access incidents by 40% within one quarter.',
      ],
    },
    {
      company: 'DXC Technology',
      title: 'Analyst III Infrastructure Services',
      period: 'Jan 2022 - Sep 2025',
      location: 'Quezon City',
      highlights: [
        'Resolved an average of 60+ technical tickets per week while maintaining a 98% customer satisfaction rating.',
        'Diagnosed and escalated complex infrastructure issues, improving resolution time for high-priority incidents.',
        'Delivered consistent client support by maintaining clear communication and rapid response times, strengthening client relationships.',
        'Maintained SLA compliance by prioritizing critical incidents and ensuring timely ticket closure.',
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
    {
      category: 'Cloud & Identity',
      items: 'Microsoft 365, Entra ID (Azure AD), Exchange Online, MFA, Access Control',
    },
    {
      category: 'Systems Administration',
      items: 'Active Directory (GPO, User Management), Windows 10/11, BitLocker',
    },
    {
      category: 'Networking & Security',
      items: 'TCP/IP, DNS, Network Troubleshooting, Firewall Basics, Email Security',
    },
    {
      category: 'ITSM & Tools',
      items: 'ServiceNow, ConnectWise Manage, ConnectWise Automate, RMM Tools',
    },
    {
      category: 'Support Operations',
      items: 'Incident Management, SLA Compliance, End-User Support (L1-L2)',
    },
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
        <div className="avatar">
          <img src={`${import.meta.env.BASE_URL}profile.png`} alt="Louis Moya" />
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
          <div className="skills-groups">
            {skills.map((skill) => (
              <p key={skill.category} className="skill-line">
                <strong>{skill.category}:</strong> {skill.items}
              </p>
            ))}
          </div>

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
