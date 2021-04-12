import './Footer.scss';

const Footer = () => {
  const jasonGitHubUrl = 'https://github.com/jasonflorentino';
  const repoUrl = 'https://github.com/jasonflorentino/covid-in-york-region';

  const yrCovidDashboardUrl = 'https://www.york.ca/wps/portal/yorkhome/health/yr/covid-19/covid19inyorkregion/!ut/p/z1/tZPNcpswFIWfJQuWWBcJjOhOpa6BxNhN4j82HowxKAXkYMXUb1-R0pm20zjtJLAASZx7dPRxQRFaoaiKTzyLJRdVXKj5OhpufDb2Pe8agqlJXWAwZQG2KYwcAy2fBfDCxQBF_1J_QRBdtl-gCEWHhO_Q2qIWdYhj6U6Md7qJnVSnceLoO8PZOhhi9XbfqpNKHmSO1ud6k4hKppXU4Czqr2pylFw-PS_kokzVPY0LmWuQiBPf6YbTjQyHV21FnWYKEwpeO6SiiOuJO8lU1FjmOq_2Aq1-mnajP0xVDX94fIyYCtym_CbR6t0SL1sOv2Ye31ET_EVgs4UxBdMnnQBjc-gZLgTgTSn4n-2Z9Yl6BlzjTnDh0ygsWSG2P7qIVVtC1fnrdJ_WaT14qtVyLuXh-EEDDZqmGWRCZEU6SESpwd9KcnFUDH5XorXqH_tF9rcYLU88bdC8EnWpktz9Z7t40O1gU5d5bAwzuJ_b8GVkm3R4M5nd3Bpv3OGVA_RsT3q1t6Ffe9yv_fvACXxwDdb-Y2REgGHfpR9JQMOwX_Zhv-zDftmH_fb94q1wDuV8XlJiFQ9nAnxWLqmkzf0-z8rNZESsyw92dfUd1P5kcA!!/dz/d5/L2dBISEvZ0FBIS9nQSEh/?1dmy&urile=wcm%3apath%3a%2FYR_Content%2FYorkConstituent%2FHome%2FHealth%2FCOVID-19%2FCOVID19inYorkRegion%2F';
  const populartionUrl = 'https://en.wikipedia.org/wiki/Regional_Municipality_of_York';
  
  return (
    <footer className='Footer'>
      <section className='Footer__notes'>
        <h3 className="Footer__heading">✏️ Notes</h3>
        <ul className="Footer__list">
          <li>This site has been online and actively recording cases since Monday, April 12, 2021.</li>
          <li>Data is pulled from York Region's <a className="Footer__link" href={yrCovidDashboardUrl} target='_blank' rel='noreferrer'>COVID dashboard.</a></li>
          <li>Active cases are determined by adding up cases whose statuses are "Self-Isolating", "Hospitalized" and "Hospitalized in ICU".</li>
          <li>The per 100,000 number is based off a population of 1,109,909 <a className="Footer__link" href={populartionUrl} target='_blank' rel='noreferrer'>(2016)</a></li>
          <li>For more information, please view the data and notes published on <a className="Footer__link" href={yrCovidDashboardUrl} target='_blank' rel='noreferrer'>York Region's website.</a></li>
        </ul>
      </section>
      <section className='Footer__about'>
        <h3 className="Footer__heading">👨‍💻 About</h3>
        <ul className="Footer__list">
          <li>This site is built and maintained by <a className="Footer__link" href={jasonGitHubUrl} target='_blank' rel='noreferrer'>Jason Florentino</a>, whose parents live in York Region and wanted a quick and easy way to lookup the numbers.</li>
          <li>View the source code on <a className="Footer__link" href={repoUrl} target='_blank' rel='noreferrer'>GitHub.</a></li>
        </ul>
      </section>
    </footer>
  )
}

export default Footer;