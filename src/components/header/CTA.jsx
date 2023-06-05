import React from 'react'
import CV0 from '.././../assets/CV0.pdf'
const CTA = () => {
return (
<div className='cta'>

<a href={CV0} className='btn btn-primary' target="_blank"> VIEW CV</a>
<a href="#contact" className='btn btn-primary'>Let's Talk</a>
</div>
)
}
export default CTA 
//this line indicates that this component can be imported and used everywhere in our application.