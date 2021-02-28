import { createAction, props } from "@ngrx/store";
import { Vote } from "src/app/shared/models/vote.model";

export const getAllVotes = createAction('[Votes] Get All Votes');
export const getAllVotesSuccess = createAction('[Votes] Get All Votes Success', props<{ votes: Vote[] }>());
export const getAllVotesFail = createAction('[Votes] Get All Votes Fail');

export const likeOrUnlikeVotes = createAction('[Votes] Update like or unlike Votes', props<{ id: string, isLike: boolean }>());
export const likeOrUnlikeVotesSuccess = createAction('[Votes] Update like or unlike Votes Success', props<{ vote: Vote }>());
export const likeOrUnlikeVotesFail = createAction('[Votes] Update like or unlike Votes Fail');
