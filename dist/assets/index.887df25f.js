import{j as i,_ as d,r as l,R as f,a as h}from"./vendor.e0a34bec.js";const m=function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const c of r.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&o(c)}).observe(document,{childList:!0,subtree:!0});function s(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerpolicy&&(r.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?r.credentials="include":e.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function o(e){if(e.ep)return;e.ep=!0;const r=s(e);fetch(e.href,r)}};m();async function p(){return await fetch("/rickAndMorty-react-ts/data.json").then(async n=>await n.json())}const t=i.exports.jsx,u=i.exports.jsxs,g=i.exports.Fragment;function v(n){const{name:a,status:s,image:o}=n.character;return u("div",{className:"character-card",children:[t(d,{offset:200,once:!0,children:t("img",{src:o,alt:""})}),t("div",{children:t("strong",{children:a})}),t("div",{children:s})]})}function y(n){const[a,s]=l.exports.useState([]);function o(e){return e.name.toLowerCase().includes(n.filter.toLowerCase())}return l.exports.useEffect(()=>{p().then(e=>{s(e.results)}).catch(e=>console.log(e))},[]),t("div",{className:"characters-list",children:a.filter(o).map((e,r)=>t(v,{character:e},r))})}function C(n){return u("nav",{children:[t("img",{src:"/rickAndMorty-react-ts//logo.png",alt:""}),t("input",{type:"text",name:"",id:"",value:n.filterValue,onChange:a=>n.onFilterChange(a.target.value)}),t("button",{children:"Buscar"})]})}function x(){const[n,a]=l.exports.useState("");return u(g,{children:[t(C,{filterValue:n,onFilterChange:a}),t(y,{filter:n})]})}f.render(t(h.StrictMode,{children:t(x,{})}),document.getElementById("root"));