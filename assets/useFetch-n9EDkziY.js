import{a as t}from"./index-umuunSGL.js";function S(s){const[a,r]=t.useState(null),[e,c]=t.useState(!0),[n,o]=t.useState(!1),[i,f]=t.useState(null);return t.useEffect(()=>{async function l(){try{const u=await s();r(u.result),o(!0)}catch(u){f(u)}finally{c(!1)}}l()},[e]),{data:a,isLoading:e,isSuccess:n,error:i}}function h(s){const{data:a,isLoading:r,isSuccess:e,error:c}=S(s);return{result:a,isLoading:r,isSuccess:e,error:c}}export{h as u};
