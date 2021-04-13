import './Header.scss';

const Header = () => {
  const dataUrl = 'https://www.york.ca/wps/portal/yorkhome/health/yr/covid-19/covid19inyorkregion/!ut/p/z1/tZPNcpswFIWfJQuWWBcJjOhOpa6BxNhN4j82HowxKAXkYMXUb1-R0pm20zjtJLAASZx7dPRxQRFaoaiKTzyLJRdVXKj5OhpufDb2Pe8agqlJXWAwZQG2KYwcAy2fBfDCxQBF_1J_QRBdtl-gCEWHhO_Q2qIWdYhj6U6Md7qJnVSnceLoO8PZOhhi9XbfqpNKHmSO1ud6k4hKppXU4Czqr2pylFw-PS_kokzVPY0LmWuQiBPf6YbTjQyHV21FnWYKEwpeO6SiiOuJO8lU1FjmOq_2Aq1-mnajP0xVDX94fIyYCtym_CbR6t0SL1sOv2Ye31ET_EVgs4UxBdMnnQBjc-gZLgTgTSn4n-2Z9Yl6BlzjTnDh0ygsWSG2P7qIVVtC1fnrdJ_WaT14qtVyLuXh-EEDDZqmGWRCZEU6SESpwd9KcnFUDH5XorXqH_tF9rcYLU88bdC8EnWpktz9Z7t40O1gU5d5bAwzuJ_b8GVkm3R4M5nd3Bpv3OGVA_RsT3q1t6Ffe9yv_fvACXxwDdb-Y2REgGHfpR9JQMOwX_Zhv-zDftmH_fb94q1wDuV8XlJiFQ9nAnxWLqmkzf0-z8rNZESsyw92dfUd1P5kcA!!/dz/d5/L2dBISEvZ0FBIS9nQSEh/#.YHNe3rRKisp'
  const yorkLink = <a className="Header__link" href={dataUrl} target='_blank' rel='noreferrer'>York.ca</a>;

  return (
    <header className="Header">
      <h1 className="Header__title">🏥 COVID in York Region</h1>
      <p className="Header__byline">A log of active cases. </p> 
      <p className="Header__paragraph">Data is published on {yorkLink} every day at 5pm. We then update ours later that evening.</p>
    </header>
  )
}

export default Header;