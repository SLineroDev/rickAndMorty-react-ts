import{j as i,_ as d,r as l,R as h,a as f}from"./vendor.e0a34bec.js";const p=function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const s of r.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&o(s)}).observe(document,{childList:!0,subtree:!0});function c(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerpolicy&&(r.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?r.credentials="include":e.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function o(e){if(e.ep)return;e.ep=!0;const r=c(e);fetch(e.href,r)}};p();async function g(){return await fetch("/rickAndMorty-react-ts/data.json").then(async n=>await n.json())}const t=i.exports.jsx,u=i.exports.jsxs,m=i.exports.Fragment;function v(){return t("div",{style:{height:"100px",backgroundColor:"lightgrey"}})}function y(n){const{name:a,status:c,image:o}=n.character;return u("div",{className:"character-card",children:[t(d,{height:100,offset:100,once:!0,placeholder:t(v,{}),children:t("img",{src:o,width:"800px",height:"800px",alt:""})}),t("div",{children:t("strong",{children:a})}),t("div",{children:c})]})}function C(n){const[a,c]=l.exports.useState([]);function o(e){return e.name.toLowerCase().includes(n.filter.toLowerCase())}return l.exports.useEffect(()=>{g().then(e=>{c(e.results)}).catch(e=>console.log(e))},[]),t("div",{className:"characters-list",children:a.filter(o).map((e,r)=>t(y,{character:e},r))})}function x(n){return u("nav",{children:[t("img",{src:"/rickAndMorty-react-ts//logo.png",alt:""}),t("input",{type:"text",name:"",id:"",value:n.filterValue,onChange:a=>n.onFilterChange(a.target.value)}),t("button",{children:"Buscar"})]})}function L(){const[n,a]=l.exports.useState("");return u(m,{children:[t(x,{filterValue:n,onFilterChange:a}),t(C,{filter:n})]})}h.render(t(f.StrictMode,{children:t(L,{})}),document.getElementById("root"));