import Profile from "./Profile";

const usuario = [
   {numero: 1},
   {numero: 2},
   {numero: 3},
   {numero: 4}
]

export default function Influncers() {
  return (
    <div className="bg-white py-2 sm:py-3">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 sm:grid-cols-2 gap-10">

    {usuario.map((user, i) => (
        <Profile  key={i} id={user.numero}/>
    ))}



        </div>
        </div>
  );
}




