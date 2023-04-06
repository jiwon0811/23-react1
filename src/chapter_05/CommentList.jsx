import React from "react";
import Comment from "./Comment";

const comments = [
    {
        name: "이지원",
        comment: "안녕하세요.이지원입니다,",
    },
    {
        name: "이지원2",
        comment: "안녕하세요.이지원2입니다",
    },
    {
        name: "이지원3",
        comment: "안녕하세요.이지원3입니다",
    },
];

function CommentList(props) {
    return (
        <div>
            {comments.map((comment) => {
                return (
                    <Comment name={comment.name} comment={comment.comment} />
                );
            })}
        </div>
    );ㅉ
}

export default CommentList;