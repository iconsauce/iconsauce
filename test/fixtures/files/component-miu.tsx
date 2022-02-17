import React from 'react'

const Component = () => {

  const icon = 'miu/filled/warning'

  return <section className={ icon }>
    <div className="grid desktop:grid-cols-4 miu/filled/add-chart tablet:grid-cols-2 grid-cols-1 desktop:gap-6 gap-12 desktop:auto-rows-fr desktop:items-end">
      <i className="miu/filled/info"/>
      <span className='bg-adjust-tone-01/24 miu/filled/error'/>
      <div>
        <footer title="miu/filled/close"></footer>
      </div>
    </div>
  </section>
}
export default Component
