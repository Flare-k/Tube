import axios from "axios";

const addCommentForm = document.getElementById("jsAddComment");
const commentList = document.getElementById("jsCommentList");
const commentNumber = document.getElementById("jsCommentNumber");
const addCommentButton = document.getElementById("jsAddCommentButton");

const removeCommentButton = document.querySelectorAll(".fa-times");

const findCommentId = async () => {
  let videoId = window.location.href.split("/videos/")[1];
  videoId = videoId.replace("?", "");
  const response = await axios({
    url: `/api/${videoId}/findId`,
    method: "get",
    data: "",
  });
  // const li = commentList.querySelector("li");
  // console.log("li ID: ", li);
  console.log("findCommentId response: ", response);
  console.log("findCommentId response.data: ", response.data);
};

const increaseNumber = () => {
  commentNumber.innerHTML = parseInt(commentNumber.innerHTML, 10) + 1;
};
const sendComment = async (comment) => {
  let videoId = window.location.href.split("/videos/")[1];
  videoId = videoId.replace("?", "");
  const response = await axios({
    url: `/api/${videoId}/comment`,
    method: "post",
    data: {
      comment,
    },
  });
  const li = commentList.querySelector("li");
  console.log("li ID: ", li);
  console.log("response: ", response);
  findCommentId();
  if (response.status === 200) {
    addComment(comment, response.data.commentId);
  }
};

const removeComment = async (element, event) => {
  let videoId = window.location.href.split("/videos/")[1];
  videoId = videoId.replace("?", "");
  console.log("element.id:", element.id);
  const response = await axios({
    url: `/api/${videoId}/delcomment`,
    method: "post",
    data: {
      commentId: element.id,
    },
  });
  console.log("response: ", response);
  if (response.status === 200) {
    //event.preventDefault(); //새로고침 방지
    element.remove();
    commentNumber.innerHTML = parseInt(commentNumber.innerHTML, 10) - 1;
  }
};

const handleSubmit = (event) => {
  event.preventDefault(); //새로고침 방지
  const commentInput = addCommentForm.querySelector("input");
  const comment = commentInput.value;

  sendComment(comment);

  commentInput.value = "";
};

const handleRemoveComment = (event) => {
  console.log(event.path[1].id, this);
  const btn = event.target;
  const li = btn.parentNode;
  commentList.removeChild(li);
  removeComment(event.path[1], event);
};

const addComment = (comment, commentId) => {
  const li = document.createElement("li");
  const span = document.createElement("span");
  const div = document.createElement("div");
  const i = document.createElement("i");
  li.setAttribute("id", commentId);

  div.classList.add("video__comment-box");
  i.classList.add("fas");
  i.classList.add("fa-times");
  span.innerHTML = comment;
  div.append(span);
  li.append(div);
  li.append(i);

  commentList.prepend(li);
  li.addEventListener("click", handleRemoveComment);
  increaseNumber();
};

const init = () => {
  addCommentForm.addEventListener("submit", handleSubmit);
  addCommentButton.addEventListener("click", handleSubmit);

  removeCommentButton.forEach((element) => {
    element.addEventListener("click", handleRemoveComment);
  });
};

if (addCommentForm) {
  init();
}
