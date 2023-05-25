// import React from 'react'

// function Test() {

//     const date = new Date()
//     const hours = date.getHours()
//     let timeOfDay

//     if (hours < 12) {
//         timeOfDay = 'Goood morgon'
//     }else if (hours >= 12 && hours < 17) {
//         timeOfDay = 'Good kväll'
//     }else {
//         timeOfDay = 'Natt'
//     }

//   return (
//     <div>
//         {timeOfDay}

//     </div>
//   )
// }

// export default Test


// import React from 'react'
// import cat from '../images/cat-551554_1920.jpg'
// import  phone from '../images/call_FILL0_wght400_GRAD0_opsz48.svg'
// import mail from '../images/mail_FILL0_wght400_GRAD0_opsz48.svg'

// function Test(props) {
//     console.log(props);
//   return (
//     <div>
//         <div className='contact-card'>
//             <img src={props.img} alt="" />
//             <h3>{props.name}</h3>
//             <div className='info-group'>
//                 <img src={phone} alt="" />
//                 <p>{props.phoneNumber}</p>
//             </div>
//             <div className='info-group'>
//                 <img src={mail} alt=""  />
//                 <p> {props.email} </p>
//             </div>
//         </div>
//     </div>
//   )
// }

// export default Test

import React from 'react'


function Test(props) {
    console.log(props.isPun);
  return (
    <div>
        {props.joke && <h3>Joke: {props.joke}</h3>}
        <p>Punchline: {props.punchline}</p>
        {<p> {props.isPun} </p>}
    </div>
  )
}

export default Test
