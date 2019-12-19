import React, { useEffect } from 'react'
import jQuery from 'jquery'
import '@fancyapps/fancybox'
import '@fancyapps/fancybox/dist/jquery.fancybox.css'
const FancyBoxWrapper = props => {
  useEffect(() => {
    jQuery(function() {
      jQuery().fancybox({
        selector: `[data-count=${props.counter}] .blocks-gallery-item a`,
        buttons: ['slideShow', 'zoom', 'fullScreen', 'close'],
        loop: true,
      })
    })

    return function cleanup() {
      jQuery.fancybox.destroy()
    }
  })
  const Tag = props.tag
  return (
    <>
      <Tag data-count={props.counter} className={props.classNames}>
        {props.children}
      </Tag>
    </>
  )
}

export default FancyBoxWrapper
