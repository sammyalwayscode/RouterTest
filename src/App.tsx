import { RouterProvider } from "react-router-dom";
import { mainRoute } from "./router/Router";

const App = () => {
  return (
    <div>
      <RouterProvider router={mainRoute} />
    </div>
  );
};

export default App;

// import "./App.css";
// import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
// import { getProfile, postProfile } from "./comp/ApiCall";
// import { useState } from "react";

// function App() {
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");

//   const client = useQueryClient();

//   const uploadData = useMutation({
//     mutationFn: postProfile,
//     onSuccess: () => {
//       client.invalidateQueries({ queryKey: ["newProfile"] });
//       console.log("Posted");
//     },
//   });

//   const uploadAction = () => {
//     uploadData.mutate({
//       name,
//       email,
//     });
//   };

//   const { data, isLoading } = useQuery({
//     queryKey: ["profile"],
//     queryFn: getProfile,
//   });

//   if (isLoading) {
//     return <div>Loading...</div>;
//   }
//   console.log(isLoading);

//   return (
//     <>
//       <h1>Vite + React</h1>
//       <section>
//         <input
//           type="text"
//           placeholder="Enter Your name"
//           value={name}
//           onChange={(e) => {
//             setName(e.target.value);
//             console.log(name);
//           }}
//         />
//         <input
//           type="email"
//           placeholder="Enter Your Email"
//           value={email}
//           onChange={(e) => {
//             setEmail(e.target.value);
//           }}
//         />
//         <button onClick={uploadAction}>Send</button>
//       </section>
//       {isLoading && <div>Loading</div>}
//       <div className="card">
//         {data?.data?.map((profiler: { _id: string; name: string }) => {
//           return (
//             <ul key={profiler._id}>
//               <li>{profiler.name}</li>
//             </ul>
//           );
//         })}
//       </div>

//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   );
// }

// export default App;
