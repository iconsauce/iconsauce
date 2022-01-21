const Component = () => {

  /*
  gm/accessible-forward <== accessible_forward
  gm/vpn-key            <== vpn_key
  gm/warning            <== warning
  mdi/emoticon-happy    <== emoticon-happy
  mgg/terminal          <== terminal
  */

  const icon = 'gm/warning'

  return <section className={ icon }>
    <div className="grid desktop:grid-cols-4 mdi/emoticon-happy tablet:grid-cols-2 grid-cols-1 desktop:gap-6 gap-12 desktop:auto-rows-fr desktop:items-end">
      <i className="gm/vpn-key"/>
      <span className='bg-adjust-tone-01/24 mgg/terminal'/>
      <div>
        <footer title="gm/accessible-forward"></footer>
      </div>
    </div>
  </section>
}
export default Component
