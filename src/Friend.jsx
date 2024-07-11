/* eslint-disable react/prop-types */

export default function Friend({friend}){
   console.log(friend)
   const {email,name} =friend
    return(
        <div className="box">
           <h3>Address: {email} </h3>
           <p>Company Name: {name}</p>
        </div>
    )
}