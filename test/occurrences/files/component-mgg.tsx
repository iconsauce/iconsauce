import React from 'react'

const Component = () => {

  const icon = 'mgg/adv-denied'

  return <section className={ icon }>
    <div className="grid desktop:grid-cols-4 mgg/logo-gpl tablet:grid-cols-2 grid-cols-1 desktop:gap-6 gap-12 desktop:auto-rows-fr desktop:items-end">
      <i className="mgg/isbn"/>
      <span className='bg-adjust-tone-01/24 mgg/terminal'/>
      <div>
        <footer title="mgg/signpost"></footer>
      </div>
    </div>
  </section>
}
export default Component
