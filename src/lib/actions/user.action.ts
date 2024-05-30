"use server";

import User from "@/lib/modals/user.modal";
import { connect } from "@/lib/db";

export async function createUser(user: any) {
  try {
    await connect();
    console.log("mongo connected");
    
    const newUser = await User.create(user);
    console.log("user created");
    
    return JSON.parse(JSON.stringify(newUser));
  } catch (error) {
    console.log(error);
  }
}
