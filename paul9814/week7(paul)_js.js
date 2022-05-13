const posts = [
    { post_id: 1, post_title: "첫번쨰 글" },
    { post_id: 2, post_title: "두번쨰 글" },
    { post_id: 3, post_title: "세번쨰 글" },
  ];
  
  const comments = [
    { post_id: 1, comment_id: 1, comment: "첫번쨰 글 첫번쨰 코멘트" },
    { post_id: 2, comment_id: 1, comment: "두번쨰 글 첫번쨰 코멘트" },
    { post_id: 2, comment_id: 2, comment: "두번쨰 글 두번쨰 코멘트" },
    { post_id: 2, comment_id: 3, comment: "두번쨰 글 세번쨰 코멘트" },
    { post_id: 3, comment_id: 1, comment: "세번쨰 글 첫번쨰 코멘트" },
    { post_id: 3, comment_id: 2, comment: "세번쨰 글 두번쨰 코멘트" },
  ];
  
  const postNum = 2;

const getPost = (id, onSuccess, onError) => {
   setTimeout(() => {
     const post = posts.find( post => post.post_id === id);
     if(post) {
       onSuccess(post.post_id);
     } 
     else {
       onError("찾는 포스트 없다");
     }
   }, 3000)
 }

const getComments = (post_id, onSuccess, onError) => {
   setTimeout(() => {
     const result = comments.filter( comment => comment.post_id === post_id);
     if(result.length > 0) {
       onSuccess(result);
     } 
     else {
       onError("찾는 포스트에 코멘트가 없다");
     }
   }, 4000)
 }

 getPost(
   postNum,
   (postId) => {
     console.log('Post', postId);
     getComments(
       postId,
       (result) => {
         console.log('Comments:' , result)
       },
       (message) => {
         console.log(message);
       }
     )
   },
   (message) => {
     console.log(message);
   }
 )

 const getPost = (id) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const post = posts.find((post) => post.post_id === id);
        if (post) {
          resolve(post.post_id);
        } else {
          reject("찾는 포스트 없다");
        }
      }, 3000);
    });
  };
  
  const getComments = (post_id) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const result = comments.filter((comment) => comment.post_id === post_id);
        if (result.length > 0) {
          resolve(result);
        } else {
          reject("찾는 포스트에 코멘트가 없다");
        }
      }, 4000);
    });
  };

getPost(postNum)
 .then(postId => {
   console.log('Post:', postId)
   return getComments(postId)
 })
 .then(result => console.log('Comments:', result))
 .catch(message => console.log(message));

 async function getResult() {
    const postId_result = await getPost(postNum);
    const comments_result = await getComments(postId_result);
    console.log("Post:", postId_result, "Comments:", comments_result);
  }
  
  getResult();