import { Router, Request, Response } from "express";
import { createMember, deleteMember, getAllMembers, getMemberById, getTotalCount, updateMember } from "../service/memberServices";

const membersRouter = Router();

membersRouter.get("/", async (req: Request, res: Response) => {
  const page = Number(req.query.page) || null;
  const limit = Number(req.query.limit) || null;
  const members = await getAllMembers(page, limit);


  const totalCount = await getTotalCount();
  if(members.data){
    return res.json({
      members: members.data,
      count: totalCount
    });
  }
  if(members.error) return res.status(500).json({ error: members.error });
  return res.json([]);
});

membersRouter.get("/:id", async (req: Request, res: Response) => {
  const memberId = req.params.id;
  const member = await getMemberById(memberId);
  if(member.data){
    return res.json(member.data[0]);
  }
  if(member.error) return res.status(500).json({ error: member.error });

});

membersRouter.post("/", async (req: Request, res: Response) => {
  console.log(req.body);
  const member = req.body;
  const newMember = await createMember(member);
  if(newMember.data) return res.status(201).json(newMember.data[0]);
  if(newMember.error) return res.status(500).json({ error: newMember.error });
});

membersRouter.patch("/:id", async (req: Request, res: Response) => {
  const memberId = req.params.id;
  const member = req.body;
  const updatedMember = await updateMember(memberId, member);
  if(updatedMember.data) return res.json(updatedMember.data[0]);
  if(updatedMember.error) return res.status(500).json({ error: updatedMember.error });
});

membersRouter.delete("/:id", async (req: Request, res: Response) => {
  const memberId = req.params.id;
  const deletedMember = await deleteMember(memberId);
  if(deletedMember.data) return res.status(200).json(deletedMember.data[0]);
  if(deletedMember.error) return res.status(500).json({ error: deletedMember.error });
});

export default membersRouter;