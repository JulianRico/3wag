import {  Link } from "react-router-dom";
import RedesProfile from './RedesProfile'

export default function Profile({ data}) {

const {name, category_name , accounts,  user_id ,avatar } = data

console.log(accounts)

    return(
       
  <div className="max-w-2xl mx-4 sm:max-w-sm md:max-w-sm lg:max-w-sm xl:max-w-sm  mt-16 bg-white shadow-xl rounded-lg text-gray-900">
    <div className="rounded-t-lg h-32 overflow-hidden">
      <img
        className="object-cover object-top w-full"
        src="https://firebasestorage.googleapis.com/v0/b/data-qc-api.appspot.com/o/3wag%2Fbackground.jpg?alt=media&token=cdb5ca3f-3a11-4360-aa68-8e8ceadd293e"
        alt="Mountain"
      />
    </div>
    <div className="mx-auto w-32 h-32 relative -mt-16 border-4 border-white rounded-full overflow-hidden">
      <img
        className="object-cover object-center h-32"
        src={avatar}
        alt="Woman looking front"
      />
    </div>
    <div className="text-center mt-2">
      <h2 className="font-semibold">{name}</h2>
      <p className="text-gray-500">{category_name}</p>
    </div>
    <ul className="py-4 mt-2 text-gray-700 flex items-center justify-around">
      {accounts.map((influencer, index)=>(
        <RedesProfile key={index} name={influencer.social_network_name} followers={influencer.statistics?.followers} account={influencer.username}/>
      ))

      }
    
    </ul>
    <div className="p-4 border-t mx-8 mt-2">
        
<Link to={`/influencer/${user_id}`}>
      <button className="w-1/2 block mx-auto rounded-full bg-gray-900 hover:shadow-lg font-semibold text-white px-6 py-2">
        Ver
      </button></Link>
    </div>
  </div>


    )
}