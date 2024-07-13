// import CredentialsProvider from "next-auth/providers/credentials"

//   export const options = {
//     providers: [
//         CredentialsProvider({

//           name: 'Credentials',
//           credentials: {
//             email: { label: "email", type: "email", placeholder: "jsmith" },
//             password: { label: "Password", type: "password" }
//           },
//           async authorize(credentials, req) {
//             const newurl = "http://localhost:3000/api/signin"
//             const res = await fetch(newurl, {
//               method: 'POST',
//               body: JSON.stringify(credentials),
//               headers: { "Content-Type": "application/json" }
//             })
//             const admin = await res.json()
      
//             if ( admin) {
//               return {...admin,
//               name: admin.data.name,
//               email: admin.data.email,
//               id: admin.data._id,}
//             }
//             return null
//           }
//         })
//       ],

//       pages: {
//         signIn: "/signin",
//       },
    
//       callbacks: {
//         async redirect() {
//           return "/home";
//         },
//         async jwt({ admin, token }: any) {
//           if (admin) token.id = admin.id;
//           return token;
//         },
    
//         async session({ session, token }: any) {
//           if (session) session.user.id = token.id;
//           return session;
//         },
//       },
// };
