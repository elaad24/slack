import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export const authConfig: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Sign in",
      credentials: {
        email: {
          label: "Email",
          type: "email",
          placeholder: "exemple@exemple.com",
        },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials): Promise<null | undefined>{
        if(!credentials || !credentials.email || !credentials.password){
            return null;
        }


        // check in the db that this email is exist 
        // const dbUser = await  db.findFirst


        // checl in the db that tha password that given it is the password for this email 
        // if( dbUser && dbUser.password == credentials.password){ return  user name  , user email  }


        // here we return null becose if the data is incorrect we return null and the login will return an error 
        // return null 
      }
    }),
  ],
};
