import { ICommitCard, IDetailedCommit } from "./types";

export default class CommitCard implements ICommitCard{
  name: string;
  email: string;
  date: Date;
  message: string;
  avatarUrl: string;

  constructor (fullCommit: IDetailedCommit){
    this.name = fullCommit.commit.committer.name;
    this.email = fullCommit.commit.committer.email;
    this.date = fullCommit.commit.committer.date;
    this.message = fullCommit.commit.message;
    this.avatarUrl = fullCommit.author.avatar_url;
  }
}
