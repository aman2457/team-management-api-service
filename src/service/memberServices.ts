import databaseClient from "../datasource/dbClient";

export const getAllMembers = async () => {
  const members = await databaseClient.from("users").select("*");
  return members;
}

export const getMemberById = async (id: string) => {
    const member = await databaseClient.from("users").select("*").eq("id", id);
    return member;
}

export const createMember = async (member: any) => {
    const newMember = await databaseClient.from("users").insert({...member}).select();
    return newMember;
}

export const updateMember = async (id: string, member: any) => {
    const updatedMember = await databaseClient.from("users").update(member).eq("id", id).select();
    return updatedMember;
}

export const deleteMember = async (id: string) => {
    const deletedMember = await databaseClient.from("users").delete().eq("id", id).select();
    return deletedMember;
}


