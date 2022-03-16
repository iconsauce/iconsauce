/* eslint-disable @typescript-eslint/no-unsafe-return */

import React from 'react'

const Component = () => {

  const icon = 'mi/baseline/warning'

  return <section className={ icon }>
    <div className="grid desktop:grid-cols-4 mdi/emoticon-happy tablet:grid-cols-2 grid-cols-1 desktop:gap-6 gap-12 desktop:auto-rows-fr desktop:items-end">
      <i className="mi/baseline/vpn-key"/>
      <span className='bg-adjust-tone-01/24 mgg/terminal'/>
      <div>
        <footer title="mi/baseline/accessible-forward"></footer>
      </div>
    </div>
  </section>
}
export default Component
